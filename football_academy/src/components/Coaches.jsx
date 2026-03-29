import React from "react";
import coach1 from "../assets/coach1.jpg";
import coach2 from "../assets/coach2.jpg";
import coach3 from "../assets/coach3.jpg";

function Coaches() {
  return (
    <div className="coaches">

      <div className="coach">
        <img src={coach1} alt="coach1" />
        <div>
          <h3>JAN PANTUCEK</h3>
          <span>HEAD COACH</span>
          <p>Jan Pantucek is the head coach of the academy with years of experience in professional football training. He focuses on improving players’ skills, discipline, and teamwork..</p>
        </div>
      </div>

      <div className="coach">
        <img src={coach2} alt="coach2" />
        <div>
          <h3>BRANDON HULK</h3>
          <span>ASSISTANT COACH</span>
          <p>Brandon Hulk trains the under-15 team and focuses on developing young talents with strong fundamentals and game awareness.</p>
        </div>
      </div>

      <div className="coach">
        <img src={coach3} alt="coach3" />
        <div>
          <h3>OLIVER WAHN</h3>
          <span>U15 COACH</span>
          <p>Oliver Wahn assists the head coach in training sessions and helps players develop their technical and tactical football abilities.</p>
        </div>
      </div>

    </div>
  );
}

export default Coaches;