import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.footerText}>
				<p className={styles.text}>© * 2023 * ESPRITS FRAPPEURS™</p>
			</div>
			<div className={styles.footerLogo}>
				<img src="/img/footer_logo.svg" alt="logo" className={styles.logo} />
			</div>
		</footer>
	);
};

export default Footer;
