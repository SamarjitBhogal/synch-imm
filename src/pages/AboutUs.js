import React from "react";

import "../styles/aboutUsPageStyles.css";

export default function AboutUs() {
  return (
    <div className="mt-5">
      <h1 className="header-font">OUR PRACTICE</h1>
      <div className="d-flex justify-content-around mt-5">
        <h5 className="mb-2 local-text-font box">OUR APPROACH</h5>
        <h5 className="mb-2 local-text-font box">A TEAM IN YOUR CORNER</h5>
      </div>
      <div className="d-flex justify-content-around mt-2">
        <p className="local-text-font ab-local-text-space">
          <span>
            At Synchronized Immigration Corp, we specialize in bringing our
            immigration knowledge to your corner. We are dedicated to
            understanding your needs and wants and helping you understand what
            actions we can take on your behalf. We will work with you every step
            of the way to make sure that you understand the choices you are
            making and feel empowered to make them.
          </span>
        </p>
        <p className="local-text-font ab-local-text-space">
          <span>
            Coming from a family of immigrants, we at Synchorinzed Immigration
            Corp understand the importance of effective communication with our
            clients and the importance of the submission we make. Rest assured
            your file will be well taken care of with our RCIC.
          </span>
        </p>
      </div>
      <h1 className="header-font mt-5">OUR TEAM</h1>
      <div className="d-flex justify-content-around mt-5">
        <h5 className="mb-2 local-text-font box">PRIYA BHOGAL, RCIC</h5>
        <h5 className="mb-2 local-text-font box">
          CHARAN, LEGAL ASSISTANT/CASE MANAGER
        </h5>
      </div>
      <div className="d-flex justify-content-around mt-2">
        <p className="local-text-font ab-local-text-space">
          <span>
            A graduate of Ashton College, Priya is our RCIC and has a background
            in legal studies and a major in Criminology from Simon Fraser
            University. Priya is determined to aid immigrants to reunite with
            their families and make her clients' aspirations their reality by
            immigrating to Canada. She's who you want in your corner.
          </span>
        </p>
        <p className="local-text-font ab-local-text-space">
          <span>
            Immigration can be intimidating and anxiety-inducing. As our legal
            assistant and case manager, Charan will work directly with you to
            make sure you get the services you need.
          </span>
        </p>
      </div>
    </div>
  );
}