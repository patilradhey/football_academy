import React from "react";
import team from "./images/football.png";

function JoinTeam() {
  return (
    <section className="join-team">
      <div className="join-container">

        {/* Form Section */}
        <div className="form-card">
          <h2>Join Our Team</h2>
          <p className="subtitle">Be part of something amazing 🚀</p>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Position Applying For" />
            <textarea placeholder="Tell us about yourself"></textarea>

            <button type="submit">Apply Now</button>
          </form>
        </div>

        {/* Image Section
        <div className="image-section">
          <img src={team} alt="Join Team"/>
        </div> */}

      </div>
    </section>
  );
}

export default JoinTeam;