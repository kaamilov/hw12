import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import Switch from "../swicth/Switch";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Switch/>
      <Navigation
      //  isLogin={props.isLogin} onLogout={props.logoutHandler} 
      />
    </header>
  );
};

export default MainHeader;
