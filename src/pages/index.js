import { Inter } from "next/font/google";
import Layout from "../components/layouts/Layout";
import { getTable } from "@/lib/airtable";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }) {
	return (
		<Layout>
			<section className="heroHomepage">
				<h1 id="nameHeroHomepage">Esprits Frappeurs™</h1>
				<h1 id="roleHeroHomepage">L’agence web & créative</h1>
				<h1 id="catchphraseHeroHomepage">Pour une com’ qui cogne</h1>
				<h1 id="catchphrase2HeroHomepage">Qui sait marquer l’esprit</h1>
			</section>
			<section className="articlesContainerHomepage">
				{articles.map((article, index) => (
					<div
						key={article.id}
						className="articleCardHomepage"
						id={"articleHomepage" + (index + 1)}
					>
						<p>{article.fields.title}</p>
					</div>
				))}
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const articles = await getTable("Articles", {
		sort: [{ field: "createdAt", direction: "desc" }],
		maxRecords: 3,
	});
	console.log(articles);
	return {
		props: { articles },
	};
}
