import React from "react";
import bharatanatyam from "../assets/images/bharatanatyam.jpg";
import yoga from "../assets/images/yoga.jpg";
import bhajan from "../assets/images/bhajan.jpg";
import "./Enrichment.css";

function Enrichment() {
  return (
    <div className="enrichment">
      <h2>Cultural Activities</h2>

      <div className="card-container">
        <div className="card">
          <img src={bharatanatyam} alt="Bharatanatyam" />
          <p>Bharatanatyam</p>
        </div>

        <div className="card">
          <img src={yoga} alt="Yoga" />
          <p>Yoga</p>
        </div>

        <div className="card">
          <img src={bhajan} alt="Bhajan" />
          <p>Bhajan</p>
        </div>
      </div>
    </div>
  );
}

export default Enrichment;