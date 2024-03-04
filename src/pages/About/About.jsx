import "./About.css";
import React from "react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-title">
        <h1>About</h1>
        <h2>Get to know me a bit better.</h2>
      </div>
      <div className="about-description">
        <p>
          After spending several years in the <b>field of marketing</b>, my
          desire to design and build websites eventually took over. In 2023, I
          took the opportunity to undergo a career transition and immerse myself
          in the exciting world of web development. I love this new challenge!
        </p>

        <p>
          I specialise in frontend development, and my go-to framework is React
          JS. As a web developer, I enjoy using my attention to detail, my
          passion for UX/UI design and my irresistible love for making things.
          Being organised and methodical is my secret sauce for getting things
          done.
        </p>

        <p>
          When I am not coding, you will often find me with my kindle in hand,
          ..., or practising ashtanga yoga.
        </p>
      </div>
    </section>
  );
}

export default About;
