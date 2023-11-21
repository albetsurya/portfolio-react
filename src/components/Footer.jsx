import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon-tiktok.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <div className="brand-logo">
              <h3>ALBET</h3>
              <p className="text-white mt-1">PORTFOLIO</p>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon ">
              <a href="https://linkedin.com/in/albetsurya/">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://tiktok.com/albetsurya">
                <img src={navIcon4} alt="github" className="github" />
              </a>
              <a href="https://instagram.com/albetsurya">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
