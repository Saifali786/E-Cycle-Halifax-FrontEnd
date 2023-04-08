import React from "react";
import "./Resource.css";
import Navbar from "./Navbar";

export default function Resource1() {
  return (
    <>
      <Navbar />
      <h1>What Can I Recycle?</h1>

      <div className="container">
        <div className="option" id="boxTitle">
          <h2>What to Recycle</h2>
        </div>

        <div className="option" id="boxContent">
          <h2 className="sectionTitle">Acceptable Types of E-waste</h2>
          <p>
            Almost all types of common electronics can be at least partially recycled, since they’re
            made largely of metal. Cell phones, computers, tablets, printers, scanners, televisions,
            cameras, audio and video equipment, power tools, lamps and appliances such as
            microwaves, toasters and ovens are all generally recyclable.
          </p>

          <h2 className="sectionTitle">Non-Acceptable Types of E-waste</h2>
          <p>
            Only a few specific types of electronics really can’t be recycled safely. Anything that
            might contain mercury or lead requires special handling as hazardous waste. LCD
            televisions and monitors and old TVs (pre-1991, per the EPA) may contain mercury, while
            old cathode ray tube televisions contain lead.
          </p>
        </div>
      </div>
    </>
  );
}
