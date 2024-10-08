import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";

export default function Home() {
  return (
    <>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={8} className="home-header">
                <h1
                  style={{ paddingBottom: 15, fontSize: "175px" }}
                  className="heading"
                >
                  Hi There!{" "}<h4>123</h4>
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Sobirjon Mo'minov.</strong>
                </h1>

                <div className="typing-homeclass">
                  <Typing />
                </div>
                <div className="sociallink-home">
                  <ul className="homeaboutsociallinks">
                    <li className="socialicons">
                      <a
                        href="https://github.com/Sobirjon913/"
                        target="_blank"
                        rel="noreferrer"
                        className="iconcolour  homesocialicons"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="socialicons">
                      <a
                        href="https://www.linkedin.com/in/sobirjon-mo-minov-971073331/"
                        target="_blank"
                        rel="noreferrer"
                        className="iconcolour  homesocialicons"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li className="socialicons">
                      <a
                        href="https://telegram.org" // Replace with your Telegram link
                        target="_blank"
                        rel="noreferrer"
                        className="iconcolour homesocialicons"
                      >
                        <FaTelegramPlane />
                      </a>
                    </li>
                    <li className="socialicons">
                      <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noreferrer"
                        className="iconcolour homesocialicons"
                      >
                        <FaDiscord />
                      </a>
                    </li>
                    <li className="socialicons">
                      <a
                        href="mailto:alimominov661@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="iconcolour homesocialicons"
                      >
                        <FaGoogle />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} style={{ paddingBottom: 20 }}>
                <div className="img-home-main">
                  <Tilt>
                    <Fade cascade>
                      <img
                        src="./avatar.png"
                        alt="home pic"
                        className="img-fluid"
                      />
                    </Fade>
                  </Tilt>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <AboutmeContainer />
        <Projects />
        <Contactus />
      </section>
    </>
  );
}
