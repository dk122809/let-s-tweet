import React, { useEffect, useState } from "react";
import * as Api from "../ApiHandle";
import MessageCard from "../Message/MessageCard";

const User = (props) => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const messages = async () => {
      let apiLink = "/messages";
      let resp = await Api.apiHandle(apiLink, "", "get");
      let filterResp = resp.data.filter((e) => {
        return e.user._id === props.userAuth.userId;
      });
      setAllData(() => {
        return filterResp;
      });
    };
    messages();
  }, [props.userAuth.userId]);

  const deleteMessage = async (id) => {
    let apiLink = `/users/${props.userAuth.userId}/messages/${id}`;
    let resp = await Api.apiHandle(
      apiLink,
      "",
      "DELETE",
      props.userAuth.userToken
    );
    setAllData((prevData) => {
      let filterResp = prevData.filter((e) => {
        return e._id !== resp.data._id;
      });
      return filterResp;
    });
  };

  const displayMsg = allData.map((v,i) => (
     
    <MessageCard
      key={i}
      id={v._id}
      msg={v.text}
      username={v.user.username}
      date={v.createdAt}
      onDelete={deleteMessage}
    />  
  ));
  return (
    <>
      <h1 align="center">Messages</h1>
      {displayMsg}
    </>
  );
};

export default User;
