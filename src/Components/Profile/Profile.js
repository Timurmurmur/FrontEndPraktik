import React from 'react';
import './Profile.css';

import { Article } from '../Article/Article';
import { UserContent } from '../UserContent/UserContent';
import { Loader } from '../Loader/Loader';
import { PageStatus } from '../../common/typings';

export class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.props.loadUserPosts();
  }

  render() {
    if(this.props.pageStatus === PageStatus.LOADING) {
      return <Loader />
    } else {
        return(
          <div className="mainContainer">
            {/* <Article /> */}
            <UserContent  admin={true} items={this.props.posts}/>
          </div>
        )
    }
  }
}