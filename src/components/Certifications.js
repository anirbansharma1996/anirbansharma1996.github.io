import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button } from "react-bootstrap";

const certifications = [
  {
    title: "Frontend Developer (React) Certificate",
    issuer: "HackerRank",
    issuedDate: "Apr 2024",
    credentialLink: "https://www.hackerrank.com/certificates/frontend-react",
    skills: "React.js",
    description: "In April 2024, I earned the Frontend Developer (React) Certificate from HackerRank, showcasing my proficiency in React.js. This certification underscores my ability to develop dynamic and responsive web applications using React."
  },
  {
    title: "Generative AI at SAP",
    issuer: "SAP",
    issuedDate: "Jan 2024",
    credentialId: "openSAP",
    credentialLink: "https://open.sap.com/courses/generative-ai",
    skills: "Generative AI",
    description: "In January 2024, I completed the Generative AI at SAP certification from SAP. This credential, identified as openSAP, highlights my skills in generative AI, an area that is rapidly evolving and becoming increasingly important in the tech industry."
  },
  {
    title: "Oracle SQL",
    issuer: "Great Learning",
    issuedDate: "May 2023",
    skills: "Oracle SQL Developer",
    description: "In May 2023, I received the Oracle SQL certification from Great Learning. This certification confirms my capabilities as an Oracle SQL Developer, emphasizing my skills in managing and manipulating databases effectively."
  },
  {
    title: "CSS",
    issuer: "HackerRank",
    issuedDate: "Feb 2023",
    credentialId: "47E59B6E9D97",
    credentialLink: "https://www.hackerrank.com/certificates/css",
    description: "In February 2023, I achieved the CSS certification from HackerRank, with credential ID 47E59B6E9D97. This certification validates my expertise in styling web pages with CSS, ensuring visually appealing and user-friendly designs."
  },
  {
    title: "JavaScript (Intermediate) Certificate",
    issuer: "HackerRank",
    issuedDate: "Feb 2023",
    credentialId: "408F3F2E991D",
    credentialLink: "https://www.hackerrank.com/certificates/javascript-intermediate",
    description: "Additionally, in February 2023, I obtained the JavaScript (Intermediate) Certificate from HackerRank, with credential ID 408F3F2E991D. This certification demonstrates my advanced knowledge and application of JavaScript in building interactive web applications."
  },
  {
    title: "Problem Solving (Basic) Certificate",
    issuer: "HackerRank",
    issuedDate: "Feb 2023",
    credentialId: "8A720C8A09D7",
    credentialLink: "https://www.hackerrank.com/certificates/problem-solving-basic",
    description: "In the same month, I also earned the Problem Solving (Basic) Certificate from HackerRank, with credential ID 8A720C8A09D7. This certification reflects my foundational problem-solving skills, which are crucial for tackling complex programming challenges."
  },
  {
    title: "JavaScript (Basic) Certificate",
    issuer: "HackerRank",
    issuedDate: "Nov 2022",
    credentialId: "4CA420A668D2",
    credentialLink: "https://www.hackerrank.com/certificates/javascript-basic",
    description: "Lastly, in November 2022, I acquired the JavaScript (Basic) Certificate from HackerRank, with credential ID 4CA420A668D2. This certification highlights my basic understanding and application of JavaScript, setting a strong foundation for further development in this essential programming language."
  }
];

function Certifications() {
  return (
    <div className="certifications container mt-5">
      <h3 className="mb-4">Licenses & Certifications</h3>
      <Accordion>
        {certifications.map((cert, index) => (
          <Card key={index}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={String(index)}>
                {cert.title} - {cert.issuer} ({cert.issuedDate})
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={String(index)}>
              <Card.Body>
                <p>{cert.description}</p>
                {cert.credentialLink && (
                  <p>
                    <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
                      Show credential
                    </a>
                  </p>
                )}
                {cert.skills && <p><strong>Skills:</strong> {cert.skills}</p>}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      <p className="mt-4">
        These certifications collectively illustrate my comprehensive skill set and commitment to staying updated with the latest technologies in full-stack development.
      </p>
    </div>
  );
}

export default Certifications;
