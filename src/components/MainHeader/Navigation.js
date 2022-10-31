import React, { useContext } from "react";
import AuthContext from "../../store/AuthCoontext";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const contextData = useContext(AuthContext);
  console.log(contextData);
  return (
    <nav className={classes.nav}>
      <ul>
        {contextData.isLogin && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {contextData.isLogin && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {contextData.isLogin && (
          <li>
            <button onClick={contextData.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
