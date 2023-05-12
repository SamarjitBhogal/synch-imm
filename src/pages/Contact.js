import React from "react";

import "../styles/contactStyles.css";

export default function Contact() {
  return (
    <div className="w-75 card container align-items-center mt-4">
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
      <button className="mb-4 submit-btn sych-bg-c" type="submit">
        SEND MESSAGE
      </button>
      <h4 className="synch-font">SYNCHRONIZED IMMIGRATION CORP.</h4>
      <div className="container d-flex justify-content-evenly mt-3 mb-3">
        <div className="text-center">
          <h5 className="synch-font">Hours Of Operation</h5>
          <p className="sm-text">
            <span>Mon 09:00 a.m.- 05:00 p.m.</span>
          </p>
          <p className="sm-text">
            <span>Tues 09:00 a.m.- 05:00 p.m.</span>
          </p>
          <p className="sm-text">
            <span>Wed 09:00 a.m.- 05:00 p.m.</span>
          </p>
          <p className="sm-text">
            <span>Thu 09:00 a.m.- 05:00 p.m.</span>
          </p>
          <p className="sm-text">
            <span>Fri 09:00 a.m.- 05:00 p.m.</span>
          </p>
          <p className="sm-text">
            <span>Closed</span>
          </p>
          <p className="sm-text">
            <span>Closed</span>
          </p>
        </div>
        <div className="text-center">
          <h5 className="synch-font">Email and Phone</h5>
          <p className="sm-text">
            <span>synchronizedimmigration@gmail.com</span>
          </p>
          <p className="sm-text">
            <span>(604)-999-9999</span>
          </p>
        </div>
      </div>
    </div>
  );
}
