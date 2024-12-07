import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"
import foodie from "../../Assets/Projects/foodie.png"
import focusontoday from "../../Assets/Projects/focusontoday.png"
import countrylistapi from '../../Assets/Projects/countrylistapi.png'
import trackexpense from '../../Assets/Projects/trackexpense.png'



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
              imgPath={countrylistapi}
              isBlog={false}
              title="Country List API"
              description="Developed a dynamic web application using React.js that
allows users to explore and retrieve information about countries worldwide. The
app features search functionality, displays detailed country information
(population, area, capital, etc.), and is designed to be responsive for optimal use on
various devices. Deployed on Netlify, the project integrates with a RESTful API for
real-time data retrieval"
              ghLink="https://github.com/Avanish-Tiwari/ContryList"
              demoLink="https://countrieslist-api.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={focusontoday}
              isBlog={false}
              title="Focus On Today"
              description="Discover the Focus on Today Project, a simple yet
effective web application built using HTML, CSS, and JavaScript. This project is
designed to help users prioritise their daily tasks and stay organised. With an
intuitive interface, users can easily add, edit, and remove tasks, making it a great
tool for enhancing productivity"
              ghLink="https://github.com/Avanish-Tiwari/Focus-on-Today"
              demoLink="https://focusontodayproj.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trackexpense}
              isBlog={false}
              title="Track Expenses"
              description="Track Expense App is a web-based application designed to help users manage their personal finances by tracking expenses and setting budgets. The app provides an intuitive interface that simplifies the process of logging daily expenditures and analyzing spending habits."
              ghLink="https://github.com/Avanish-Tiwari/Track-Expense"
              demoLink="https://trackexpenseapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Foodie Hamburger Project"
              description="Explore the Foodie Hamburger Project, a visually
engaging web application created using only HTML, CSS, and JavaScript. This
project showcases a variety of delicious hamburger recipes and provides an
interactive user experience. Users can easily navigate through the content, making
it perfect for food enthusiasts and aspiring chefs alike"
              ghLink="https://github.com/Avanish-Tiwari/Foodie-Hamburger-Project"
              demoLink="https://foodiehamburgerproject.netlify.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
