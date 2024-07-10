import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import CarboTrack from "../../Assets/Projects/tictactoe.png";
import Sched from "../../Assets/Projects/divine-beauty.png";
import weatherapp from "../../Assets/Projects/weatherApp.png";
import arya from "../../Assets/Projects/arya-ai.png";
import ideaink from "../../Assets/Projects/ideaInk.png";
import jarvis from "../../Assets/Projects/jarvis-github1.png";
import buyit from "../../Assets/Projects/buyit-git-1.png";

const projects = [
  {
    imgPath:
      "https://github.com/anirbansharma1996/darshan/raw/main/public/darshan.png",
    isBlog:"Video Conferencing" ,
    title: "Darshan",
    description:
      "A Professional enterprise-ready video conferencing app , where you can Start an Instant Meeting , Join Meeting via invitation link,Schedule Meeting,View Meeting Recordings",
    techStack: [
      "Typescript:",
      "Next.js@14",
      "Tailwind CSS",
      "Stream-io",
      "Shadcn-ui",
      "Lucide-react",
      "Clerk-auth",
    ],
    ghLink: "https://darshan-iota.vercel.app",
    demoLink: "https://github.com/anirbansharma1996/darshan",
  },
  {
    imgPath: "https://github.com/anirbansharma1996/Tomato/raw/main/home.png",
    isBlog: "Food Delivery",
    title: "Tomato.",
    description:
      "Tomato is a dynamic and user-friendly clone of Zomato, designed to provide a seamless experience for food enthusiasts. This project showcases my skills in building modern web applications using the MERN stack.",
    techStack: [
      "JavaScript",
      "React.JS",
      "CSS",
      "Node.JS",
      "Express.JS",
      "MongoDB",
      "JWT",
      "REST Api",
    ],
    ghLink: "https://tomato-gray-five.vercel.app",
    demoLink: "https://github.com/anirbansharma1996/Tomato",
  },
  {
    imgPath: jarvis,
    isBlog: "Artificial Intelligence",
    title: "Jarvis",
    description:
      "Jarvis is an AI-driven application designed to provide a seamless and efficient user experience for various tasks. Build using Gemini 1.5",
    techStack: [
      "React.Js",
      "Chakra UI",
      "JavaScript",
      "MongoDB",
      "Gemini 1.5",
      "Node.Js",
      "Express.Js",
      "OAuth2",
    ],
    ghLink: "https://jarvis-swart.vercel.app",
    demoLink: "https://github.com/anirbansharma1996/Jarvis",
  },
  {
    imgPath: arya,
    isBlog: "Artificial Intelligence",
    title: "Arya AI",
    description:
      "Arya AI can create images based on certain criteria, generate code snippets for different programming languages, and can generate witty conversation.",
    techStack: [
      "Next.Js",
      "Schadcn UI",
      "TypeScript",
      "ES6",
      "MongoDB",
      "OpenAI",
      "GPT 3.5",
      "OAuth",
    ],
    ghLink: "https://arya-next-gen-ai.vercel.app",
    demoLink: "https://github.com/anirbansharma1996/Arya-AI",
  },
  {
    imgPath: Sched,
    isBlog: "E-Commerce",
    title: "Divine Beauty",
    description:
      "DivineBeauty is a E-Commerce website. Discover the latest beauty trends, browse a wide range of skincare and cosmetic products, and connect with a community of beauty enthusiasts.",
    techStack: [
      "React.JS",
      "Node.JS",
      "Express.JS",
      "MongoDB",
      "Render",
      "Bootstrap 5",
    ],
    ghLink: "https://divine-beauty.vercel.app",
    demoLink: "https://github.com/anirbansharma1996/Divine-Beauty",
  },
  {
    imgPath:
      "https://github.com/anirbansharma1996/Urban-Nest/raw/main/home.png",
    isBlog: "E-Commerce",
    title: "Urban Nest",
    description:
      "Urban Nest is an e-commerce website offering a wide range of products for men, women, and kids. It provides a seamless shopping experience with secure payment processing, allowing users to easily purchase items for the whole family.",
    techStack: [
      "React.JS",
      "Node.JS",
      "Express.JS",
      "MongoDB",
      "REST Api",
      "JWT",
    ],
    ghLink: "https://urban-nest-vert.vercel.app",
    demoLink: "https://github.com/anirbansharma1996/Urban-Nest",
  },
  {
    imgPath: buyit,
    isBlog: "E-Commerce",
    title: "BuyIT",
    description:
      "BuyIT is a web application inspired by Blinkit, designed to provide a seamless online shopping experience for users to order and receive items delivered to their doorstep.",
    techStack: ["ES6", "TypeScript", "OAuth2", "React.Js","JSON"],
    ghLink: "https://buy-it-blue.vercel.app/",
    demoLink: "https://github.com/anirbansharma1996/BuyIt",
  },
  {
    imgPath: ideaink,
    isBlog: "Blog Post",
    title: "IdeaInk",
    description:
      "Say hello to 'ideaInk' – your microblogging destination like no other!",
    techStack: [
      "Next.JS",
      "Tailwind CSS",
      "JavaScript",
      "ES6",
      "MongoDB",
      "Google Oauth",
    ],
    ghLink: "https://ideaink-blog.vercel.app",
    demoLink: "https://github.com/anirbansharma1996/ideaink",
  },
  {
    imgPath: weatherapp,
    isBlog: "General",
    title: "Weather App",
    description:
      "Weather apps are the simplest method to know about the updates of the upcoming weather.",
    techStack: ["React Js", "CSS 3", "JavaScript", "ES6", "Weather API"],
    ghLink: "https://weatherapp-ten-eta.vercel.app/",
    demoLink: "https://github.com/anirbansharma1996/weatherapp",
  },
  // {
  //   imgPath: CarboTrack,
  //   isBlog: false,
  //   title: "Tic-Tac-Toe",
  //   description:
  //     "Tic-tac-toe is a paper-and-pencil game for two players. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
  //   techStack: ["HTML 5", "CSS 3", "JavaScript", "ES6"],
  //   ghLink: "https://tic-tack-toe-lilac.vercel.app/",
  //   demoLink:
  //     "https://github.com/masai-course/anirban_fw20_0875/tree/master/unit-1/sprint-1/day-1/TicTackToe",
  // },
];

function Projects() {


  return (
    <>
      <Container fluid className="project-section swipper">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="teal">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few things I've worked on recently.
          </p>
          <Row
            classname="swiper-wrapper"
            style={{ justifyContent: "center", paddingBottom: "10px" }}
          >
            {projects.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={
                    <span>
                      <b>📋[ Description ]</b> : {project.description}
                      <br />
                      <br />
                      <p>
                        <b>⚙️[ Tech Stack ]</b> : &nbsp;
                        {project.techStack.join(" | ")}
                      </p>{" "}
                    </span>
                  }
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
