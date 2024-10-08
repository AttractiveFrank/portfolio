import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      The Platform for Powering Brand Stories
                    </h5>
                    <img src={project1} alt={project1} />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://www.fabulate.com.au/ "
                        rel="noreferrer"
                        target="_blank"
                      >
                        See the DEMO
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Effortlessly manage your creator marketing campaigns with
                      powerful tools, perfect for brands, PR, and media
                      agencies.
                    </p>
                  </h6>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      GPS Tracking Software for Resellers and Businesses
                    </h5>
                    <img src={project2} alt={project2} />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://www.gpsfan.ma/ "
                        target="_blank"
                        rel="noreferrer"
                      >
                        See the DEMO
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      GPS Tracking Software for Resellers and Businesses to
                      provide your customers with a trusted solution? Do you
                      want to benefit from an efficient system? GPSFAN offers
                      you a wide range of top-quality services at excellent
                      value for money.
                    </p>
                  </h6>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Best Hotel WebSite
                    </h5>
                    <img src={project3} alt={project3} />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://www.agoodday.me/en/ "
                        target="_blank"
                        rel="noreferrer"
                      >
                        See the DEMO
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Agoodday is on of the finest hotel website which provides
                      you best hotel and many other useful information.
                    </p>
                  </h6>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Social classified ads platform
                    </h5>
                    <img src={project4} alt={project4} />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://www.sellik.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        See the DEMO
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Sellik is a simplified and interactive social classified
                      ads platform for mobile and web applications, where users
                      can buy from, sell to and chat with others worldwide.
                    </p>
                  </h6>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
