import React from 'react';
import './Profile.css';

import { Article } from '../Article/Article';
import { UserContent } from '../UserContent/UserContent';

export const Profile = () => {
  return(
    <div className="mainContainer">
      {/* <Article /> */}
      <UserContent />
    </div>
  )
}