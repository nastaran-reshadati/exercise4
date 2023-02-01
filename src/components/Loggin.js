import { useState } from "react";
import users from "../Datas/data";
import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";

const Loggin = (props) => {
  console.log(props);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [showErr, setShowErr] = useState("");

  const onChangeHandler = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    console.log(userInfo);
  };

  const onSubmitedForm = (event) => {
    event.preventDefault();
    let finduser = users.filter((user) => {
      return user.username == userInfo.name && user.password == userInfo.pass;
    });
    console.log(finduser[0]);
    if (finduser[0]) {
      {
        <div> {navigate(`wellcome/${userInfo.pass}`)}</div>;
      }
      console.log("yessss");
      return props.func(true);
    } else {
      setShowErr("وارد شوید");
      props.func(false);
      setShowErr("شما نمیتوانید وارد شوید!");
      console.log("nooo");
    }
    console.log(props.func);
  };

  return (
    <div className={styles.listContainer}>
      <div className="form">
        <form onSubmit={onSubmitedForm}>
          <div className={styles.inputContainer}>
            <label>Username </label>
            <input
              placeholder="Enter user name"
              type="text"
              name="name"
              required
              onChange={onChangeHandler}
            />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input
              placeholder="Enter Password"
              type="password"
              name="pass"
              required
              onChange={onChangeHandler}
            />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
        <Link
          params={{ testvalue: "hello" }}
          to={"wellcome"}
          className={styles.errStyle}
        >
          {showErr}
        </Link>
      </div>
    </div>
  );
};

export default Loggin;
