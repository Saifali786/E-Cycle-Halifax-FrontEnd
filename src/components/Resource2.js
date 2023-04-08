import React from "react";
import "./Resource.css";
import Navbar from "./Navbar";

export default function Resource2() {
  return (
    <>
      <Navbar />
      <h1>How Can I Make Better Purchase Decisions?</h1>

      <div className="container">
        <div className="option" id="boxTitle" style={{ backgroundColor: "#3c91e6" }}>
          <h2>Purchase via our Partnerships</h2>
        </div>

        <div className="option" id="boxContent">
          <p>
            Our partnerships with innovative companies provide our users with exclusive discounts
            and resources to make better purchase decisions. Click on the icons below to browse the
            E-Cycle store for your next electronic purchase.
          </p>

          <div className="productList">
            <div className="product">
              <h2 className="sectionTitle">Smart Home</h2>
              <span className="productPlaceholder"></span>
              <span className="productPlaceholder"></span>
              <span className="productPlaceholder"></span>
            </div>

            <div className="product">
              <h2 className="sectionTitle">Appliances</h2>
              <span className="productPlaceholder"></span>
              <span className="productPlaceholder"></span>
              <span className="productPlaceholder"></span>
            </div>

            <div className="product">
              <h2>Multimedia</h2>
              <span className="productPlaceholder"></span>
              <span className="productPlaceholder"></span>
              <span className="productPlaceholder"></span>
            </div>

            <div className="product">
              <h2 className="sectionTitle">Entertainment</h2>
              <span className="productPlaceholder"></span>
              <span className="productPlaceholder"></span>
              <span className="productPlaceholder"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
