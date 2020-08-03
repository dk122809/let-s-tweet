import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthIndex from "./Auth/Index";
import Message from "./Message/Message";
import User from "./Auth/User";
import NewMessage from "./Message/NewMessage";
import Logout from "./Auth/Logout";
import Navbar from "./Navbar";

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userAuth, setUserAuth] = useState({
    userId: "",
    userToken: "",
  });
  const [respErrorMsg, setErrorRespMsg] = useState("");
  const [respSuccessMsg, setSuccessRespMsg] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setErrorRespMsg("");
      setSuccessRespMsg("");
    }, 4000);
  });
  return (
    <>
      <Navbar isLogin={isLogin} />
      {respErrorMsg !== "" ? (
        <div className="alert alert-danger" role="alert">
          {respErrorMsg}
        </div>
      ) : null}
      {respSuccessMsg !== "" ? (
        <div className="alert alert-success" role="alert">
          {respSuccessMsg}
        </div>
      ) : null}
      <Switch>
        <Route exact path="/" component={Message} />

        <Route exact path="/login">
          {isLogin !== true ? (
            <AuthIndex
              setSuccessRespMsg={setSuccessRespMsg}
              setErrorRespMsg={setErrorRespMsg}
              setUserAuth={setUserAuth}
              setIsLogin={setIsLogin}
            />
          ) : (
            <Redirect to="/user" />
          )}
        </Route>
        <Route exact path="/register">
          {isLogin !== true ? (
            <AuthIndex
              setSuccessRespMsg={setSuccessRespMsg}
              setErrorRespMsg={setErrorRespMsg}
              setUserAuth={setUserAuth}
              setIsLogin={setIsLogin}
            />
          ) : (
            <Redirect to="/user" />
          )}
        </Route>
        <Route exact path="/user">
          {isLogin !== true ? (
            <Redirect to="/login" />
          ) : (
            <User userAuth={userAuth} />
          )}
        </Route>
        <Route exact path="/newmessage">
          {isLogin !== true ? (
            <Redirect to="/login" />
          ) : (
            <NewMessage setSuccessRespMsg={setSuccessRespMsg} userAuth={userAuth} />
          )}
        </Route>
        <Route exact path="/logout">
          <Logout
            setSuccessRespMsg={setSuccessRespMsg}
            setIsLogin={setIsLogin}
          />
        </Route>
      </Switch>
    </>
  );
};

export default Router;
