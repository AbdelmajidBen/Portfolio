import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdelmajid Benjelloun </span>
            from <span className="purple"> Tangier/ Morocco</span>
            <br />
            I am currently a student in Faculty of Science and technology Tangier Enroled in<span className="purple">  Master Artificielle Intelligence and Data Science.</span>
            <br />
            Anything you named it I can Code it 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Formule 1 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about Latest tech Available
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Leveraging data to unlock insights and drive innovation through advanced AI techniques!"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
