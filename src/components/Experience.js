import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rg from "../Assets/RG Logo.jpeg";

const experienceData = [
  {
    company: "RG Technologies",
    role: "Full Stack Web Developer",
    period: "03 March, 2023 - Present",
    logo: rg,
    link: "https://rg-tech.in",
    responsibilities: [
      "Developed over 10+ Front-end UIs, integrated APIs, Full Stack Web Applications, and SAP Dashboards, resulting in a 30% increase in user engagement.",
      "Wrote well-designed and efficient code by utilizing best software development practices, achieving a 25% reduction in bugs and errors.",
      "Played a pivotal role in the successful completion of 5+ MERN projects, demonstrating the ability to manage and prioritize multiple tasks, leading to a 20% improvement in project delivery time.",
      "Consistently delivered high-quality solutions by blending technical proficiency with a strong work ethic, meeting 100% of project deadlines and exceeding client expectations by 15%.",
    ],
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="experience-heading">
          My <strong className="teal">Experience</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {experienceData.map((experience, index) => (
            <Col md={8} key={index} className="experience-card">
              <div style={{ display: "flex", gap: "15px" }}>
                <div>
                  <a href={experience.link}>
                    {" "}
                    <img
                      style={{
                        height: "60px",
                        width: "60px",
                        borderRadius: "100%",
                      }}
                      src={experience.logo}
                      alt={experience.company}
                    />
                  </a>
                </div>
                <div>
                  <h3>{experience.company}</h3>
                  <h5>{experience.role}</h5>
                  <p>
                    <strong>{experience.period}</strong>
                  </p>
                  <ul>
                    {experience.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;


