// components/HeroBanner.js

import React from "react";
import styles from "../styles/HeroBanner.module.css";
import { useRouter } from "next/router";
import PrimaryBtn from "./PrimaryBtn";

const HeroBanner = () => {
	const router = useRouter();

	if (router.pathname === "/") {
		return (
			<div
				className={styles.heroBannerContainer}
				style={{ backgroundImage: "url('/img/hero-home-bg.png')" }}
			>
				<div className={styles.heroBannerContent}>
					<div className={styles.heroBannerTitle}>
						<h1 className={styles.heroBanner1}>Esprits Frappeurs™</h1>
					</div>
					<div className={styles.heroBannerTitle}>
						<h1 className={styles.heroBanner2}>L’agence web & créative</h1>
					</div>
					<div className={styles.heroBannerTitle}>
						<h1 className={styles.heroBanner3}>Pour une com’ qui cogne</h1>
					</div>
					<div className={styles.heroBannerTitle}>
						<h1 className={styles.heroBanner4}>Qui sait marquer l’esprit</h1>
					</div>
				</div>
				<PrimaryBtn
					text="Nous contacter"
					onClick={() => {
						const element = document.querySelector("#contact");
						const offset = window.innerWidth <= 768 ? -200 : 96; // -200 pour mobile, 96 pour desktop
						window.scroll({
							top: element.offsetTop - offset,
							left: 0,
							behavior: "smooth",
						});
					}}
				/>
			</div>
		);
	} else {
		return null;
	}
};

export default HeroBanner;
