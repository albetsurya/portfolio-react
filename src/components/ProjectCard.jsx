import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={6} className="proj-bx">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="imgUrl" className="img-fuild" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
