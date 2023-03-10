import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { fetchAPI } from "../../lib/strapi";

export default function Article({ article }) {
	article = article.data.attributes;
	return (
		<div>
			<h1>{article.Title}</h1>
			<ReactMarkdown>{article.Body}</ReactMarkdown>
			<Link href="/articles" passHref>
				<button>Back to articles</button>
			</Link>
		</div>
	);
}

export async function getStaticPaths() {
	const articles = await fetchAPI("/articles");
	const paths = articles.data.map((article) => ({
		params: { id: article.id.toString() },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const article = await fetchAPI(`/articles/${params.id}`);
	return { props: { article } };
}
