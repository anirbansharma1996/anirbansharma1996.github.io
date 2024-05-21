import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="teal">Code</strong>
      </h1>
      <GitHubCalendar
        username="anirbansharma1996"
        blockSize={15}
        blockMargin={5}
        color="#40AABF"
        fontSize={16}
      />
      <br />
      <br />
      <br />
      <br />
      <p align="center">
        <a href="https://github.com/anirbansharma1996/github-readme-streak-stats">
          <img
          margin-top={'10px'}
           width={'70%'}
            title="🔥 Get streak stats for your profile at git.io/streak-stats"
            alt="JhaKailash streak"
            src="https://github-readme-streak-stats.herokuapp.com/?user=anirbansharma1996&hide_border=true&theme=react&hide_border=true&bg_color=0D1117"
          />
        </a>
      </p>
    </Row>
  );
}

export default Github;
