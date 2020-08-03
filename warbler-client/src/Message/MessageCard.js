import React from "react";
import { NavLink } from "react-router-dom";

const MessageCard = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <li
            style={{ display: "flex" }}
            className="list-group-item col-md-8 m-auto"
          >
            <img
              src="https://warbler-client-jbh.herokuapp.com/static/media/warbler-logo.25398cf7.png"
              alt="sdfasfsd"
              height="100"
              width="100"
              className="timeline-image"
            />
            <div className="message-area">
              <NavLink to="/user">@{props.username} &nbsp;</NavLink>
              <span className="text-muted">
                <time dateTime={props.date} className="text-muted">
                  {props.date}
                </time>
              </span>
              <p>{props.msg}</p>
              {props.onDelete !== 'false'?(
                <span className="btn btn-danger" onClick={() => props.onDelete(props.id)}>Delete</span>
              ):null}
              
            </div>
          </li>
        </div>
      </div>
    </>
  );
};

export default MessageCard;
