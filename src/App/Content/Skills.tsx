import javascript from "../assets/img/javaScript.svg";
import typescript from "../assets/img/typeScript.svg";
import react from "../assets/img/react.svg";
import redux from "../assets/img/redux.svg";
import next from "../assets/img/next.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import tailwind from "../assets/img/tailwind.svg";
import sass from "../assets/img/sass.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export interface skill {
	img: string;
	name: string;
}

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const skills: skill[] = [
		{ img: javascript, name: "JavaScript" },
		{ img: typescript, name: "TypeScript" },
		{ img: react, name: "React" },
		{ img: redux, name: "Redux" },
		{ img: next, name: "NextJS" },
		{ img: html, name: "HTML" },
		{ img: css, name: "CSS" },
		{ img: bootstrap, name: "Bootstrap" },
		{ img: tailwind, name: "Tailwind CSS" },
		{ img: sass, name: "Sass" },
	];

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>
							<p>
								In this section you will find the programming languages
								<br></br>I use in my activities as a web developer.
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>
								{skills.map(({ img, name }) => {
									return (
										<div className="item" key={name}>
											<img src={img} alt={name} />
											<h5>{name}</h5>
										</div>
									);
								})}
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp} alt="Image" />
		</section>
	);
};
