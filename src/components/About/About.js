import React from "react";
import { SiGithub } from "react-icons/si";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Experience from "../Experience";
import Certifications from "../Certifications";

function About() {
  return (
    <>
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "0px" }}
            className="about-img"
          >
          </Col>
        </Row>
        {/* <Certifications/> */}
        <Experience/>
        <h1 className="project-heading">
          Tools I <strong className="teal">Know </strong>
        </h1>
        <Techstack />
        <Github />
      </Container>
    </Container>
    <h6 style={{color:"white"}}>MY GITHUB PROFILE</h6>
     <Button
     href="https://github.com/anirbansharma1996"
     target="_blank"
     className="fork-btn-inner"
     style={{width:"20%"}}
   >
     <SiGithub/>
   </Button>
   </>
  );
}

export default About;
