import React from "react";
import "./about.css";
import ME from "../assets/me-abouttt.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5 className="h5__white">Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Self learning </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clinets</h5>
              <small>02 Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>05+ Completed</small>
            </article>
          </div>
          <p className="about__desc">
          As a software engineer and front-end developer, I am driven by a passion for technology and a commitment to excellence. With a keen interest in learning new technologies and a strong work ethic, I am always looking for new challenges and opportunities to grow my skills. With my technical expertise, problem-solving skills, and attention to detail, I am confident that I can make a positive impact on any project or team I work with.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
