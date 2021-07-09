import React, { useState } from "react";
import "./Contact.scss";
import DataStore from "aws-amplify";
import { Todo } from "../../../models/index";
import Loader from "../../components/loader/Loader";
import { message } from "antd";

const success = () => {
  message.success("This is a success message");
};

const Contact = () => {
  const [inputData, setInputData] = useState({ name: "", email: "", msg: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ err: false, errMsg: "" });
  const onClickHandler = async () => {
    const stateObj = JSON.parse(JSON.stringify(inputData));
    if (Object.values(stateObj).filter((each) => each).length === 3) {
      function validateEmail(email) {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      const isValidEmail = validateEmail(stateObj.email);
      if (isValidEmail) {
        setIsLoading(true);
        const res = await DataStore.DataStore.save(
          new Todo({
            Name: stateObj.name,
            Email: stateObj.email,
            Message: stateObj.msg,
          })
        );
        setIsLoading(false);
        if (res) {
          setIsError({ err: false, errMsg: "" });
          message.success("Saved Successfully!");
          setInputData({ name: "", email: "", msg: "" })
        } else {
          message.error(
            "Something broke! Couldn't be saved! Please try again."
          );
          setIsError({
            err: true,
            errMsg: "Something broke! Couldn't be saved! Please try again.",
          });
        }
      } else {
        message.warning("Email is not in valid format!");
        setIsError({ err: true, errMsg: "Email is not in valid format!" });
      }
    } else {
      message.warning("Each field is mandatory!");
      setIsError({ err: true, errMsg: "Each field is mandatory!" });
    }
  };
  const onChangeHandler = (key, val) => {
    const stateObj = JSON.parse(JSON.stringify(inputData));
    stateObj[key] = val;
    setInputData(stateObj);
  };
  return (
    <div className="contact">
      <h1>GET IN TOUCH</h1>
      <div>
        <input
          placeholder="Name"
          className="input-set-1 common-input-cls"
          type="text"
          value={inputData["name"]}
          onChange={(evt) => {
            onChangeHandler("name", evt.target.value);
          }}
        ></input>
        <input
          placeholder="Email"
          className="input-set-1 common-input-cls"
          type="email"
          value={inputData["email"]}
          onChange={(evt) => {
            onChangeHandler("email", evt.target.value);
          }}
        ></input>
      </div>
      <textarea
        placeholder="How can I help you?"
        className="input-set-2 common-input-cls"
        value={inputData["msg"]}
        onChange={(evt) => {
          onChangeHandler("msg", evt.target.value);
        }}
      ></textarea>
      <input
        type="submit"
        value="SEND MESSAGE"
        className="submit-btn"
        onClick={() => onClickHandler()}
      ></input>
      {/* {isError.err && <div>{isError.errMsg}</div>} */}
      {isLoading && <Loader />}
    </div>
  );
};

export default Contact;
