import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { SiGithub } from "react-icons/si";
import { MdOutlineLiveTv } from "react-icons/md";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Title>{props.title} </Card.Title>
          <div>
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              style={{ paddingBottom: "10px" }}
            >
            <MdOutlineLiveTv />
            </Button>
            {!props.isComp && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "17px", paddingBottom: "10px" }}
              >
                <SiGithub />
              </Button>
            )}
          </div>
        </div>
        <h4 style={{fontSize:"15px",marginLeft:"-12rem"}}>{props.isBlog}</h4>
        <br />
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
