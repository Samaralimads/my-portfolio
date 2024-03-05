import React from "react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <h1 className="contact-page-title">Contact</h1>
        <span className="contact-desc">
          Please fill out the form below with your request.
        </span>
        <form className="contact-form">
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
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
            href="https://linkedin.com/in/monika-grajez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/linkedin-icon-nbqXHx2p-png"
              alt="LinkedIn icon"
              className="link"
            />
          </a>
          <a
            href="https://github.com/mgrajez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/github-icon-Lg-Ffk2r.png"
              alt="Github icon"
              className="link"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
