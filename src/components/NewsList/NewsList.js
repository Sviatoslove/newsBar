import React from "react";

const NewsList = props => {
 return(
  <div className="news__list">
    <p className="news__block__item" >
    {props.newsItem}
    </p>
  </div>
 )
}

export default NewsList;