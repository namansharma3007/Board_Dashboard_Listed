import React from "react";
import "./Login.css";
import GoogleAuth from "./GoogleAuth/GoogleAuth";

const Login = () => {
  return (
    <section className="login-container">
      <div className="board-side">
        <h1>Board</h1>
      </div>

      <aside className="login-cont-sect">
        <p className="login-heading">Board</p>
        <div className="login-section">
          <div className="sigin-text">
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
          </div>

          <GoogleAuth />

          <div className="login-form">
            <form action="">
              <label htmlFor="enter-email">Email address</label>
              <input
                type="email"
                name="email"
                id="enter-email"
                placeholder="Enter email"
              />
              <label htmlFor="enter-password">Password</label>
              <input
                type="password"
                name="password"
                id="enter-password"
                placeholder="Password"
              />

              <a href="#" className="forgot-password">
                Forgot Password?
              </a>

              <input type="submit" value="Sign In" className="sigin-button" />
            </form>
          </div>

          <div className="register-here">
            <p>Don’t have an account?</p>
            <a href="#">&nbsp;Register here</a>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Login;
