// pages/api/sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async (req, res) => {
	// Liste des routes de votre application
	const links = [
		{ url: "/", changefreq: "daily", priority: 1 },
		{ url: "/about", changefreq: "daily", priority: 0.5 },
		{ url: "/contact", changefreq: "daily", priority: 0.5 },
	];

	// Crée un flux pour écrire le sitemap
	const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(links).pipe(stream)
	).then((data) => data.toString());

	res.end(xmlString);
};
