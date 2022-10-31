import React, { useState } from "react";

import "./Switch.css";


const Switch = () => {
    const [toggled,setToggled]=useState(false)
    function handler(){
        setToggled((s)=>!s)
    }
  return (
    <div>
        <div onClick={handler} className={`toggle ${toggled ? "night" :""}`}>
      <div className="notch">
      </div>
      <div>
        <div className="shape sm"></div>
        <div className="shape sm"></div>
        <div className="shape md"></div>
        <div className="shape lg"></div>
      </div>
    </div>
    </div>
    
  );
};

export default Switch;