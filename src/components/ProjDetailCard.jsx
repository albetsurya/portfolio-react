import { Col, Row } from "react-bootstrap";

export const ProjDetailCard = ({ title, description, imgUrl }) => {
  return (
    <div className="projdet-bx">
      <div className="projdet-imgbx">
        <img src={imgUrl} alt="imgUrl" className="img-fuild" />
      </div>
      <div className="projdet-txtx">
        <h4>{title}</h4>
        <h3>{description}</h3>
      </div>
    </div>
  );
};
