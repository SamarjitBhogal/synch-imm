import React from "react";

import "../styles/homePageStyles.css";

export default function HomePage() {
  return (
    <div className="d-flex align-items-center flex-column mb-3">
        {/* blurred background img:
        <img
          src={require("../images/home-img.jpg")}
          alt="main"
          className="home-img-blurred"
        ></img> */}
        <img
          src={require("../images/home-img.jpg")}
          alt="main"
          className="home-img"
        ></img>
        {/* This is a popup logo banner */}
        {/* <div className="sych-bg-c img-staple">
          <h1 className="header-font">LEGAL EXPERTISE YOU CAN RELY ON</h1>
          <button className="img-button" type="button" href="#">
            <span>Half off consultations!</span>
          </button>
        </div> */}

      <div className="container d-flex justify-content-center align-items-center flex-column mt-5">
        <h1 className="mb-5 header-font">About Us</h1>
        <h5 className="mb-2 local-text-font">LAW YOU CAN UNDERSTAND</h5>
        <p className="mb-5 local-text-font local-text-space">
          <span>
            We know that immigration can sometimes be overwhelming. We are
            dedicated to providing you help in language that you can understand.
            If you don't feel like you understand your options, just ask, and we
            will work to find an explanation that works for you.
          </span>
        </p>
        <h5 className="mb-2 local-text-font">A FOCUS ON RESULTS</h5>
        <p className="mb-5 local-text-font local-text-space">
          <span>
            The first step is for us to work with you and come up with a plan to
            get the results you need. Through our understanding of immigration
            law and your understanding of the circumstances, we will craft a
            path to success to help you and your loved ones come to Canada.
          </span>
        </p>
        <h5 className="mb-2 local-text-font">GET STARTED TODAY</h5>
        <p className="mb-5 local-text-font local-text-space">
          <span>
            Don't wait! Contact us for 50% off a phone consultation. Let us help
            you figure out what your best next steps are. The sooner you have a
            plan of action, the better your chances of taking the correct steps
            to immigrate to Canada effectively.
          </span>
        </p>
      </div>
    </div>
  );
}
