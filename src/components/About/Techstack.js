import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiCss3,
  DiMongodb,
  DiNodejsSmall,
} from "react-icons/di";
import {
  SiTypescript,
  SiExpress,
  SiHtml5,
  SiNpm,
  SiGithub,
  SiRedux,
  SiChakraui,
  SiBootstrap,
  SiTailwindcss ,
  SiSap , 
  SiRazorpay 
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaSass,FaGitAlt } from "react-icons/fa";

const techStackData = [
  { icon: <SiHtml5 />, name: "HTML 5" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiCss3 />, name: "CSS 3" },
  { icon: <DiReact />, name: "React JS" },
  { icon: <DiMongodb />, name: "Mongo DB" },
  { icon: <DiNodejsSmall />, name: "Node JS" },
  { icon: <SiExpress />, name: "Express JS" },
  { icon: <SiGithub />, name: "Github" },
  { icon: <SiNpm />, name: "NPM" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiChakraui />, name: "Chakra UI" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <TbBrandNextjs />, name: "Next JS" },
  { icon: <AiTwotoneThunderbolt />, name: "Thunder Client" },
  { icon: <SiSap />, name: "SAP" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaSass  />, name: "SASS" },
  { icon: <FaGitAlt  />, name: "Git" },
  { icon: <SiRazorpay  />, name: "Razorpay" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackData.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tech.icon}
          <h6>{tech.name}</h6>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
