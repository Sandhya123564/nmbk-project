import React from "react";

function Classes() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>
        NMBK Classes & Schedule
      </h1>

      {/* Yoga */}
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          margin: "20px",
          borderRadius: "10px"
        }}
      >
        <h2>🧘 Yoga Classes</h2>

        <p>
          Traditional Hatha Yoga focused on flexibility,
          strength, breath awareness and mental well-being.
        </p>

        <h3>Schedule</h3>

        <p>Monday: 18:00 - 19:00 (Online)</p>
        <p>Wednesday: 18:00 - 19:00 (Online)</p>
        <p>Saturday: 09:00 - 10:00 (In Person)</p>

        <p>
          <b>Suitable For:</b> Beginners, Intermediate, Adults
        </p>

        <button>Join Yoga Classes</button>
      </div>

      {/* Bharatanatyam */}
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          margin: "20px",
          borderRadius: "10px"
        }}
      >
        <h2>💃 Bharatanatyam Classes</h2>

        <p>
          Structured training in adavus, rhythm,
          abhinaya and traditional repertoire.
        </p>

        <h3>Schedule</h3>

        <p>Tuesday: 17:00 - 18:00 (Beginners)</p>
        <p>Thursday: 17:00 - 18:00 (Intermediate)</p>
        <p>Saturday: 10:30 - 12:00 (Mixed Group)</p>

        <p>
          <b>Suitable For:</b> Children, Teens, Adults
        </p>

        <button>Enroll in Bharatanatyam</button>
      </div>

      {/* Bhajan */}
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          margin: "20px",
          borderRadius: "10px"
        }}
      >
        <h2>🎵 Bhajan & Music Classes</h2>

        <p>
          Learn devotional songs, bhajans,
          rhythm patterns and performance techniques.
        </p>

        <h3>Schedule</h3>

        <p>Friday: 18:00 - 19:00 (Online)</p>
        <p>Sunday: 10:00 - 11:00 (Hybrid)</p>

        <p>
          <b>Suitable For:</b> Children, Adults, Families
        </p>

        <button>Join Music Classes</button>
      </div>

      {/* Weekly Schedule */}
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        📅 Weekly Class Schedule
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px"
        }}
        border="1"
      >
        <thead>
          <tr>
            <th>Day</th>
            <th>Class</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Monday</td>
            <td>Yoga</td>
            <td>6:00 PM - 7:00 PM</td>
          </tr>

          <tr>
            <td>Tuesday</td>
            <td>Bharatanatyam</td>
            <td>5:00 PM - 6:00 PM</td>
          </tr>

          <tr>
            <td>Friday</td>
            <td>Bhajans</td>
            <td>6:00 PM - 7:00 PM</td>
          </tr>
        </tbody>
      </table>

      {/* Registration */}
      <div style={{ margin: "20px", padding: "20px" }}>
        <h2>Registration</h2>

        <input type="text" placeholder="Name" />
        <br />
        <br />

        <input type="email" placeholder="Email" />
        <br />
        <br />

        <input type="text" placeholder="Phone" />
        <br />
        <br />

        <select>
          <option>Yoga</option>
          <option>Bharatanatyam</option>
          <option>Bhajans</option>
        </select>

        <br />
        <br />

        <textarea placeholder="Message"></textarea>

        <br />
        <br />

        <button>Request Information</button>
      </div>

      {/* WhatsApp */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          style={{
            padding: "12px 25px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          📱 Contact on WhatsApp
        </button>
      </div>

      {/* Trial Class */}
      <div
        style={{
          background: "#f5f5f5",
          padding: "30px",
          marginTop: "40px",
          textAlign: "center"
        }}
      >
        <h2>🎓 Free Trial Class</h2>

        <p>
          New students can attend one free trial class before enrolling.
        </p>

        <button>Book Trial Class</button>
      </div>
    </div>
  );
}

export default Classes;