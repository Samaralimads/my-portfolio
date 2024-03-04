import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="img-container">
        <img src="./Profile.png" alt="" />
      </div>

      <div className="content-container">
        <h1 className="title">
          Hello,
          <br />
          I'm Samara.
        </h1>
        <p className="job-title">Full-Stack Web Developer</p>
        <p className="introduction">Insert here a quick intro about myself.</p>
        <button>Download my resume</button>
      </div>
    </section>
  );
}

export default Home;
