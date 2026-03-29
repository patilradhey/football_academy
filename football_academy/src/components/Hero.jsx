import React from "react";
import backgroundImage from "./Images/background.jpg";
import academy from "./Images/academy.jpg";
import logo from "./Images/logo.png";
import { Link, Links } from "react-router-dom";

function HomePage() {
  return (
    <div>

      {/* HERO SECTION */}

      <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>

        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>CHAMPACAD</span>
          </div>

          <div className="footer-links">
            <ul>
            <a href="./Hero">HOME</a>
            <a href="./Coaches">ABOUT</a>
            <a href="./Register">REGISTER</a>
            <a href="./Contact">CONTACT</a>
            </ul>
          </div>
        </nav>

        <div className="hero-text">
          <h1>
            TRAIN LIKE <br />
            A <span>CHAMP</span>
          </h1>

        </div>
        <div className="hero-cut"></div>


      </div>




      {/* ACADEMY SECTION */}

      <div className="academy">

        <img src={academy} alt="academy" />

        <div className="academy-text">
          <h2>FOUNDING OF THE FOOTBALL ACADEMY</h2>

          <p>
            The Football Academy was founded to nurture young football talent and provide professional training in a supportive environment. With experienced coaches and modern facilities, the academy helps players develop their skills, teamwork, and passion for the game.
          </p>

          <p>
            And Scrambled It To Make A Type Specimen Book. It Has
            Survived Not Only Five Centuries, But Also The Leap Into
            Electronic Typesetting, Remaining Essentially Unchanged.
          </p>

        </div>

      </div>

      {/* MOTIVATION SECTION */}

      <div className="motivation">

        <h2>
          NEVER LET THE <span>FEAR</span> OF LOSING KEEP YOU
          FROM <span>WINNING</span> THE GAME
        </h2>


        <Link to="/JoinTeam">
          <button>Register Now</button>
        </Link>
      </div>

    </div>
  );
}

export default HomePage;