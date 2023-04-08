import React from "react";
import "./Resource.css";
import Navbar from "./Navbar";

export default function Resource3() {
  return (
    <>
      <Navbar />
      <h1>How to use E-Cycle Halifax?</h1>

      <div className="container">
        <div className="option" id="boxTitle" style={{ backgroundColor: "#87a743" }}>
          <h2>E-Cycle Halifax Guide</h2>
        </div>

        <div className="option" id="boxContent">
          <p>
            E-Cycle Halifax provides a one-stop solution to your e-waste needs!
            <br />
            There are two options provided for your convenience.
          </p>

          <h2 className="sectionTitle">Self-Service Drop Off</h2>
          <p>
            Click on the “Nearest Bin” link to get started with our interactive map. Each bin is
            notated with its location and bin capacity. Navigate and drop-off your e-waste with no
            cost on your end!
          </p>

          <h2 className="sectionTitle">On-Demand Pick Up</h2>
          <p>
            We offer an on-demand pick-up service for any of your e-waste products. Simply navigate
            to the “Request PickUp” page and fill in your details to get started!
          </p>
        </div>
      </div>
    </>
  );
}
