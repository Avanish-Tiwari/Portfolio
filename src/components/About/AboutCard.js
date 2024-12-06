import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <div className="text-justify leading-relaxed font-sans">
  <p>Hello Everyone! 👋</p>
  <p>
    I am <span className="text-blue-500 font-bold">[Your Name]</span>, a passionate{" "}
    <span className="text-blue-500 font-bold">React Developer</span> from{" "}
    <strong>[Your Location]</strong>.
  </p>
  <p>
    Currently, I specialize in building modern, responsive, and user-friendly web
    applications using <strong>React.js</strong>, <strong>JavaScript</strong>, and a
    suite of front-end tools like <strong>Material UI</strong> and <strong>Tailwind CSS</strong>.
  </p>
  <p>
    With over 3.5 years of experience, I enjoy crafting seamless user interfaces
    and solving complex front-end challenges.
  </p>
  <p>
    Beyond coding, I love exploring new technologies, contributing to open-source
    projects, and sharing my knowledge with the community.
  </p>
</div>


          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
