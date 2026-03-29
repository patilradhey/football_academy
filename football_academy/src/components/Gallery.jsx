import React from "react";

import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";


const Gallery = () => {
  return (
   <div className="gallery-section">
     <div className="gallery-title-wrapper">
       <div className="red-bar"></div>
       <h2>Gallery</h2>
     </div>

     <div className="gallery-viewport">
       <img src={img2} className="side-img" alt="left" />
       
       {/* Main overlapping image */}
       <img src={img1} className="center-img" alt="center" />
       
       <img src={img3} className="side-img" alt="right" />
     </div>

     {/* <div className="nav-arrows">
       <button className="arrow-btn">
        <span className="arrow-left"></span>
       </button>
       <button className="arrow-btn">
         <span className="arrow-right"></span>
       </button>
     </div> */}

     <div className="text-grid">
  <div>
    <p>
      **Empowering the next generation** of athletes through disciplined training 
      and teamwork. Our youth programs focus on technical skill development 
      while fostering a competitive yet supportive environment.
    </p>
    <p>
      From foundational drills to advanced tactical awareness, every session is 
      designed to build confidence on and off the field.
    </p>
  </div>
  <div>
    <p>
      **Expert coaching staff** dedicated to identifying and nurturing individual 
      talent. We believe that great players are built through consistency, 
      proper mentorship, and a passion for the game.
    </p>
    <p>
      Join our community today and witness the transformation as our players 
      leap into professional-grade performance and sportsmanship.
    </p>
  </div>
</div>
   </div>
  );
};

export default Gallery;