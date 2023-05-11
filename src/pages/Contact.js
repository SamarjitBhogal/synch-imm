import React from "react";

import "../styles/contactStyles.css";

export default function Contact() {
  return (
    <div className="card container align-items-center mt-4 w-50">
      <h1 className="mt-4 mb-5 header-font">Contact Us</h1>
      <div className="form-floating mb-3 w-100">
        <input
          className="form-control text-box"
          placeholder="Leave a comment here"
          id="nameInput1"
        ></input>
        <label for="nameInput1">First Name</label>
      </div>
      <div className="form-floating mb-3 w-100">
        <input
          className="form-control text-box"
          placeholder="Leave a comment here"
          id="nameInput2"
        ></input>
        <label for="nameInput2">Last Name</label>
      </div>
      <div className="form-floating mb-3 w-100">
        <input
          type="email"
          className="form-control text-box"
          id="emailInput"
          placeholder="name@example.com"
        ></input>
        <label for="emailInput">Email address</label>
      </div>
      <div className="form-floating mb-4 w-100">
        <textarea
          className="form-control text-box comments"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
        ></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>
      <button className="w-25 mb-4 submit-btn sych-bg-c" type="submit">
        SEND MESSAGE
      </button>
    </div>
  );
}