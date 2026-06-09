import React from "react";

function Classes() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>NMBK Classes & Schedule</h1>

      {/* Yoga */}
      <div style={{ background: "#f5f5f5", padding: "20px", margin: "20px", borderRadius: "10px" }}>
        <h2>🧘 Yoga Classes</h2>
        <p>
          Traditional Hatha Yoga focused on flexibility,
          strength, breath awareness and mental well-being.
        </p>

        <h3>Schedule</h3>
        <p>Monday: 18:00 - 19:00 (Online)</p>
        <p>Wednesday: 18:00 - 19:00 (Online)</p>
        <p>Saturday: 09:00 - 10:00 (In Person)</p>

        <p><b>Suitable For:</b> Beginners, Intermediate, Adults</p>

        <button>Join Yoga Classes</button>
      </div>

      {/* Bharatanatyam */}
      <div style={{ background: "#f5f5f5", padding: "20px", margin: "20px", borderRadius: "10px" }}>
        <h2>💃 Bharatanatyam Classes</h2>

        <p>
          Structured training in adavus, rhythm,
          abhinaya and traditional repertoire.
        </p>

        <h3>Schedule</h3>
        <p>Tuesday: 17:00 - 18:00 (Beginners)</p>
        <p>Thursday: 17:00 - 18:00 (Intermediate)</p>
        <p>Saturday: 10:30 - 12:00 (Mixed Group)</p>

        <p><b>Suitable For:</b> Children, Teens, Adults</p>

        <button>Enroll in Bharatanatyam</button>
      </div>

      {/* Bhajans */}
      <div style={{ background: "#f5f5f5", padding: "20px", margin: "20px", borderRadius: "10px" }}>
        <h2>🎵 Bhajan & Music Classes</h2>

        <p>
          Learn devotional songs, bhajans,
          rhythm patterns and performance techniques.
        </p>

        <h3>Schedule</h3>
        <p>Friday: 18:00 - 19:00 (Online)</p>
        <p>Sunday: 10:00 - 11:00 (Hybrid)</p>

        <p><b>Suitable For:</b> Children, Adults, Families</p>

        <button>Join Music Classes</button>
      </div>
      <div style={{ margin: "20px", padding: "20px" }}>
  <h2>Registration</h2>

  <input type="text" placeholder="Name" /><br /><br />
  <input type="email" placeholder="Email" /><br /><br />
  <input type="text" placeholder="Phone" /><br /><br />

  <select>
    <option>Yoga</option>
    <option>Bharatanatyam</option>
    <option>Bhajans</option>
  </select>

  <br /><br />

  <textarea placeholder="Message"></textarea>

  <br /><br />

  <button>Request Information</button>
</div>
    </div>
  );
}

export default Classes;