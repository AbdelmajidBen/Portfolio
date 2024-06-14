import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chat from '../../Assets/Projects/Untitled_Project-removebg-preview.png'
import pfm from '../../Assets/Projects/Untitled_Project__1_-removebg-preview.png'
import twit from '../../Assets/Projects/Untitled_Project__2_-removebg-preview.png'
import perc from '../../Assets/Projects/Untitled_Project__3_-removebg-preview.png'
import coca from '../../Assets/Projects/Untitled_Project__4_-removebg-preview.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="FSTT Chatbot"
              description="Developing a chatbot fine-tuned on a custom context based on French language models: case of study FSTT. using llama3, Docker, LORA, Rag, FineTunning, Svelte."
              ghLink="https://github.com/AbdelmajidBen/FSTT-LLM-Chat-Bot"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twit}
              isBlog={false}
              title="Twitter Sentiment Analysis"
              description="Develloping a web application that allows users to analyze the sentiment of tweets in real-time. The application uses the Twitter Data to fetch tweets and then uses a machine learning model to predict the sentiment of the tweets. The application is built using django, Kafka, and Docker."
              ghLink="https://github.com/AbdelmajidBen/Twitter_Sentim_Analysis"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coca}
              isBlog={false}
              title="Cocal Cola WebApp"
              description="Developing a web application that allows the users and admins to facilitate the management of the company's products and orders. The application is built using MERNG stack (MongoDB, Express, React, Node, GraphQL) and Docker. with JWT authentication. Cloudinary for image storage."
              ghLink="https://github.com/AbdelmajidBen/Cocal_Cola_WebApp"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pfm}
              isBlog={false}
              title="ML APP"
              description="Developing a laptop application that allows users to upload datasets of their own or creating it while choosing the model they want to use for the prediction. The application is built using Python, Tkinter, and Scikit-learn."
              ghLink="https://github.com/AbdelmajidBen/PFM_PA_Python"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={perc}
              isBlog={false}
              title="Multi Layer Perceptron"
              description="Developing the concept of the Multi layer perceptron in python with a custom dataset with visualization"
              ghLink="https://github.com/AbdelmajidBen/Multi_layer_perceptron"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
