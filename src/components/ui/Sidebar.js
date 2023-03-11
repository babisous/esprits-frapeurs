import React from "react";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="socialsSidebar">
				<a href="https://twitter.com/espritsfrappeurs">
					<div
						className="socialIconSidebar"
						id="twitterSocialIconSidebar"
					></div>
				</a>
				<a href="https://www.instagram.com/espritsfrappeurs/">
					<div
						className="socialIconSidebar"
						id="instagramSocialIconSidebar"
					></div>
				</a>
				<a href="https://www.behance.net/espritsfrappeurs">
					<div
						className="socialIconSidebar"
						id="behanceSocialIconSidebar"
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
