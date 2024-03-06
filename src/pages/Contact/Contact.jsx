import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <h1>Contact</h1>
        <h2>Please fill out the form below with your request</h2>
        <form
          className="contact-form"
          action="https://formsubmit.co/samara.limads@gmail.com"
          method="POST"
        >
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
        </form>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/samara-lima-webdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin.png" alt="LinkedIn icon" className="link" />
          </a>
          <a
            href="https://github.com/samaralimads"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="github.png" alt="Github icon" className="link" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
