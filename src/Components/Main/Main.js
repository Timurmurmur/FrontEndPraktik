import React, {useEffect} from 'react';
import './Main.css';
import {SettingMenu} from '../SettingMenu/SettingMenu';
import {UserContentItem} from '../UserContentItem/UserContentItem';
import {Spin} from 'antd';
import { Article } from '../Article/Article';
import { UserContent } from '../UserContent/UserContent';
import { Search } from '../Search/Search';
import { Loader } from '../Loader/Loader';
import { PageStatus } from '../../common/typings';

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.props.loadPosts();
        console.log(this.props);
    }

    render() {
        return(
            <div className="mainContainer">
                {this.props.pageStatus === PageStatus.LOADING ? <Loader /> :
                <div className="userContentWrapper">
                <div className="articleMenu" style={{alignItems: 'center'}}>
                    <div>
                    <Search />
                    </div>
                    <span className="articleID">Список статей</span>
                </div>
                <div className="article">
                    <div className="userContent">
                        <UserContentItem
                            admin={false}
                            items={this.props.posts}
                        ></UserContentItem>
                    </div>
                </div>
                </div>}
            </div>
        )
    }
}