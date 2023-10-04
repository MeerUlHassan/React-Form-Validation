import React, { useState } from "react";
import { useRef } from 'react';
import Validation from "./Validation";
import emailjs from '@emailjs/browser';
import "./form.css";

const Form = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ehmqfq', 'template_81ah7w3', form.current, 'a0mUGABVxc1FbCEaT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const newObject = { ...inputValues, [e.target.name]: e.target.value };
    setInputValues(newObject);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(Validation(inputValues));
  };
  return (
    <>
      <p className="json-formet"> {JSON.stringify(inputValues, undefined, 3)}</p>
      <form ref={form} className="container" onSubmit={sendEmail} onSubmit={handleSubmit}>
        <label>Sign UP Form</label>
        <div className="form--content">
          <h4>Enter Full Name Here</h4>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name Here"
            onChange={handleInput}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div className="form--content">
          <h4>Enter Email Here</h4>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Here"
            onChange={handleInput}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div className="form--content">
          <h4>Enter Passwrod Here</h4>
          <input
            type="password"
            name="password"
            placeholder="Password must be 6 digits long (contains 1 Cap Letter 1 number 1 small Letter)"
            onChange={handleInput}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <div className="form--content">
        <h4>Type your Messege</h4>
          <textarea
            name="message"
            rows="7"
            placeholder="Type your message here!"
            onChange={handleInput}
          ></textarea>
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Form
        </button>
      </form>
    </>
  );
};

export default Form;
