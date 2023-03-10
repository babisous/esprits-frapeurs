import React from "react";
import Link from "next/link";
//import logo

export default function Nav() {
	return (
		<div className="header">
			<div className="navbar">
				<Link href={"/"}>L'agence</Link>
				<Link href={"/articles"}>Articles</Link>
				<Link href={"/realisations"}>Réalisations</Link>
				<Link href={"/contact"}>Contact</Link>
			</div>
			<div className="logo"></div>
		</div>
	);
}
