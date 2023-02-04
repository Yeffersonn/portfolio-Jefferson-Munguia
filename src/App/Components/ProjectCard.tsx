import { Col } from "react-bootstrap";

export interface cardProyect {
	title: string,
	description: string,
	imgUrl: string,
}

export const ProjectCard = ({ title, description, imgUrl }: cardProyect) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
