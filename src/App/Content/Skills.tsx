import JavaScript from "../assets/img/javascript.svg";
import TypeScript from "../assets/img/typescript.svg";
import React from "../assets/img/react.svg";
import Redux from "../assets/img/redux.svg";
import Next from "../assets/img/next.svg";
import HTML from "../assets/img/html.svg";
import CSS from "../assets/img/css.svg";
import Bootstrap from "../assets/img/bootstrap.svg";
import Tailwind from "../assets/img/tailwind.svg";
import Sass from "../assets/img/sass.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";


export interface skill {
	img: string,
	name: string,
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

	const skills:skill[] = [
		{ img: JavaScript, name: "JavaScript" },
		{ img: TypeScript, name: "TypeScript" },
		{ img: React, name: "React" },
		{ img: Redux, name: "Redux" },
		{ img: Next, name: "NextJS" },
		{ img: HTML, name: "HTML" },
		{ img: CSS, name: "CSS" },
		{ img: Bootstrap, name: "Bootstrap" },
		{ img: Tailwind, name: "Tailwind CSS" },
		{ img: Sass, name: "Sass" },
	];

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>
							<p>
								In this section you will find all the programming
								languages <br /> ​​that I use as a frontend developer.
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>
								{skills.map(({img,name}) => {
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
