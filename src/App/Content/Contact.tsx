import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import { motion } from "framer-motion";

export interface formContent {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	message: string;
}

export const Contact = () => {
	const formInitialDetails: formContent = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	};

	const initialStatus: any = true;
	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState("Send");
	const [status, setStatus] = useState(initialStatus);

	const onFormUpdate = (category: any, value: any) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});

		const currentForm: object = {
			...formDetails,
			[category]: value,
		};
		onValidateInput(currentForm);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		// setButtonText("Sending...");
		// let response = await fetch("http://localhost:5000/contact", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json;charset=utf-8",
		// 	},
		// 	body: JSON.stringify(formDetails),
		// });
		// setButtonText("Send");
		// let result = await response.json();
		// setFormDetails(formInitialDetails);
		// if (result.code == 200) {
		// 	setStatus({ succes: true, message: "Message sent successfully" });
		// } else {
		// 	setStatus({
		// 		succes: false,
		// 		message: "Something went wrong, please try again later.",
		// 	});
		// }
	};

	const onValidate = ({ target }: any) => {
		if (target.value.length == 0) {
			target.classList.add("border-error");
		} else {
			target.classList.remove("border-error");
		}
	};

	const onValidateInput = (currentForm: object) => {
		const currentBoolean = Object.entries(currentForm).every(
			(n) => n[1].length > 0
		);

		setStatus(!currentBoolean);
	};

	return (
		<section className="contact" id="connect">
			<Container>
				<Row className="align-items-center">
					<Col size={12} md={6}>
						<motion.img
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.3, duration: 0.75 }}
							variants={{
								hidden: { opacity: 0, x: -100 },
								visible: { opacity: 1, x: 0 },
							}}
							src={contactImg}
							alt="Contact Us"
						/>
					</Col>
					<Col size={12} md={6}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.3, duration: 0.75 }}
							variants={{
								hidden: { opacity: 0, x: 100 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							<h2>Get In Touch</h2>
							<form
								// onSubmit={handleSubmit}
								action="https://formsubmit.co/jefferson.munguia.egusquiza@gmail.com"
								method="POST"
							>
								<Row>
									<Col size={12} sm={6} className="px-1">
										<input
											type="text"
											name="Nombre"
											value={formDetails.firstName}
											placeholder="First Name"
											onChange={(e) => {
												onFormUpdate("firstName", e.target.value);
												onValidate(e);
											}}
											onBlur={(e) => {
												onValidate(e);
											}}
										/>
									</Col>
									<Col size={12} sm={6} className="px-1">
										<input
											type="text"
											name="Apellido"
											value={formDetails.lastName}
											placeholder="Last Name"
											onChange={(e) => {
												onFormUpdate("lastName", e.target.value);
												onValidate(e);
											}}
											onBlur={(e) => {
												onValidate(e);
											}}
										/>
									</Col>
									<Col size={12} sm={6} className="px-1">
										<input
											type="email"
											name="Email"
											value={formDetails.email}
											placeholder="Email Address"
											onChange={(e) => {
												onFormUpdate("email", e.target.value);
												onValidate(e);
											}}
											onBlur={(e) => {
												onValidate(e);
											}}
										/>
									</Col>
									<Col size={12} sm={6} className="px-1">
										<input
											type="tel"
											name="Teléfono"
											value={formDetails.phone}
											placeholder="Phone No."
											onChange={(e) => {
												onFormUpdate("phone", e.target.value);
												onValidate(e);
											}}
											onBlur={(e) => {
												onValidate(e);
											}}
										/>
									</Col>
									<Col size={12} className="px-1">
										<textarea
											rows={6}
											value={formDetails.message}
											name="Mensaje"
											placeholder="Message"
											onChange={(e) => {
												onFormUpdate("message", e.target.value);
												onValidate(e);
											}}
											onBlur={(e) => {
												onValidate(e);
											}}
										></textarea>
										{status && (
											<Row>
												<p
													className={
														status === true ? "danger" : "success"
													}
												>
													* Complete all fields
												</p>
											</Row>
										)}
										{!status && (
											<Row>
												<p
													className={
														status === true ? "danger" : "success"
													}
												>
													* Completed fields
												</p>
											</Row>
										)}
										<button
											className="button-contact"
											type="submit"
											disabled={status}
										>
											<span>{buttonText}</span>
										</button>
									</Col>
								</Row>
								<input type="hidden" name="_captcha" value="false" />
								<input
									type="hidden"
									name="_cc"
									value="U20215320@utp.edu.pe"
								></input>
								<input
									type="hidden"
									name="_subject"
									value="¡Nueva Petición Portafolio Web!"
								/>
								<input type="hidden" name="_template" value="table" />
								<input
									type="hidden"
									name="_next"
									value="https://portfolio-jefferson-munguia.vercel.app/"
								/>
							</form>
						</motion.div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
