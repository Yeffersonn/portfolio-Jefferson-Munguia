import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoFooter.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<Col size={12} sm={6}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a
								href="https://www.linkedin.com/in/jefferson-junior-munguia-egusquiza-745781264/"
								rel="noopener"
								target="_blank"
							>
								<img src={navIcon1} alt="Linkedin" />
							</a>
							<a
								href="https://github.com/Yeffersonn"
								rel="noopener"
								target="_blank"
							>
								<img
									src={navIcon4}
									alt="GitHub"
									className="img-custom"
								/>
							</a>
						</div>
						<p>Copyright 2023. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
