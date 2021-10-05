import React from "react";
import "./HobbyList.css";


function HobbyList({hobbies}) {
  const list = hobbies.map((hobby) => <li>{hobby}</li>);
    if (hobbies.length === 0) return ""                         
    return (
      <div>
         
       <h3>Hobbies</h3>
       <ul>{list}</ul>
        
       </div>
     )
  };

export default HobbyList;
