import React, {useState, useEffect} from 'react';
import './Article.css';
import {Button, Tooltip, Input} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import {useStore} from 'react-redux';
import {SettingMenu} from '../SettingMenu/SettingMenu';
import { Loader } from '../Loader/Loader';
import { PageStatus } from '../../common/typings';
import { TextEditor } from '../TextEditor/TextEditor';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromHTML} from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import { stateToHTML } from 'draft-js-export-html';
import { SettingMenuContainer } from '../SettingMenu/SettingMenuContainer';
import { CommentContainer } from '../Comment/CommentContainer';

const { TextArea } = Input;

export class Article extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            changeStatus: false,
            userId: localStorage.getItem('userId'),
        }
        this.onChange = (editorState) => this.setState({editorState});
        this.editButtonHandler = this.editButtonHandler.bind(this);
    }
    componentDidMount() {
        this.props.loadPost(this.props.router.params.id);
        console.log(this.props);
    }

    editButtonHandler = (event) => {
        const { changeStatus } = this.state;
        let newStatus;
        if (changeStatus){
            newStatus = false;
        } else {
            newStatus = true;
        }
        this.setState({
            changeStatus: newStatus,
            editorState: EditorState.createWithContent(stateFromHTML(this.props.post.post)),
            title: this.props.post.title
        })
    }
    submitChanging = (e) => {
        // console.log(convertToRaw(this.state.editorState.getCurrentContent()))
        const content = stateToHTML(this.state.editorState.getCurrentContent());
        this.props.changeArticle({ title: this.state.title, post: content }, this.props.post.id);
    }
    changeTitleHandler = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    deleteArticleHandler = (e) => {
        this.props.deleteArticle(this.props.post.id);
    }
   render() {
        if(this.props.pageStatus === PageStatus.LOADING ) {
            return(<Loader></Loader>)
        } else {
            // console.log(`USERID:${this.state.userId}`, `POSTOWNERID:${this.props.post.userId}`)
            console.log(stateFromHTML(this.props.post.post))
            return (
                <div className="articleWrapper">
                    <SettingMenuContainer/>
                    <div className="articleMenu">
                    <span className="articleID">Айди статьи: {this.props.post.id}</span>
                        {this.state.userId == this.props.post.userId ? 
                        <div className="articleToolTip">
                            <Tooltip title="Edit">
                                <Button className="iconEdit" type='default' shape='circle' icon={<EditOutlined />} onClick={e => this.editButtonHandler(e)}/>
                            </Tooltip>
                            <Tooltip title="Delete">
                                <Button type='default' shape='circle' icon={<DeleteOutlined />} onClick={e => this.deleteArticleHandler(e)}/>
                            </Tooltip>
                        </div>: ""}
                    </div>
                    <div className="article">
                        {this.state.changeStatus ? 
                        <>
                        <div className="articleInfo" style={{marginBottom: 20}}>
                            <Input style={{width: '30%'}} value={this.state.title} onChange={e => this.changeTitleHandler(e)}/>
                            <span className="articleDate">{this.props.post.createdAt.split('T')[0]}</span>
                        </div>
                        <TextEditor editorState={this.state.editorState} onChange={this.onChange}/>
                        <Button type="primary" style={{marginTop: 50}} onClick={e => this.submitChanging(e)}>Сохранить изменения</Button>
                        </> :
                        <>
                        <div className="articleInfo" style={{padding: '4px 11px'}}>
                            <span style={{fontSize: 25, fontWeight: 'bold'}}>{this.props.post.title}</span>
                            <span className="articleDate">{this.props.post.createdAt.split('T')[0]}</span>
                        </div>
                        <div style={{marginTop: 20, padding: '4px 11px'}} dangerouslySetInnerHTML={{__html: this.props.post.post}}>
                        </div>
                        </>
                        }
                    </div>
                    <CommentContainer post_id={this.props.post.id}/>
                </div>
            )
        }
   }
}