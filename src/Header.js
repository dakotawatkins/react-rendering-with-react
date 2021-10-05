import React from "react";
import "./Header.css";

function Header(props) {
   return (<div>
  <img className="img"src={props.imageSrc} />
    <h1>{props.name}</h1>
    <h2>Birthday: {props.birthday}</h2>
    </div>)
}

export default Header;
