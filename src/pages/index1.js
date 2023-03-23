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
			<section className="sectionHome" id="prices">
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
			<section className="sectionHome" id="about">
				<div className="heroAbout">
					<div className="imageHeroAbout"></div>
					<div className="titleAbout">
						<h1>On vous fait faire un tour de l’agence ?</h1>
					</div>
				</div>
				<div className="aboutContent">
					<div className="aboutText">
						<p>
							Au sein d'Esprits Frappeurs, nous sommes convaincus que la
							créativité est la clé du succès en ligne. C'est pourquoi nous
							mettons un point d'honneur à faire preuve d'imagination et
							d'audace dans tout ce que nous faisons. Nous sommes toujours à la
							recherche de nouvelles idées et de nouvelles façons de concevoir
							des sites web qui captivent les utilisateurs et les incitent à
							agir.
						</p>
					</div>
					<div className="aboutTextContact">
						<div className="aboutText2">
							<p>
								En plus de notre engagement en faveur de la qualité et de
								l'originalité, nous sommes également déterminés à offrir un
								excellent service à la clientèle. Nous travaillons en étroite
								collaboration avec nos clients à chaque étape du processus de
								conception pour s'assurer que le résultat final répond à leurs
								besoins et à leurs attentes.
								<br />
								<br />
								Nous croyons que le développement durable est crucial pour
								l'avenir de notre planète et de notre industrie. C'est pourquoi
								nous nous engageons à utiliser des technologies éco-responsables
								pour concevoir des sites web qui minimisent leur impact sur
								l'environnement.
								<br />
								<br />
								Si vous êtes à la recherche d'une agence web qui met l'accent
								sur la créativité, la qualité et l'engagement en faveur de
								l'environnement, alors Esprits Frappeurs est l'agence qu'il vous
								faut. Contactez-nous dès aujourd'hui pour en savoir plus sur les
								services que nous pouvons vous offrir.
							</p>
						</div>
						<form className="aboutContact">
							{/* email description submit */}

							<div className="emailContainer">
								<label htmlFor="email">E-mail :</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="votremail@ici.fr"
								/>
							</div>
							<div className="descriptionContainer">
								<label htmlFor="description">Description :</label>
								<textarea
									name="description"
									id="description"
									cols="30"
									rows="10"
									placeholder="Ici, vous pouvez nous parler de votre projet. Hésitez pas à le détailler un maximum ;)"
								></textarea>
							</div>
							<div className="submitContainer">
								<input type="submit" value="Contactez-nous" />
							</div>
						</form>
					</div>
				</div>
			</section>
			<section className="sectionHome" id="realisation">
				<h1 className="priceTitleSection">
					On vous montre ce qu'on sait faire ?
				</h1>
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
