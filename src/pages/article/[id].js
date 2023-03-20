import { getRecordById, getTable } from "@/lib/airtable";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Layout from "../../components/layouts/Layout";

export default function ArticlePage({ article }) {
	return (
		<Layout>
			<section className="articleHero">
				<h1>{article.fields.title}</h1>
			</section>
			<section className="articleContent">
				<ReactMarkdown>{article.fields.content}</ReactMarkdown>
			</section>
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	const article = await getRecordById("Articles", params.id);

	return {
		props: { article },
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	// récupérer les `id`s de tous les articles
	const articles = await getTable("Articles");

	// générer les URL de page de détail pour chaque article
	const paths = articles.map((article) => ({ params: { id: article.id } }));

	return {
		paths,
		fallback: false,
	};
}
