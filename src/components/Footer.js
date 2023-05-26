import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid text-center p-1 sych-bg-c footer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.4278765363604!2d-122.89282284028536!3d49.14910168900201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d96d9688016b%3A0x7d04a11d1a5a7f62!2s11957%2080%20Ave%2C%20Delta%2C%20BC%20V4C%200E1!5e0!3m2!1sen!2sca!4v1685061493998!5m2!1sen!2sca"
        width="400"
        height="300"
        style= {{border: 0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="location"
      ></iframe>
      <p className="pt-5 pb-5">
        Copyright &copy; 2023 Synchronized Immigration Corp. - All Rights
        Reserved.
      </p>
    </div>
  );
}
