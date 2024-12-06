import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import myImg from "../../Assets/avatar.svg"
import Tilt from "react-parallax-tilt"
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered my passion for programming and have honed my skills
              through dedication and hands-on experience. 🚀
              <br />
              <br />I am fluent in classics like 
              <i>
                <b className="purple">JavaScript, React, and Node.js </b>
              </i>
              <br />
              <br />
              My fields of interest include building innovative
              <i>
                <b className="purple">Web Technologies and Products </b> as well as exploring areas related to <b className="purple">Market Research Solutions and User-Centric Design.</b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my passion into developing robust, responsive products using <b class="purple">React.js</b>, <i><b class="purple">Next.js</b></i>, and frameworks like <b class="purple">Material UI</b> and <b class="purple">Tailwind CSS</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/Avanish-Tiwari"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/avanishtiwari1205/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
