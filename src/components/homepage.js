import React from "react";
import { useHistory } from "react-router";
import classes from "./homepage.module.css";

const HomePage = () => {
  const history = useHistory();
  const userData = history.location.state;
  return (
    <div className={classes.box}>
      <div className={classes.logo}>logo</div>
      <p className={classes.title}>
        Welcome back, {userData.name.split(" ")[0]}
      </p>
      <div className={classes.innerBox}>
        <p style={{ marginBottom: "50px" }}>
          As per our records, your details are as under
        </p>
        <p>Name : {userData.name}</p>
        <p>Email : {userData.email}</p>
        <p>Username: {userData.username}</p>
      </div>
    </div>
  );
};

export default HomePage;
