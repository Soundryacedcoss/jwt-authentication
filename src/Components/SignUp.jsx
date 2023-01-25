import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const NameHandler = (e) => {
    setName(e.target.value);
  };
  const NumberHandler = (e) => {
    setNumber(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const selectHandler = (e) => {
    setRole(e.target.value);
  };
  const SignUpHandler = () => {
    console.log(msg);
    if (name === "") {
      setMsg("Enter your name please ..");
      document.getElementById("name").focus();
    } else if (number === "") {
      setMsg("Enter your number please ..");
      document.getElementById("number").focus();
    } else if (email === "") {
      setMsg("Enter your email please ..");
      document.getElementById("email").focus();
    } else if (password === "") {
      setMsg("Enter your Password please ..");
      document.getElementById("password").focus();
    } else if (role === "") {
      setMsg("Please choose your role..");
    } else {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        }),
      })
        .then((val) => val.json())
        .then((res) => {
          let obj = {
            name: name,
            token: res.token,
            email: email,
            password: password,
            number: number,
            role: role,
          };
          alert("Now please Login..");
          localStorage.setItem(email, JSON.stringify(obj));
          navigate("/Login");
        });
      setName("");
      setEmail("");
      setNumber("");
      setRole("");
      setPassword("");
      setMsg("Account created !");
    }
  };
  return (
    <div className="LoginPage">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="write your name.."
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={NameHandler}
          id="name"
          value={name}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="enter number...."
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={NumberHandler}
          id="number"
          value={number}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="enter email...."
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={emailHandler}
          value={email}
          id="email"
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
          id="password"
          value={password}
        />
      </div>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={selectHandler}
        value={role}
      >
        <option value="">Choose Your Role</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>
      <button className="btn btn-outline-success mt-3" onClick={SignUpHandler}>
        Sign Up
      </button>
      {msg === "" ? (
        " "
      ) : (
        <div
          class="alert alert-warning alert-dismissible fade show mt-3"
          role="alert"
        >
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
      <b>Already account ?</b> <a href="/Login">Login here</a>
    </div>
  );
};
