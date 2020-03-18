import React from 'react';
import './Main.css';

import { Article } from '../Article/Article';
import { UserContent } from '../UserContent/UserContent';

export const Main = () => {
  return(
    <div className="mainContainer">
      {/* <Article /> */}
      <UserContent />
    </div>
  )
}