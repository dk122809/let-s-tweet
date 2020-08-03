import React, { useState } from "react";
import * as Api from "../ApiHandle";

function NewMessage(props) {
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setMsg(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let apiLink = `/users/${props.userAuth.userId}/messages/`;
    let apiData = {
      text: msg,
    };
    Api.apiHandle(apiLink, apiData, "post", props.userAuth.userToken);
    props.setSuccessRespMsg(`New Message has been successfuly added`);
    setMsg('');
  };
  return (
    <>  
        <h1 align="center">New Message</h1>
        <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="message">Add A Message</label>
          <input
            type="text"
            name="msg"
            placeholder="enter your message"
            value={msg}
            onChange={handleChange}
            className="form-control"
            id="message"
          />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Message
          </button>
        </form>
    </>
  );
}

export default NewMessage;
