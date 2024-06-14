import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Mee from '../../Assets/Mee.png'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Professional <span className="purple"> OVERVIEW </span> of My Expertise
            </h1>
            <p className="home-about-body">
              My journey into the world of programming and data science has been driven by a profound passion for technology and innovation.
              <br />
              <br />I am proficient in languages such as
              <i>
                <b className="purple"> C++, Python, and Java, </b>
              </i>
              with extensive experience in their application.
              <br />
              <br />
              My primary interests lie in developing cutting-edge &nbsp;
              <i>
                <b className="purple">AI Solutions and Data-Driven Products </b> as well as exploring advancements in{" "}
                <b className="purple">
                  Machine Learning and Deep Learning.
                </b>
              </i>
              <br />
              <br />
              I am also passionate about applying my expertise to create innovative solutions using <b className="purple">TensorFlow, PyTorch</b> and
              <i>
                <b className="purple">
                  {" "}other AI frameworks and libraries.
                </b>
              </i>
              &nbsp; In addition, I leverage modern web technologies like
              <i>
                <b className="purple"> React.js and Node.js </b>
              </i>
              to develop robust applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Mee} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AbdelmajidBen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AbdelmajiidBen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdelmajid-benjelloun-538649218/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
