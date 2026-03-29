import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">

      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2>
            READY FOR YOUR <span>FIRST TRAINING?</span>
          </h2>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">REGISTER</a>
          <a href="#">CONTACT</a>
        </div>

        {/* Right Section */}
        <div className="footer-social">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>

      </div>

      <p className="copyright">© 2023 CHAMPACAD LTD</p>

    </div>
  );
}

export default Footer;