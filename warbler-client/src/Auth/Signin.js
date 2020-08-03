import React from "react";

const Signin = (props) => {
  return (
    <>
      <h1 align="center">Login Now</h1>

      <form onSubmit={props.handleAuthSubmit} className="container">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
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
        <button type="submit" className="btn btn-primary">
          Login Now
        </button>
      </form>
    </>
  );
};

export default Signin;
