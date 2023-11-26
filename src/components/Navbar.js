// components/Navbar.js
import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();
	const [mobileNavActive, setMobileNavActive] = useState(false);

	const toggleMobileNav = () => {
		setMobileNavActive(!mobileNavActive);
	};

	return (
		<>
			<nav className={styles.navContainer}>
				<div className={styles.navLinkContainer}>
					{/* <ul>
						<li className={router.asPath === "/" ? styles.activeLink : ""}>
							<Link href="/">Home</Link>
						</li>
						<li className={router.asPath === "/about" ? styles.activeLink : ""}>
							<Link href="/about">About</Link>
						</li>
						<li
							className={router.asPath === "/contact" ? styles.activeLink : ""}
						>
							<Link href="/contact">Contact</Link>
						</li>
					</ul> */}
				</div>
				<div className={styles.navLogoContainer}>
					<Link href="/">
						<img className={styles.navLogoImg} src="/img/logo.svg" alt="" />
					</Link>
				</div>
				{/* <button
					className={`${styles.hamburgerMenu} ${
						mobileNavActive ? styles.toggle : ""
					}`}
					onClick={toggleMobileNav}
				>
					<div className={styles.line}></div>
					<div className={styles.line}></div>
					<div className={styles.line}></div>
				</button> */}
			</nav>
			<div
				className={`${styles.mobileNavLinks} ${
					mobileNavActive ? styles.mobileNavActive : ""
				}`}
			>
				<ul>
					<li onClick={toggleMobileNav}>
						<Link href="/">Home</Link>
					</li>
					<li onClick={toggleMobileNav}>
						<Link href="/about">About</Link>
					</li>
					<li onClick={toggleMobileNav}>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
