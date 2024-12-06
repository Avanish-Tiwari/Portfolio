import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiPostman,
  SiEclipseche,
  SiMicrosoftoutlook,
  SiVisualstudio,
  SiGoogleanalytics,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseche />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoutlook />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics />
      </Col>
    </Row>
  );
}

export default Toolstack;
