import React from 'react';
import {EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';
import Editor, {composeDecorators} from 'draft-js-plugins-editor';
import createVideoPlugin from 'draft-js-video-plugin';
import { stateToHTML } from 'draft-js-export-html';
import './TextEditor.css'
import { Button, Input } from 'antd';

import createAlignmentPlugin from 'draft-js-alignment-plugin';

import createFocusPlugin from 'draft-js-focus-plugin';

import createResizeablePlugin from 'draft-js-resizeable-plugin';

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;


const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
);

const videoPlugin = createVideoPlugin({decorator});
const { types } = videoPlugin;
const plugins = [focusPlugin, alignmentPlugin, resizeablePlugin, videoPlugin];

export class TextEditor extends React.Component {
  constructor(props){
    super(props);
    this.focus = () => this.refs.editor.focus();
    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);

    this.state = {
      source: ''
    }
  }
  _handleKeyCommand(command) {
    const {editorState} = this.props;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.props.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.props.onChange(RichUtils.onTab(e, this.props.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.props.onChange(
      RichUtils.toggleBlockType(
        this.props.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.props.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        inlineStyle
      )
    );
  }

  _addVideoFromUrl(e) {
    e.preventDefault();
    const { editorState } = this.props;
    
    if (RichUtils.getCurrentBlockType(editorState) === ATOMIC) {
      return editorState;
    }
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      VIDEOTYPE,
      'IMMUTABLE',
      { src: this.state.source }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    this.props.onChange(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' '))
  }

  videoUrlChangeHandler (e) {
    this.setState({
      source: e.target.value
    })
  }
  render() {
    const {editorState} = this.props;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return(
      <div className="RichEditor-root">
              <BlockStyleControls
                editorState={this.props.editorState}
                onToggle={this.toggleBlockType}
              />
              <InlineStyleControls
                editorState={this.props.editorState}
                onToggle={this.toggleInlineStyle}
              />
              <div>
                <Button type="primary" onClick={e => this._addVideoFromUrl(e)}>Добавить видео</Button>
                <Input placeholder="Вставьте url для видео" style={{width: 300, marginLeft: 20}} value={this.state.source} onChange={e => this.videoUrlChangeHandler(e)}/>
              </div>
              <div className={className} onClick={this.focus}>
                <Editor
                  blockStyleFn={getBlockStyle}
                  customStyleMap={styleMap}
                  editorState={this.props.editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  onChange={this.props.onChange}
                  onTab={this.onTab}
                  placeholder="Сдесь будет ваша статья..."
                  ref="editor"
                  spellCheck={true}
                  plugins={plugins}
                />
              </div>
              <div style={{display: 'flex'}}>
                <AlignmentTool />
              </div>
            </div>
    )
  }
}

const VIDEOTYPE = 'draft-js-video-plugin-video';
const ATOMIC = 'atomic';

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];

const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
];

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

