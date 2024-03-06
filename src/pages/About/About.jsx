import "./About.css";
import React from "react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-title">
        <h1>About</h1>
        <h2>Get to know me a bit better</h2>
      </div>
      <div className="about-description">
        <p>
          Hey there! 👋🏽 As someone who's worn many hats, from full-time nanny to
          trade marketing assistant, I've always been drawn to diverse
          experiences and new challenges. Recently, I've taken the leap into the
          world of web development, and I couldn't be more excited!
        </p>

        <p>
          With a background in business and childcare, I bring a unique mix of
          skills to the table. Think problem-solving, adaptability, and a knack
          for connecting with people. Now, I'm diving headfirst into frontend
          and backend development, with eagerness and curiosity to really
          immerse myself in this new passion.
        </p>

        <p>
          When I'm not busy coding, you'll often find me with my Kindle in hand,
          on a mat practicing Ashtanga yoga, or in the search for a new favorite
          restaurant.
        </p>
        <p>
          If you're up for a chat about tech, or just want to swap stories, hit
          me up! If you're interested in discussing potential collaborations or
          job opportunities, don't hesitate to reach out! Let's chat about how I
          can bring my skills and enthusiasm to your team.
        </p>
      </div>
    </section>
  );
}

export default About;
