import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Sobirjon Mo'minov. </b>
                <br />
                <br />
                Highly skilled Senior{" "}
                <b className="purple">Full-stack Developer</b> with over 6 years
                of experience in designing and developing responsive and
                user-centric web applications.
                <br />
                <br />
                Proficient in leveraging modern front-end technologies such as
                <b className="purple"> React.js, NextJS and Vue.js</b> to
                create seamless and interactive user experiences.
                <br />
                <br />
                Demonstrated ability to manage projects and deliver high quality
                code. <br />
                <br />
                Passionate about optimizing web performance, enhancing user
                experience, and staying updated with the latest industry trends
                and technologies.
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
