import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 className="tracking-in-expand">
              I am
                <strong className="main-name"> Anirban Sharma</strong>
              </h1>
                
              <div style={{ padding: 10, textAlign: "center" }}>
                 <h3 className="tracking-in-expand-gist"> Full Stack Web Developer</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
