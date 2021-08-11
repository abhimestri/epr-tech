import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import classes from "./loginUserForm.module.css";
const UserLoginForm = () => {
  const clientData = useSelector((state) => state.login);
  const [errorMessage, setErrorMessage] = useState("");
  const clientConfig = useSelector((state) => state.login.configuration);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (usernameRef.current.value === "") {
      setErrorMessage("username can't be empty");
    } else if (passwordRef.current.value === "") {
      setErrorMessage("please enter password!");
    } else {
      const user = clientData.users.filter(
        (el) =>
          el.username === usernameRef.current.value &&
          el.password === passwordRef.current.value
      )[0];
      if (user !== undefined) {
        history.push({ pathname: "/app/home", state: user, search: "" });
      } else {
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        setErrorMessage("Invalid Credentials!");
      }
    }
  };
  return clientConfig.username === undefined ? (
    clientData.error === null ? (
      <p>Loading...</p>
    ) : (
      <p>{clientData.error}</p>
    )
  ) : (
    <div className={classes.box}>
      <div className={classes.logo}>
        {clientConfig.logo === "" ? "G logo" : clientConfig.logo}
      </div>
      <form className={classes.form}>
        <p className={classes.title}>
          {clientConfig.title === "" ? "Login" : clientConfig.title}
        </p>
        <label className={classes.formlabel} for="username">
          {clientConfig.username === "" ? "Username" : clientConfig.username} :
        </label>
        <input
          className={
            errorMessage === "username can't be empty"
              ? classes.formInputIncorrect
              : classes.formInput
          }
          ref={usernameRef}
          type="text"
          name="username"
        />
        <br />
        <label className={classes.formlabel} for="password">
          {clientConfig.password === "" ? "Password" : clientConfig.password} :
        </label>
        <input
          className={
            errorMessage === "please enter password!"
              ? classes.formInputIncorrect
              : classes.formInput
          }
          ref={passwordRef}
          type="text"
          name="password"
        />
        {errorMessage !== "" && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button onClick={(e) => handleFormSubmit(e)}>
          {clientConfig.buttonName === "" ? "Sign in" : clientConfig.buttonName}
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
