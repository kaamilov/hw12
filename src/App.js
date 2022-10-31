import React, { useState } from "react";
import { useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Counter from "./components/Counter";
import AuthContext from "./store/AuthCoontext";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //false => true => false

  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem("isLogin"); //1

    if (storedUserLoggedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLogin", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLogin");
  };

  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{ isLogin: isLoggedIn, onLogout: logoutHandler }}
      >
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
