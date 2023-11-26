import React from "react";
import styles from "../styles/ScrollingText.module.css";

const ScrollingText = ({ phrases }) => {
	return (
		<div className={styles.scrollingTextContainer}>
			<div className={styles.marquee}>
				{/* Double the content */}
				{[...phrases, ...phrases].map((phrase, index) => (
					<span key={index} className={styles.phrase}>
						{phrase}
					</span>
				))}
			</div>
		</div>
	);
};

export default ScrollingText;
