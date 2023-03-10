import React from "react";

import twitterIcon from "../assets/img/ef_twitter.png";
import instaIcon from "../assets/img/ef_insta.png";
import behanceIcon from "../assets/img/ef_behance.png";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="socialsSidebar">
				<a href="https://twitter.com/espritsfrappeurs">
					<div
						className="socialIconSidebar"
						style={{ backgroundImage: `url(${twitterIcon})` }}
					></div>
				</a>
				<a href="https://www.instagram.com/espritsfrappeurs/">
					<div
						className="socialIconSidebar"
						style={{ backgroundImage: `url(${instaIcon})` }}
					></div>
				</a>
				<a href="https://www.behance.net/espritsfrappeurs">
					<div
						className="socialIconSidebar"
						style={{ backgroundImage: `url(${behanceIcon})` }}
					></div>
				</a>
			</div>
			<div className="textSidebar">
				<h1 className="nameSidebar">Esprits Frappeurs™</h1>
				<span className="asterix">*</span>
				<h1 className="nameSidebar" id="nameSidebarLight">
					Agence web & créa
				</h1>
			</div>
		</div>
	);
}
