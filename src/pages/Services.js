import React from "react";

export default function Services() {
  return (
    <div className="">
      <div className="d-flex justify-content-evenly">
        <div class="card text-center mb-3" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">REAL ESTATE</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#realEstate"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Link with href
            </a>
          </div>
        </div>
        <div class="card text-center mb-3" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">WILLS & POWER OF ATTORNEY'S</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#wills"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Link with href
            </a>
          </div>
        </div>
        <div class="card text-center mb-3" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">NOTARIZATIONS</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#notarizations"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Link with href
            </a>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div class="collapse" id="realEstate">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
        <div class="collapse" id="wills">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
        <div class="collapse" id="notarizations">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
    </div>
  );
}
