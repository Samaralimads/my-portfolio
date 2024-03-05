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
            <a href="https://zenith-tracker.netlify.app/" target="_blank">
              <img src="./Zenith.png" alt="finance tracker" />
            </a>
          </div>
          <div className="project-text">
            <h3>Zenith</h3>
            <p>
              write description for Zenith <b>built using MERN stack</b>Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Ratione nulla
              adipisci eveniet unde eligendi optio veritatis atque! Minima, at
              ab! Velit, tempora eius officia dolores in quos cum itaque ipsa!
              Asperiores temporibus vel voluptatibus perferendis quis tempora,
              reprehenderit dolorum, eligendi
            </p>
          </div>
          <div className="buttons-container">
            <a href="https://zenith-tracker.netlify.app/" target="_blank">
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
            <a href="https://zenith-tracker.netlify.app/" target="_blank">
              <img src="./Shelf-indulgence.png" alt="library app" />
            </a>
          </div>
          <div className="project-text">
            <h3>Shelf-Indulgence</h3>
            <p>
              write description for Shelf-Indulgence <b>REST api</b>.
            </p>
          </div>
          <div className="buttons-container">
            <a href="https://zenith-tracker.netlify.app/" target="_blank">
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
        <div className="project-3">
          <div className="project-img">
            <a href="https://zenith-tracker.netlify.app/" target="_blank">
              <img src="Zenith.png" alt="finance tracker" />
            </a>
          </div>
          <div className="project-text">
            <h3>Zenith</h3>
            <p>
              write description for Zenith <b>built using MERN stack</b>.
            </p>
          </div>
          <div className="buttons-container">
            <a href="https://zenith-tracker.netlify.app/" target="_blank">
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
      </div>
    </section>
  );
}

export default Projects;
