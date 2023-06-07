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
      <h4 className="synch-font">Rise Notary Group</h4>
      <div className="container d-flex justify-content-evenly">
        <h5 className="synch-font box">Hours Of Operation</h5>
        <h5 className="synch-font box">Location</h5>
        <h5 className="synch-font box">Email and Phone</h5>
      </div>
      <div className="container d-flex justify-content-evenly">
        <div className="text-center box">
          <p className="sm-text">
            <span>
              Mon 09:00 a.m. - 05:00 p.m. <br></br>
              Tues 09:00 a.m. - 05:00 p.m. <br></br>
              Wed 09:00 a.m. - 05:00 p.m. <br></br>
              Thu 09:00 a.m. - 05:00 p.m. <br></br>
              Fri 09:00 a.m. - 05:00 p.m. <br></br>
              Sat - Closed <br></br>
              Sun - Closed <br></br>
            </span>
          </p>
        </div>
        <div className="text-center box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.4278765363604!2d-122.89282284028536!3d49.14910168900201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d96d9688016b%3A0x7d04a11d1a5a7f62!2s11957%2080%20Ave%2C%20Delta%2C%20BC%20V4C%200E1!5e0!3m2!1sen!2sca!4v1685061493998!5m2!1sen!2sca"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="location"
          ></iframe>
        </div>
        <div className="text-center box">
          <p className="sm-text">
            <a
              className="sm-text hyper-link"
              href="mailto: synchronizedimmigration@gmail.com"
            >
              info@risenotarygroup.ca
            </a>{" "}
            <br></br>
            <span>
              8047-120th Street, <br></br>
              Unit# 100 Delta, B.C., <br></br>
              V4C 0E1 Phone: (604) 594-7505 <br></br>
              Fax: (604) 590-8244 <br></br>
            </span>
          </p>
        </div>
      </div>

      {/* FAQ's
      
      <div className="container">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
