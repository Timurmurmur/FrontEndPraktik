import React from 'react';
import './NewArticle.css';
import { UserContent } from '../UserContent/UserContent';
import SettingMenu from '../SettingMenu/SettingMenu';
import { Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { TextEditor } from '../TextEditor/TextEditor';

export class NewArticle extends React.Component{
  constructor(props){
    super(props);
    this.state = { articleTitle: '', editorState: EditorState.createEmpty() };
    this.articleTitleChangeHandler = this.articleTitleChangeHandler.bind(this);
    this.onChange = (editorState) => this.setState({editorState});
  }
  
  componentDidMount() {
    console.log(this.props)
  }

  submitEditingHandler = (e) => {
    const articleText = stateToHTML(this.state.editorState.getCurrentContent());
    this.props.addArticle({title: this.state.articleTitle, post: articleText})
  }

  articleTitleChangeHandler = (e) => {
    this.setState({
      articleTitle: e.target.value
    })
  }


  render() {
    return(
      <>
        <SettingMenu />
        <div className="articleMenu">
          <span className="articleID">Новая статья</span>
        </div>
        <div className="article">
          <div className="userContent">
            <div className="newArticleItem">
              <Input placeholder="Название статьи" style={{width: '30%'}} value={this.state.articleTitle} onChange={e => this.articleTitleChangeHandler(e)}/>
            </div>
            <div className="newArticleItem">
              <TextEditor editorState={this.state.editorState} onChange={this.onChange} />
            </div>
            <div className="newArticleItem" style={{display: 'flex', justifyContent: 'center'}}>
              <Button onClick={e => this.submitEditingHandler(e)} type="primary" style={{backgroundColor: 'green'}}>Добавить статью</Button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

