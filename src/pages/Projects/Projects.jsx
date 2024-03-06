import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <h2>Take a look at my latest projects</h2>
      </div>
      <div className="projects-container">
        <div className="project-1">
          <div className="project-img">
            <a href="https://zenith-tracker.netlify.app" target="_blank">
              <img src="Zenith.png" alt="finance tracker" />
            </a>
          </div>
          <div className="project-text">
            <h3>Zenith</h3>
            <p>
              Zenith is an expense tracker that allows you to manage your
              finances by adding transactions as expenses or income to a
              selected category. I used <b>MUI</b> and <b>Charts.js</b> for the
              first time to add nice features. This is a full-stack web
              application built using the <b> MERN stack</b> (MongoDB, Express,
              React, Node.js).
            </p>
          </div>
          <div className="buttons-container">
            <a href="https://zenith-tracker.netlify.app" target="_blank">
              <button>Demo</button>
            </a>
            <a
              href="https://github.com/Samaralimads/expenses-tracker"
              target="_blank"
            >
              <button>Code</button>
            </a>
          </div>
        </div>
        <div className="project-2">
          <div className="project-img">
            <a href="https://shelf-indulgence.netlify.app" target="_blank">
              <img src="Shelf-indulgence.png" alt="library app" />
            </a>
          </div>
          <div className="project-text">
            <h3>Shelf-Indulgence</h3>
            <p>
              Shelf-Indulgence is a website to manage your reading list. It
              includes features such as a search bar and star ratings for books.
              It's a <b>Single Page Application (SPA)</b> built using React and
              integrated with an external API. It performs all <b>CRUD</b>{" "}
              (Create, Read, Update, Delete) operations.
            </p>
          </div>
          <div className="buttons-container">
            <a href="https://shelf-indulgence.netlify.app" target="_blank">
              <button>Demo</button>
            </a>
            <a
              href="https://github.com/Samaralimads/library-app"
              target="_blank"
            >
              <button>Code</button>
            </a>
          </div>
        </div>
        <div className="project-3">
          <div className="project-img">
            <a
              href="https://samaralimads.github.io/game-project"
              target="_blank"
            >
              <img src="Tic-tac-toe.png" alt="game" />
            </a>
          </div>
          <div className="project-text">
            <h3>Tic-Tac-Toe</h3>
            <p>
              This was my first project as a web development student. We were
              tasked with creating a front-end game using{" "}
              <b>JavaScript, CSS and HTML</b>. I chose Tic-Tac-Toe. It was a
              very enjoyable experience and a challenging one, especially as
              someone with no previous background in tech.
            </p>
          </div>
          <div className="buttons-container">
            <a
              href="https://samaralimads.github.io/game-project"
              target="_blank"
            >
              <button>Demo</button>
            </a>
            <a
              href="https://github.com/Samaralimads/game-project"
              target="_blank"
            >
              <button>Code</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
