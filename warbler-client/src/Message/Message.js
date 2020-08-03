import React, { useEffect, useState } from "react";
import * as Api from "../ApiHandle";
import MessageCard from "./MessageCard";

const Message = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const messages = async () => {
      let apiLink = "/messages";
      let resp = await Api.apiHandle(apiLink, "", "get");
      setAllData(() => {
        return resp.data;
      });
    };
    messages();
  }, []);
  const displayMsg = allData.map((v) => (
    <MessageCard
      key={v._id}
      msg={v.text}
      username={v.user.username}
      date={v.createdAt}
      onDelete='false'
    />
  ));
  return (
    <>
      <h1 align="center">Messages</h1>

      {displayMsg}
    </>
  );
};

export default Message;
