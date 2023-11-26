// components/Sidebar.js
import React, { useEffect } from "react";
import styles from "../styles/Sidebar.module.css";
import Link from "next/link";
import { useRef } from "react";

const Sidebar = () => {
	// Référence à l'élément asterisque dans le DOM
	const asteriskRef = useRef(null);

	// Utilisation de l'effet de bord pour ajouter un écouteur d'événement de défilement à la fenêtre
	useEffect(() => {
		// Fonction pour gérer l'événement de défilement
		const handleScroll = () => {
			// Vérifie si l'élément asterisque est présent dans le DOM
			if (asteriskRef.current) {
				// Calcule la rotation en fonction de la position de défilement de la fenêtre
				const rotation = `rotate(${window.scrollY * 0.2}deg)`;
				// Applique la rotation à l'élément asterisque
				asteriskRef.current.style.transform = rotation;
				// Ajoute une transition pour fluidifier l'animation
				asteriskRef.current.style.transition = "transform 0.5s ease-out";
			}
		};

		// Ajoute l'écouteur d'événement de défilement à la fenêtre
		window.addEventListener("scroll", handleScroll);

		// Retourne une fonction de nettoyage qui sera exécutée lors du démontage du composant
		// Cette fonction supprime l'écouteur d'événement de défilement de la fenêtre
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // Exécute l'effet une fois au montage du composant

	return (
		<div className={styles.sidebarContainer}>
			<div className={styles.sidebarSocialMediaContainer}>
				<Link href={"/"}>
					<img
						className={styles.socialMediaIcon}
						src="/img/twitter.svg"
						alt=""
					/>
				</Link>
				<Link href={"/"}>
					<img
						className={styles.socialMediaIcon}
						src="/img/instagram.svg"
						alt=""
					/>
				</Link>
				<Link href={"/"}>
					<img
						className={styles.socialMediaIcon}
						src="/img/behance.svg"
						alt=""
					/>
				</Link>
			</div>
			<div className={styles.sidebarTextContainer}>
				<p>Agence web & Créative</p>
				<img ref={asteriskRef} src="/img/asterisque.svg" alt="" />
				<div className={styles.espritsFrappeurs}>
					<p className={styles.tm}>™</p>
					<p>Esprits Frappeurs</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
