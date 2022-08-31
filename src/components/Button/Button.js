import React, { useState } from "react";
import './Button.scss'

const Button = props => {
 return(
  <div className="Button">
   <button className="button__item" id={props.id} onClick={props.changeActive}>
    Open {props.newsTitle}
   </button>
  </div>
 )
}

export default Button;