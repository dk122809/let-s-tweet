import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import * as Api from "../ApiHandle";

const Index = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleAuthChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    let apiLink = "/auth/signin";
    let apiData = {
      email: loginData.email,
      password: loginData.password,
    };
    let resp = await Api.apiHandle(apiLink, apiData, "post");
    if (resp.status === 200) {
      props.setIsLogin(true);
      props.setUserAuth(() => {
        return {
          userId: resp.data.id,
          userToken: resp.data.token,
        };
      });
      props.setSuccessRespMsg(`Welcome Back :- ${resp.data.username}`);
      history.push("/");
    } else {
      props.setErrorRespMsg(resp.data.error.message);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    let apiLink = "/auth/signup";
    let apiData = loginData;
    let resp = await Api.apiHandle(apiLink, apiData, "post");
    if (resp.status === 200) {
      props.setIsLogin(true);
      props.setUserAuth(() => {
        return {
          userId: resp.data.id,
          userToken: resp.data.token,
        };
      });
      props.setSuccessRespMsg(`You Have Successfuly Register`);
      history.push("/");
    } else {
      props.setErrorRespMsg(resp.data.error.message);
    }
  };
  return (
    <>
      {location.pathname === "/login" ? (
        <Signin
          handleChange={handleAuthChange}
          handleAuthSubmit={handleAuthSubmit}
          email={loginData.email}
          password={loginData.password}
        />
      ) : (
        <Signup
          handleChange={handleAuthChange}
          handleAuthSubmit={handleSignUpSubmit}
          email={loginData.email}
          password={loginData.password}
          username={loginData.username}
        />
      )}
    </>
  );
};

export default Index;
