import React from "react";
import './NewsBlock.scss';

const NewsBlock = props => {

 return (
  <div className={`news__block ${props.newsTitle}`}>
   <div className="news__block__background">
    <h2 className="news__block__ttle">
     {props.newsTitle}
    </h2>
    {props.newsItem}
   </div>
  </div>
 )
}

export default NewsBlock;