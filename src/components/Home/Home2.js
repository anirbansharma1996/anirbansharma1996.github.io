import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/editted.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Button from "react-bootstrap/Button";


function Home2() {
  return (
    <>
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who Am <span className="teal"> I? </span>
            </h1>
            <h5
              data-scroll
              className="text-lg text-gray-200"
              id="story"
              style={{ textAlign: "justify" }}
            >
              <br />I am an analytical and detail-oriented{" "}
              <i>
                <b>Full Stack Web Developer</b>
              </i>{" "}
              , skilled in creating production-ready code. My expertise includes :
              <ul>
                <li>
                  <b>Frontend:</b>
                  <ul>
                    <li>
                      <i>React JS</i>
                    </li>
                    <li>
                      <i>Next JS</i>
                    </li>
                    <li>
                      <i>Redux</i>
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Backend:</b>
                  <ul>
                    <li>
                      <i>Node JS</i>
                    </li>
                    <li>
                      <i>Express JS</i>
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Database:</b>
                  <ul>
                    <li>
                      <i>MongoDB</i>
                    </li>
                  </ul>
                </li>
              </ul>
              I build applications by integrating these technologies seamlessly.
              <br />
              <br />
            </h5>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                style={{ height: "225px", borderRadius: "10px" }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Button
          href="https://drive.google.com/file/d/1-Mpps-UZRP1m55Bwea50NJDvajiZy8c5/view?usp=sharing"
          target="_blank"
          className="fork-btn-inner1"
        >
          <h5>🗏 Resume</h5>
        </Button>
      </Container>
      <About />
      <Projects />
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect with me</h1>
            <h6> ✆ +91 9083527139</h6>
            <p>
              I'm available on these <span className="teal">platforms </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anirbansharma1996"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anirban-sharma1996/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:anirbansharma36@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    
      </Container>
    </Container>
    </>
  );
}
export default Home2;








