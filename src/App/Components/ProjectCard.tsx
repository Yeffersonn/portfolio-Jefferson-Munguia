import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

export interface cardProyect {
	title: string;
	description: string;
	imgUrl: string;
	webUrl: string;
}

export const ProjectCard = ({
	title,
	description,
	imgUrl,
	webUrl,
}: cardProyect) => {
	return (
		<Col size={12} sm={12} md={6} lg={4}>
			<motion.div
				className="proj-imgbx"
				viewport={{ once: true, amount: 0.5 }}
				variants={{
					hidden: { opacity: 0, scale: 0.5 },
					visible: { opacity: 1, scale: 1 },
				}}
			>
				<img src={imgUrl} />
				<div className="proj-txtx">
					<h4>{title}</h4>
					<span className="proj-description">{description}</span>
					<br />
					<a
						href={webUrl}
						target="_blank"
						rel="noopener"
						className="button-custom"
					>
						Go to website
					</a>
				</div>
			</motion.div>
		</Col>
	);
};
