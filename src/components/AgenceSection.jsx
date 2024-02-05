import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

const AgenceSection = () => {
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [buttonText, setButtonText] = useState("Nous contacter");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (email === "" || message === "") {
			setErrorMessage(
				"Veuillez remplir à la fois le champ email et la description pour nous contacter."
			);
			return;
		}

		if (isSubmitted) {
			setIsSubmitted(false);
			setMessage("");
			setEmail("");
			setErrorMessage("");
			setButtonText("Nous contacter");
		} else {
			const response = await fetch("/api/sendEmail", {
				method: "POST",
				body: JSON.stringify({ email, message }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.status === 200) {
				setErrorMessage(
					"Merci de nous avoir partagé votre projet on revient vers vous le plus vite possible ;)"
				);
				setButtonText("Nous recontacter");
				setIsSubmitted(true);
				setMessage(""); // reset message

				// Envoyer l'événement Google Analytics
				if (typeof window !== "undefined") {
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						event: "email_sent",
						category: "Contact Form",
						action: "Send",
						label: "Email Sent",
					});
				}
			} else {
				alert("Erreur lors de l'envoi de l'email.");
			}
		}
	};

	return (
		<div className={styles.agenceSection}>
			<div className={styles.agenceSectionHeader}>
				<img
					className={styles.agenceSectionImg}
					src="img/agenceEF.png"
					alt=""
				/>
				<h3 className={styles.agenceSectionTitle}>
					On vous <br /> fait faire <br /> un tour <br /> de l’agence ?
				</h3>
			</div>
			<div id="contact"></div>
			<div className={styles.agenceContent}>
				{/* <p className={styles.agenceSectionParagraph}>
					Au sein d'Esprits Frappeurs, nous sommes convaincus que la créativité
					est la clé du succès en ligne. C'est pourquoi nous mettons un point
					d'honneur à faire preuve d'imagination et d'audace dans tout ce que
					nous faisons. Nous sommes toujours à la recherche de nouvelles idées
					et de nouvelles façons de concevoir des sites web qui captivent les
					utilisateurs et les incitent à agir.
				</p> */}
				<div className={styles.agenceSectionRow}>
					<p className={styles.agenceSectionParagraph}>
						Au sein d'Esprits Frappeurs, nous sommes convaincus que la
						créativité est la clé du succès en ligne. C'est pourquoi nous
						mettons un point d'honneur à faire preuve d'imagination et d'audace
						dans tout ce que nous faisons. Nous sommes toujours à la recherche
						de nouvelles idées et de nouvelles façons de concevoir des sites web
						qui captivent les utilisateurs et les incitent à agir.
						<br />
						<br />
						En plus de notre engagement en faveur de la qualité et de
						l'originalité, nous sommes également déterminés à offrir un
						excellent service à la clientèle. Nous travaillons en étroite
						collaboration avec nos clients à chaque étape du processus de
						conception pour s'assurer que le résultat final répond à leurs
						besoins et à leurs attentes.
						<br />
						<br />
						Nous croyons que le développement durable est crucial pour l'avenir
						de notre planète et de notre industrie. C'est pourquoi nous nous
						engageons à utiliser des technologies éco-responsables pour
						concevoir des sites web qui minimisent leur impact sur
						l'environnement.
						<br />
						<br />
						Si vous êtes à la recherche d'une agence web qui met l'accent sur la
						créativité, la qualité et l'engagement en faveur de l'environnement,
						alors Esprits Frappeurs est l'agence qu'il vous faut. Contactez-nous
						dès aujourd'hui pour en savoir plus sur les services que nous
						pouvons vous offrir.
					</p>
					<div className={styles.formContainer}>
						<label className={styles.label}>
							<p className={styles.labelText}>E-mail :</p>
							<input
								className={styles.emailInput}
								type="text"
								placeholder="votremail@ici.fr"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								disabled={isSubmitted}
							/>
						</label>

						<label className={styles.label}>
							<p className={styles.labelText}>Description :</p>
							<textarea
								className={styles.textarea}
								placeholder={
									errorMessage ||
									"Ici, vous pouvez nous parler de votre projet. Hésitez pas à le détailler un maximum ;)"
								}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								disabled={isSubmitted}
							/>
						</label>

						<button
							className={styles.button}
							type="button"
							onClick={handleSubmit}
						>
							{buttonText}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AgenceSection;
