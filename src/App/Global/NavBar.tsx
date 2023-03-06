import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logoNavBar.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onUpdateActiveLink = (value: any) => {
		setActiveLink(value);
	};

	// className="animate__animated animate__lightSpeedInLeft" animación del navBar
	return (
		<Router>
			<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
				<Container>
					<Navbar.Brand href="/">
						<img src={logo} alt="Logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link
								href="#home"
								className={
									activeLink === "home"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("home")}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href="#skills"
								className={
									activeLink === "skills"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("skills")}
							>
								Skills
							</Nav.Link>
							<Nav.Link
								href="#projects"
								className={
									activeLink === "projects"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("projects")}
							>
								Projects
							</Nav.Link>
						</Nav>
						<span className="navbar-text">
							<div className="social-icon">
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
									<img src={navIcon4} alt="GitHub" className="img-custom"/>
								</a>
							</div>
							<HashLink to="#connect">
								<button className="vvd">
									<span>Let’s Connect</span>
								</button>
							</HashLink>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	);
};
