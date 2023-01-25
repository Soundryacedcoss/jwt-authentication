import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // state for input box
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  //   taking value from user
  const NameHandler = (e) => {
    setemail(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  //   login button function
  const ClickHandler = () => {
    // validation
    if (email === "") {
      setMsg("Please write your name");
    } else if (password === "") {
      setMsg("Please write password");
    } else {
      var userData = JSON.parse(localStorage.getItem(email));
      console.log(userData.email !== email);
      // checking role here
      if (
        userData.email === email &&
        userData.password === password &&
        userData.role === "Admin"
      ) {
        alert("User authenticated !");
        navigate("/Dashboard");
      } else if (
        userData.email === email &&
        userData.password === password &&
        userData.role === "User"
      ) {
        alert("Users can not access dashboard");
      }
    }
  };
  return (
    <div className="LoginPage">
      <div className="input-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Write email..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={NameHandler}
          value={email}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={PasswordHandler}
          value={password}
        />
      </div>
      <button
        type="button"
        onClick={ClickHandler}
        className="btn btn-outline-success"
      >
        Login
      </button>
      {msg === "" ? (
        " "
      ) : (
        <div class="alert alert-info alert-dismissible fade show" role="alert">
          <strong>{msg}</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <br />
      <br />
      <b>Create Account</b> <a href="/">Sign Up</a>
    </div>
  );
};
