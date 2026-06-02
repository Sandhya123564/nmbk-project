import React from "react";
import bharatanatyam from "../assets/images/bharatanatyam.jpg";
import yoga from "../assets/images/yoga.jpg";
import bhajan from "../assets/images/bhajan.jpg";

function Cultural() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cultural Activities</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h3>Bharatanatyam</h3>
          <img src={bharatanatyam} alt="Bharatanatyam" width="250" />
        </div>

        <div>
          <h3>Yoga</h3>
          <img src={yoga} alt="Yoga" width="250" />
        </div>

        <div>
          <h3>Bhajan</h3>
          <img src={bhajan} alt="Bhajan" width="250" />
        </div>
      </div>
    </div>
  );
}

export default Cultural;