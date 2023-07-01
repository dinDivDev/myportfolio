import React from "react";
import azure from "../icons/azure.png";
import css from "../icons/css.png";
import figma from "../icons/figma.png";
import html from "../icons/html.png";
import java from "../icons/java.png";
import jira from "../icons/jira.png";
import postman from "../icons/postman.png";
import js from "../icons/js.png";
import react from "../icons/react.png";
import selenium from "../icons/selenium.png";
import sql from "../icons/sql.png";
import appium from "../icons/appium-logo.png";
import projectDayCare from "../../images/dayCarePhotoTwo.png";
import quiz from "../../images/quizPhoto.png";
import alif from "../../images/alifPhoto.png";
import ContactMe from "../contactMe/ContactMe";
import { Link } from "react-scroll";

import "./portfolio.style.css";

const Portfolio = () => {
  return (
    <div className="body-box">
      <body id="body">
        <div className="body__main-content">
          <h1 class="body__my-name">
            Hey, I'm <span style={{ color: "#3a0ca3" }}> Aidina</span> Bekturova
            !
          </h1>
          <div class="body__my--info">
            <p class="text-dev">
              A Front-End Developer/SDET building and automating the Frontend of
              Websites.
            </p>
          </div>
          <div class="project_btn--container">
            <Link to="project">
              <button className="body__project--btn">Projects</button>
            </Link>
          </div>

          <div class="body__socials">
            <div class="body__social">
              <a
                href="https://www.linkedin.com/in/aidina-bek/"
                class="home-hero__social-icon-link"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
                  alt="Ram Maheshwari Linkedin Profile"
                  class="home-hero__social-icon"
                />
              </a>
            </div>

            <div class="home-hero__social">
              <a
                href="https://github.com/dinDivDev"
                class="home-hero__social-icon-link"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
                  alt="RammCodes Github Profile"
                  class="home-hero__social-icon"
                />
              </a>
            </div>
          </div>

          <div class="about-me__main-container">
            <div className="about-me__container">
              <div>
                <h2 class="about-me__text">About Me / My skills</h2>
                <p class="about-me__sub-text">
                  Here you will find more information about me, what I do, and
                  my current skills mostly in terms of programming and
                  technology
                </p>
              </div>

              <div className="about__content-details-container">
                <h2 className="get_to_me_know">Get to know me!</h2>
                <p class="about__content-details">
                  I'm a <strong>Frontend Web Developer</strong> building the
                  Front-end of Websites and Web Applications.
                </p>
                <br></br>
                <p class="about__content-details">
                  Also I am skilled in <strong>HTML</strong>,
                  <strong>CSS </strong>
                  and <strong> JavaScript</strong> web development, as well as
                  the
                  <strong> React </strong> framework I specialize in front-end
                  development. I am always looking to learn and grow as a
                  developer, and I am excited to work on new and challenging
                  projects.
                </p>
                <br></br>
                <p class="about__content-details">
                  I'm open to <strong>Job</strong> opportunities where I can
                  contribute, learn and grow. If you have a good opportunity
                  that matches my skills and experience then don't hesitate to
                  <strong> contact</strong> me.
                </p>
              </div>
            </div>

            <div className="skills_container">
              <div>
                <img src={js} alt="js"></img>
                <h3>JavaScript</h3>
              </div>

              <div>
                <img src={css} alt="css"></img>
                <h3>CSS</h3>
              </div>
              <div>
                <img src={html} alt="html"></img>
                <h3>HTML</h3>
              </div>
              <div>
                <img src={react} alt="react"></img>
                <h3>React</h3>
              </div>
              <div>
                <img src={java} alt="java"></img>
                <h3>Java</h3>
              </div>
              <div>
                <img src={azure} alt="azure"></img>
                <h3>AzureDeVops</h3>
              </div>
              <div>
                <img src={figma} alt="figma"></img>
                <h3>Figma</h3>
              </div>
              <div>
                <img src={jira} alt="jira"></img>
                <h3>Jira</h3>
              </div>
              <div>
                <img src={postman} alt="postman"></img>
                <h3>Postman</h3>
              </div>
              <div>
                <img src={sql} alt="sql"></img>
                <h3>SQL MS</h3>
              </div>
              <div>
                <img src={selenium} alt="selenium"></img>
                <h3>Selenium</h3>
              </div>
              <div>
                <img src={appium} width="96px" height="96px" alt="appium"></img>
                <h3>Appium</h3>
              </div>
            </div>

            <div class="project_btn--container">
              <Link to="contact_me">
                <button className="body__project--btn btn contact_me_btn">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>

          <div>
            <div id="project">
              <h2 class="project__text">PROJECTS</h2>
              <p class="project__sub-text">
                Here you will find some of the personal and clients projects
                that I created with each project containing its own case study
              </p>
            </div>

            <div className="project-content-container">
              <div className="project-content">
                <img src={projectDayCare} alt="daycare"></img>
                <p>
                  <h2 className="project_name">Helen Lucy Child Care Center</h2>
                  "Helen Lucy Child Care Center" is a website where people can
                  enroll their kids into daycare. Website is dynamic ,responsive
                  and written for mobile and web users.
                  <br></br>
                  <br></br>
                  <div class="project_btn--container">
                    <button className="body__project--btn btn ">
                      <a
                        className="view-live-demo"
                        href=" https://helenlucydaycare.netlify.app/"
                        target="blank"
                      >
                        View live demo
                      </a>
                    </button>
                  </div>
                </p>
              </div>
              <div className="project-content">
                <img src={quiz} alt="quiz-app"></img>
                <p>
                  <h2 className="project_name">Quiz App</h2>
                  Quizz App has been designed for all people who wants to
                  challenge their self with technicall questions. App is consist
                  of multiple fields. JavaScript, CSS, React, HTML. Website is
                  dynamic ,responsive and written for mobile and web users.
                  <br></br>
                  <br></br>
                  <div class="project_btn--container">
                    <button className="body__project--btn btn">
                      <a
                        className="view-live-demo"
                        href="https://first-batch.netlify.com/"
                        target="blank"
                      >
                        View live demo
                      </a>
                    </button>
                  </div>
                </p>
              </div>
              <div className="project-content">
                <img src={alif} alt="cafe-alif"></img>
                <p>
                  <h2 className="project_name">Café Alif</h2>
                  Cafe Alif is a website for ordering a food. Users can view all
                  up to date dishes and order them via phone, 3rd party services
                  or via credit cards Website is dynamic ,responsive and written
                  for mobile and web users.
                  <br></br>
                  <br></br>
                  <div class="project_btn--container">
                    <button className="body__project--btn btn">
                      On the design stage
                    </button>
                  </div>
                </p>
              </div>
            </div>

            <ContactMe></ContactMe>
            <Link to="body">
              <div className="back-to-top">
                <button className="back-to-top__button">TOP ↑</button>
              </div>
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Portfolio;
