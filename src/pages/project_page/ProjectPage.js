import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";
import project5 from "../../images/project5.png";
import project6 from "../../images/project6.png";
export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Effortlessly manage your creator marketing
                                  campaigns with powerful tools, perfect for
                                  brands, PR, and media agencies.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  GPS Tracking Software for Resellers and
                                  Businesses
                                </h5>
                                <img src={project2} alt={project2} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href="https://www.gpsfan.ma/"
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
                                  GPS Tracking Software for Resellers and
                                  Businesses to provide your customers with a
                                  trusted solution? Do you want to benefit from
                                  an efficient system? GPSFAN offers you a wide
                                  range of top-quality services at excellent
                                  value for money.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                    href="https://www.agoodday.me/en/"
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
                                  Agoodday is on of the finest hotel website
                                  which provides you best hotel and many other
                                  useful information.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Sellik is a simplified and interactive social
                                  classified ads platform for mobile and web
                                  applications, where users can buy from, sell
                                  to and chat with others worldwide.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Online learning marketplace
                                </h5>
                                <img src={project5} alt={project5} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href="https://www.skillzcafe.com"
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
                                  Skillzcafe is an online learning marketplace
                                  providing online courses to millions of
                                  students. Our platform encourages instructors
                                  to share their varied knowledge by connecting
                                  them to students across the globe.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Products big companies produce
                                </h5>
                                <img src={project6} alt={project6} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href="https://www.publicgoods.com/"
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
                                  Many of the toughest problems we face are the
                                  result of the products big companies produce.
                                  That’s why we’re committed to making
                                  healthier, more sustainable choices easy and
                                  accessible to all.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
