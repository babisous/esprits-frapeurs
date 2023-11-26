// components/HeaderSection.js

import React from "react";
import Link from "next/link";
import styles from "../styles/HeaderSection.module.css";

const HeaderSection = ({ title, linkText, url }) => {
	return (
		<div className={styles.container}>
			<h2>{title}</h2>
			{linkText && url && (
				<Link className={styles.linkText} href={url}>
					{linkText}
				</Link>
			)}
		</div>
	);
};

export default HeaderSection;
