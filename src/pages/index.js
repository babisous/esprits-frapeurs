import { Inter } from "next/font/google";
import Layout from "../components/layouts/Layout";
import { getTable } from "@/lib/airtable";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }) {
	return (
		<Layout>
			{articles.map((article) => (
				<div key={article.id}>
					<h1>{article.fields.title}</h1>
					<ReactMarkdown>{article.fields.content}</ReactMarkdown>
				</div>
			))}
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
