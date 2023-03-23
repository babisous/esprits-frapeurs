import { Inter } from "next/font/google";
import Layout from "../components/layouts/Layout";
import { getTable } from "@/lib/airtable";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }) {
	console.log(articles);
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
						<div
							className="thumbnailArticleHomepage"
							id={"thumbnailArticleHomepage" + (index + 1)}
							style={{
								backgroundImage: `url(${article.fields.thumbnail[0].url})`,
							}}
						>
							<div className="badge">
								<p>Article</p>
							</div>
						</div>
						<div className="contentArticleHomepage">
							<Link href={`/article/${article.id}`}>
								<h3 className="titleArticleHomepage">{article.fields.title}</h3>
							</Link>
						</div>
					</div>
				))}
			</section>
			<section className="prices">
				<h1 className="priceTitleSection">
					Votre identité numérique ne coûtera pas un bras.
				</h1>
				<div className="sectionCards">
					<div className="cardsPricesContainer">
						<div className="cardPriceContent">
							<p>À partir de :</p>
							<p className="priceP">1490€</p>
							<p>
								Le coût d&apos;un site web débute à partir de 1490€, mais peut
								varier en fonction des besoins et exigences spécifiques du
								client. Le prix final sera établi après une évaluation
								approfondie des fonctionnalités requises et des caractéristiques
								souhaitées pour le site.
							</p>
							<ul>
								<li>Création du site</li>
								<li>Web design</li>
								<li>Hébergement</li>
								<li>Visibilité sur Google</li>
							</ul>
						</div>
						<div className="priceTitle">
							<h2>Site vitrine</h2>
						</div>
					</div>
					<div className="cardsPricesContainer">
						<div className="cardPriceContent">
							<p>À partir de :</p>
							<p className="priceP">790€</p>
							<p>
								Le coût d&apos;un site web débute à partir de 1490€, mais peut
								varier en fonction des besoins et exigences spécifiques du
								client. Le prix final sera établi après une évaluation
								approfondie des fonctionnalités requises et des caractéristiques
								souhaitées pour le site.
							</p>
							<ul>
								<li>Création du site</li>
								<li>Web design</li>
								<li>Hébergement</li>
								<li>Visibilité sur Google</li>
							</ul>
						</div>
						<div className="priceTitle">
							<h2>Identité de marque</h2>
						</div>
					</div>
				</div>
				<div className="priceDescription">
					<p>
						Pas encore conquis ? Ne vous inquiétez pas on en a encore sous le
						capot. Contactez-nous pour toutes demandes qui sortent des sentiers
						battus !
					</p>
				</div>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const articles = await getTable("Articles", {
		sort: [{ field: "createdAt", direction: "desc" }],
		maxRecords: 3,
	});

	return {
		props: { articles },
		revalidate: 60, // régénère la page toutes les 60 secondes
	};
}
