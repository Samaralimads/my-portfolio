import React from "react";
import "./Home.css";
import Resume from "../../assets/Samara Lima - resume.pdf";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="presentation-container">
        <div className="img-container">
          <img src="Profile.png" alt="" />
        </div>
        <div className="content-container">
          <h1 className="title">
            Hello,
            <br />
            I'm Samara.
          </h1>
          <p className="job-title">Full-Stack Web Developer</p>
          <p className="introduction">
            Fueled by curiosity and a passion for learning.
          </p>
        </div>
      </div>

      <div className="tech-container">
        <p className="tech-title">Technologies I am using :</p>
        <div className="tech-icons">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React JS</p>
          <p>Node JS</p>
          <p>MongoDB</p>
          <p>Express</p>
        </div>
        <a href={Resume} download="Samara-lima.pdf">
          <button>Download My Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Home;
