import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { fetchAPI } from "../lib/strapi";
import Link from "next/link";

export default function Articles({ articles }) {
	articles = articles.data;
	return (
		<div>
			{/* {articles &&
				articles.map((article) => (
					<div key={article.id}>
						<Link href={`/articles/${article.id}`} passHref>
							<span>
								<h1>{article.attributes.Title}</h1>
							</span>
						</Link>
						<p>{article.attributes.Slug}</p>
						<ReactMarkdown>{article.attributes.Body}</ReactMarkdown>
					</div>
				))} */}
			<h1>Homepage</h1>
		</div>
	);
}

export async function getStaticProps() {
	const articles = await fetchAPI("/articles");

	return {
		props: { articles },
		revalidate: 1,
	};
}
