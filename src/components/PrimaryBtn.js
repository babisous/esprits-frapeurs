// components/PrimaryBtn.js

import React from "react";
import styles from "../styles/PrimaryBtn.module.css";

const PrimaryBtn = ({ text, onClick }) => {
	return (
		<button className={styles.primaryBtn} onClick={onClick}>
			{text}
		</button>
	);
};

export default PrimaryBtn;
