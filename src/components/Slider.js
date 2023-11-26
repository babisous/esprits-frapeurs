import React, { useState, useEffect } from "react";
import styles from "../styles/Slider.module.css";
import { fetchSliderProjects } from "@/services/projectService";

const Slider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const data = await fetchSliderProjects();
				setProjects(data || []); // Assurez-vous que data est toujours un tableau ou utilisez un tableau vide par défaut
			} catch (error) {
				console.error("Failed to fetch projects:", error);
			}
		};
		fetchProjects();
	}, []);

	if (!projects || projects.length === 0) {
		return null; // Retourne null ou un message de chargement si les projets ne sont pas disponibles
	}

	return (
		<div className={styles.slideContainer}>
			{projects.map((project, index) => (
				<div
					key={index}
					className={`${styles.slideItem} ${
						activeIndex === index ? styles.active : ""
					}`}
					onClick={() => {
						setActiveIndex(index);
					}}
				>
					<div
						className={`${styles.slideThumbnail} ${
							activeIndex === index ? "" : styles.hideOnMobile
						}`}
						style={{ backgroundImage: `url(${project.img})`, height: "80vh" }}
					>
						<div className={styles.textContainer}>
							<div className={styles.name}>{project.name}</div>
							<div className={styles.separator}>-</div>
							<div className={styles.type}>{project.type}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Slider;
