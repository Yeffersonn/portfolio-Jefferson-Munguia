import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { cardProyect, ProjectCard } from "../Components/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import navIcon4 from "../assets/img/nav-icon4.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

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

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__fadeIn"
											: ""
									}
								>
									<h2>Projects</h2>
									<p>
										Here you can find all my projects in
										which I have put my skills as a Frontend
										Developer into practice.
									</p>
									<Tab.Container
										id="projects-tabs"
										defaultActiveKey="first"
									>
										<Nav
											variant="pills"
											className="nav-pills mb-5 justify-content-center align-items-center"
											id="pills-tab"
										>
											<Nav.Item>
												<Nav.Link eventKey="first">
													Tab 1
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">
													Tab 2
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="third">
													Tab 3
												</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id="slideInUp"
											className={
												isVisible
													? "animate__animated animate__slideInUp"
													: ""
											}
										>
											<Tab.Pane eventKey="first">
												<Row>
													{projects.map(
														(project, index) => {
															return (
																<ProjectCard
																	key={index}
																	{...project}
																/>
															);
														}
													)}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<p>
													Soon I will post more of my
													projects, but you can find
													more of my projects in my
													github profile
												</p>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<p>
													Soon I will post more of my
													projects, but you can find
													more of my projects in my
													github profile
												</p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	);
};
