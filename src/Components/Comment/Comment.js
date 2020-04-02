import React from 'react';
import './Comment.css';
import { Input, Button } from 'antd';
import { Loader } from '../Loader/Loader';

export class Comment extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      comment: ''
    }
  }

  componentDidMount() {
    console.log(this.props);

    this.props.loadComments(this.props.post_id);
  }

  addCommentInputHandler = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  addCommentButtonHandler = (e) => {
    this.props.addComment(this.props.post_id, this.state.comment);
  }

  render() {
    if( this.props.pageStatus === "LOADING" ){
      return <Loader />
    } else {
      return (
        <div className="commentContainer">
          { this.props.comments.map((user, id) => {
              return user.comments.map((comment,index2) => {
                return (
                  <div className="commentWrapper" style={{marginBottom: 20}}>
                  <div className="commentHeader">
                    <div className="commentImage">
                      { user.avatar === null ? 
                      <img src="https://anctravel.com.ua/wp-content/uploads/2015/12/avada-team2-174543104.jpg"/>
                      :
                      <img src={user.avatar}/>
                      }
                    </div>
                  </div>
                    <div className="commentBody">
                      <div className="commentInfo">
                        <span className="commentName">{user.nickname}</span>
                        <span className="commentDate">{comment.createdAt.split('T')[0]}</span>
                      </div>
                      <div className="commentText">
                        <span>
                          {comment.comment}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })
          })}
          <div className="addCommentContainer">
            <div className="addCommentTitle">
                <span>
                  Оставьте свой комментарий
                </span>
              </div>
            <div className="addCommentWrapper">
              
              <div className="addCommentInput">
                <Input placeholder="Введите текст комментария" value={this.state.comment} onChange={this.addCommentInputHandler}/>
              </div>
              <div className="addCommentButton">
                <Button type="primary" onClick={this.addCommentButtonHandler}>Отправить</Button>
              </div>
            </div>
          </div>
        </div>
      )  
    }
  }
}