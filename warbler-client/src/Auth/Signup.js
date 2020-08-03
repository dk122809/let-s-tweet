import React from "react";

const Signup = (props) => {
  return (
    <>
      <h1 align="center">Signup Now</h1>

      <form onSubmit={props.handleAuthSubmit} className="container">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={props.email}
            onChange={props.handleChange}
            placeholder="Enter your email id"
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={props.password}
            onChange={props.handleChange}
            placeholder="Enter your password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="test"
            name="username"
            value={props.username}
            onChange={props.handleChange}
            placeholder="Enter your username"
            className="form-control"
            id="username"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup Now
        </button>
      </form>
    </>
  );
};

export default Signup;
