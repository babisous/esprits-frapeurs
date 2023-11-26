// components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div style={{ display: "flex" }}>
			<Sidebar />
			<div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
				<Navbar />
				<main style={{ flex: 1 }}>{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
