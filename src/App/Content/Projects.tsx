import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { cardProyect, ProjectCard } from "../Components/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import navIcon4 from "../assets/img/nav-icon4.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { motion } from "framer-motion";

export const Projects = () => {
	const projects: cardProyect[] = [
		{
			title: "Dashboard",
			description:
				"Responsive design and Dark mode developed with JavaScript, React, Material UI",
			imgUrl: projImg1,
			webUrl: "https://dashboard-yeffersong.vercel.app/",
		},
		{
			title: "Digital Ocean",
			description:
				"Responsive design developed with TypeScript, React, Tailwind",
			imgUrl: projImg2,
			webUrl: "https://digital-ocean.vercel.app/",
		},
		{
			title: "Travel Company",
			description:
				"Responsive design and Dark mode developed with TypeScript, React, Tailwind",
			imgUrl: projImg3,
			webUrl: "https://travel-company-alpha.vercel.app/",
		},
		{
			title: "GitHub API",
			description:
				"API consumption developed with JavaScript, React, Material UI",
			imgUrl: projImg4,
			webUrl: "https://github-api-one-xi.vercel.app/",
		},
		{
			title: "Pokedux",
			description:
				"API consumption developed with JavaScript, React, Redux, Ant Design",
			imgUrl: projImg5,
			webUrl: "https://pokedux-mauve.vercel.app/",
		},
		{
			title: "To-Do Machine",
			description:
				"Application developed with JavaScript, React, React Router",
			imgUrl: projImg6,
			webUrl: "https://recordatorios.vercel.app/",
		},
	];

	const projects2: cardProyect[] = [
		{
			title: "Evogym",
			description:
				"Responsive design developed with TypeScript, React, Tailwind",
			imgUrl: projImg7,
			webUrl: "https://evogym-omega.vercel.app/",
		},
		{
			title: "Coffee Website",
			description:
				"Responsive design developed with JavaScript, React and Scroll Reveal",
			imgUrl: projImg8,
			webUrl: "https://coffee-website-sable.vercel.app/",
		},
		{
			title: "Sushi Website",
			description:
				"Responsive design and Dark mode developed with JavaScript, React",
			imgUrl: projImg9,
			webUrl: "https://sushi-website-sigma.vercel.app/",
		},
		{
			title: "Christmas Website",
			description:
				"Responsive design and Parallax Effect developed with JavaScript, React",
			imgUrl: projImg10,
			webUrl: "https://christmas-website-seven.vercel.app/#celebrate",
		},
		{
			title: "Juice Website",
			description:
				"Responsive design developed with JavaScript, React, and GSAP",
			imgUrl: projImg11,
			webUrl: "https://juice-website-ochre.vercel.app/",
		},
		{
			title: "Yoga Website",
			description:
				"Responsive design and Dark Mode developed with JavaScript, React",
			imgUrl: projImg12,
			webUrl: "https://yoga-website-blond.vercel.app/",
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.75 }}
							variants={{
								hidden: { opacity: 0, y: -100 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<h2>Projects</h2>
							<p>
								Here you can find all my projects in which I have put my
								skills as a Frontend Developer into practice.
							</p>
						</motion.div>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav
								variant="pills"
								className="nav-pills mb-5 justify-content-center align-items-center"
								id="pills-tab"
							>
								<Nav.Item>
									<Nav.Link eventKey="first">Tab 1</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Tab 2</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Tab 3</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content
								id="slideInUp"
							>
								<Tab.Pane eventKey="first">
									<motion.div
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true, amount: 0.5 }}
										variants={{
											hidden: {},
											visible: {
												transition: {
													staggerChildren: 0.3,
												},
											},
										}}
									>
										<Row>
											{projects.map((project, index) => {
												return (
													<ProjectCard key={index} {...project} />
												);
											})}
										</Row>
									</motion.div>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
								<motion.div
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true, amount: 0.5 }}
										variants={{
											hidden: {},
											visible: {
												transition: {
													staggerChildren: 0.3,
												},
											},
										}}
									>
										<Row>
											{projects2.map((project, index) => {
												return (
													<ProjectCard key={index} {...project} />
												);
											})}
										</Row>
									</motion.div>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<p>
										Soon I will post more of my projects, but you can
										find more of my projects in my github profile
									</p>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	);
};
