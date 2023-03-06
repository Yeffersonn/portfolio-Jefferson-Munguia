import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoFooter.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
	return (
		<footer
			className="footer"
		>
			<Container>
				<Row className="align-items-center">
					<Col size={12} sm={6}>
						<motion.img
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.3, duration: 0.75 }}
						variants={{
							hidden: { opacity: 0, x: 100 },
							visible: { opacity: 1, x: 0 },
						}}
						src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.3, duration: 0.75 }}
						variants={{
							hidden: { opacity: 0, x: -100 },
							visible: { opacity: 1, x: 0 },
						}}
						className="social-icon">
							<a
								href="https://www.linkedin.com/in/jefferson-munguia-745781264/"
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
						</motion.div>
						<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.3, duration: 0.75 }}
						variants={{
							hidden: { opacity: 0, x:-100 },
							visible: { opacity: 1, x: 0 },
						}}
						>Copyright 2023. All Rights Reserved</motion.p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
