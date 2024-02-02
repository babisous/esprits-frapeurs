import React from "react";
import Slider from "@/components/Slider";
import HeroBanner from "@/components/HeroBanner";
import HeaderSection from "@/components/HeaderSection";
import ScrollingText from "@/components/ScrollingText";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { fetchSliderProjects } from "@/services/projectService";
import AgenceSection from "@/components/AgenceSection";
import { useEffect, useRef, useState } from "react";

const Home = ({ projects }) => {
	const phrases = [
		"Chez Esprits Frappeurs, nous ne faisons pas que coder, nous parlons aussi HTML couramment!",
		"Nous sommes une agence de communication web 360° qui frappe plus fort que Thor avec son marteau!",
		"SEO pour nous, c'est comme jongler avec des algorithmes - et on ne laisse jamais rien tomber!",
		"Esprits Frappeurs, l'endroit où les pixels se transforment en chefs-d'œuvre et les balises meta en poésie.",
		"Besoin d'augmenter votre présence en ligne? Nous avons plus d'outils dans notre boîte que Batman a de gadgets.",
		"Chez Esprits Frappeurs, on sert les identités visuelles plus chaudes que des cafés lattes artisanaux!",
		"Nous ne sommes pas des chirurgiens, mais nous faisons des liftings... de sites web!",
		"Si Google était un terrain de chasse, nous serions les rois de la jungle avec notre SEO redoutable.",
		"Vous voulez transformer les internautes en fans inconditionnels? Nous avons le grimoire magique pour ça!",
		"Chez Esprits Frappeurs, notre support client est plus réactif qu'un chat sur un toit chaud.",
		"Vos médias sociaux sont aussi plats qu'une limonade ouverte depuis 3 jours? On leur redonne du pétillant!",
		"Notre agence est comme un couteau suisse du web : pleine de fonctionnalités et prête à conquérir le monde digital!",
	];

	const servicesData = [
		{
			title: "SITE WEB",
			image: "img/emoji_technologist_blue.png",
			subtitle: "Conception de Sites Web qui Frappent Fort",
			text: "Des sites web percutants qui reflètent l'identité de votre entreprise et captivent vos visiteurs.",
		},
		{
			title: "SEO",
			image: "img/robot.png",
			subtitle: "Optimisation SEO beep boop le robot Google ne vous ratera pas",
			text: "Améliorez votre positionnement dans les résultats de recherche et attirez un trafic qualifié grâce à notre expertise en référencement.",
		},
		{
			title: "RÉDACTION",
			image: "img/redac.png",
			subtitle: "Rédaction SEO, le Carburant de Votre Ascension Digitale",
			text: "Attirez l'attention de votre audience avec des contenus engageants et percutants qui transmettent votre message avec efficacité.",
		},
		{
			title: "LOCAL BUSINESS",
			image: "img/pin.png",
			subtitle: "Google My Business pour une Présence Locale Écrasante",
			text: "Mettez en valeur votre entreprise sur Google Maps et attirez davantage de clients dans votre région.",
		},
		{
			title: "RÉSEAUX SOCIAUX",
			image: "img/Shine.png",
			subtitle: "Social Media : Une Stratégie qui Fait Bouillir l'Engagement",
			text: "Maximisez votre présence sur les réseaux sociaux et interagissez avec votre communauté pour créer un véritable engouement autour de votre marque.",
		},
		{
			title: "IDENTITÉ VISUELLE",
			image: "img/COLOR.png",
			subtitle: "Identité Visuelle, l'Art de Vous Démarquer",
			text: "Démarquez-vous de la concurrence avec une identité visuelle percutante qui reflète votre singularité.",
		},
	];

	const [openIndex, setOpenIndex] = useState(null);

	const refs = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setOpenIndex(parseInt(entry.target.id));
					}
				});
			},
			{
				rootMargin: "-40% 0px", // Ajustez ces valeurs en fonction de vos besoins
				threshold: 0.5,
			}
		);

		refs.current.forEach((ref) => observer.observe(ref));

		return () => {
			refs.current.forEach((ref) => observer.unobserve(ref));
		};
	}, []);

	return (
		<>
			<Head>
				<title>Esprits Frappeurs | Agence Web et créative</title>
				<meta
					name="description"
					content="Esprits Frappeurs est une agence web qui offre des services de conception de site web, de référencement SEO et de gestion de médias sociaux."
				/>
				<meta
					name="keywords"
					content="agence web, agence web france, agence web suisse, agence web seo, agence web référencement, agence web médias sociaux, agence web site web, agence web site internet, agence web site vitrine, agence web site e-commerce, agence web site boutique en ligne, agence web site marchand, agence web site catalogue, agence web site portfolio, agence web site événementiel
					"
				/>
			</Head>
			<ScrollingText phrases={phrases} />
			<HeroBanner />
			<HeaderSection
				title="Réalisations"
				// linkText="Voir toutes les réalisations >"
				// url="/projects"
			/>
			<Slider />
			<AgenceSection />

			<HeaderSection title="Services" />
			<div className={styles.serviceSection}>
				<div className={styles.serviceRow}>
					<div className={styles.serviceCard}>
						<div className={styles.serviceCardThumbnail}>
							<h3 className={styles.serviceCardTitle}>SITE WEB</h3>
							<img
								className={styles.serviceCardImg}
								src="img/emoji_technologist_blue.png"
								alt=""
							/>
						</div>
						<div className={styles.serviceCardDescription}>
							<h4>Conception de Sites Web qui Frappent Fort </h4>
							<p>
								Des sites web percutants qui reflètent l'identité de votre
								entreprise et captivent vos visiteurs.
							</p>
						</div>
					</div>
					<div className={styles.serviceCard}>
						<div className={styles.serviceCardThumbnail}>
							<h3 className={styles.serviceCardTitle}>SEO</h3>
							<img
								className={styles.serviceCardImg}
								src="img/robot.png"
								alt=""
							/>
						</div>
						<div className={styles.serviceCardDescription}>
							<h4>
								Optimisation SEO beep boop le robot Google ne vous ratera pas
							</h4>
							<p>
								Améliorez votre positionnement dans les résultats de recherche
								et attirez un trafic qualifié grâce à notre expertise en
								référencement.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.serviceRow}>
					<div className={styles.serviceCardRed}>
						<div className={styles.serviceCardThumbnail}>
							<h3 className={styles.serviceCardTitle}>RÉDACTION</h3>
							<img
								className={styles.serviceCardImg}
								src="img/redac.png"
								alt=""
							/>
						</div>
						<div className={styles.serviceCardDescription}>
							<h4>Rédaction SEO, le Carburant de Votre Ascension Digitale</h4>
							<p>
								Attirez l'attention de votre audience avec des contenus
								engageants et percutants qui transmettent votre message avec
								efficacité.
							</p>
						</div>
					</div>
					<div className={styles.serviceCardLoc}>
						<div className={styles.serviceCardThumbnail}>
							<h3 className={styles.serviceCardTitle}>
								LOCAL <br /> BUSINESS
							</h3>
							<img className={styles.serviceCardImg} src="img/pin.png" alt="" />
						</div>
					</div>
				</div>
				<div className={styles.serviceRow3}>
					<div className={styles.serviceCardRes}>
						<div className={styles.serviceCardThumbnail}>
							<h3 className={styles.serviceCardTitle}>RÉSEAUX SOCIAUX</h3>
							<img
								className={styles.serviceCardImg}
								src="img/Shine.png"
								alt=""
							/>
						</div>
						<div className={styles.serviceCardDescription}>
							<h4>Google My Business pour une Présence Locale Écrasante</h4>
							<p>
								Mettez en valeur votre entreprise sur Google Maps et attirez
								davantage de clients dans votre région.
							</p>
						</div>
					</div>
					<div className={styles.serviceCardLoc}>
						<div className={styles.serviceCardDescription}>
							<h4>
								Social Media : Une Stratégie qui Fait Bouillir l'Engagement{" "}
							</h4>
							<p>
								Maximisez votre présence sur les réseaux sociaux et interagissez
								avec votre communauté pour créer un véritable engouement autour
								de votre marque.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.serviceRow}>
					<div className={styles.serviceCardIde}>
						<div className={styles.serviceCardThumbnail}>
							<h3 className={styles.serviceCardTitle}>IDENTITÉ VISUELLE</h3>
							<img
								className={styles.serviceCardImg}
								src="img/COLOR.png"
								alt=""
							/>
						</div>
						<div className={styles.serviceCardDescription}>
							<h4>Identité Visuelle, l'Art de Vous Démarquer </h4>
							<p>
								Démarquez-vous de la concurrence avec une identité visuelle
								percutante qui reflète votre singularité.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <div className={styles.serviceSectionMobile}>
				<div className={styles.serviceSectionMobileItem}>
					<div className={styles.serviceSectionMobileItemHeader}>
						<img
							className={styles.serviceSectionMobileItemImg}
							src="img/emoji_technologist_blue.png"
							alt=""
						/>
						<h3 className={styles.serviceSectionMobileItemTitle}>SITE WEB</h3>
					</div>
					<div className={styles.serviceSectionMobileItemContent}>
						<h4 className={styles.serviceSectionMobileItemSubtitle}>
							Conception de Sites Web qui Frappent Fort
						</h4>
						<p className={styles.serviceSectionMobileItemText}>
							Des sites web percutants qui reflètent l'identité de votre
							entreprise et captivent vos visiteurs.
						</p>
					</div>
				</div>
				<div className={styles.serviceSectionMobileItem}>
					<div className={styles.serviceSectionMobileItemHeader}>
						<img
							className={styles.serviceSectionMobileItemImg}
							src="img/robot.png"
							alt=""
						/>
						<h3 className={styles.serviceSectionMobileItemTitle}>SEO</h3>
					</div>
					<div className={styles.serviceSectionMobileItemContent}>
						<h4 className={styles.serviceSectionMobileItemSubtitle}>
							Optimisation SEO beep boop le robot Google ne vous ratera pas
						</h4>
						<p className={styles.serviceSectionMobileItemText}>
							Améliorez votre positionnement dans les résultats de recherche et
							attirez un trafic qualifié grâce à notre expertise en
							référencement.
						</p>
					</div>
				</div>
				<div className={styles.serviceSectionMobileItem}>
					<div className={styles.serviceSectionMobileItemHeader}>
						<img
							className={styles.serviceSectionMobileItemImg}
							src="img/redac.png"
							alt=""
						/>
						<h3 className={styles.serviceSectionMobileItemTitle}>RÉDACTION</h3>
					</div>
					<div className={styles.serviceSectionMobileItemContent}>
						<h4 className={styles.serviceSectionMobileItemSubtitle}>
							Rédaction SEO, le Carburant de Votre Ascension Digitale
						</h4>
						<p className={styles.serviceSectionMobileItemText}>
							Attirez l'attention de votre audience avec des contenus engageants
							et percutants qui transmettent votre message avec efficacité.
						</p>
					</div>
				</div>
				<div className={styles.serviceSectionMobileItem}>
					<div className={styles.serviceSectionMobileItemHeader}>
						<img
							className={styles.serviceSectionMobileItemImg}
							src="img/pin.png"
							alt=""
						/>
						<h3 className={styles.serviceSectionMobileItemTitle}>
							LOCAL BUSINESS
						</h3>
					</div>
					<div className={styles.serviceSectionMobileItemContent}>
						<h4 className={styles.serviceSectionMobileItemSubtitle}>
							Google My Business pour une Présence Locale Écrasante
						</h4>
						<p className={styles.serviceSectionMobileItemText}>
							Mettez en valeur votre entreprise sur Google Maps et attirez
							davantage de clients dans votre région.
						</p>
					</div>
				</div>
				<div className={styles.serviceSectionMobileItem}>
					<div className={styles.serviceSectionMobileItemHeader}>
						<img
							className={styles.serviceSectionMobileItemImg}
							src="img/Shine.png"
							alt=""
						/>
						<h3 className={styles.serviceSectionMobileItemTitle}>
							RÉSEAUX SOCIAUX
						</h3>
					</div>
					<div className={styles.serviceSectionMobileItemContent}>
						<h4 className={styles.serviceSectionMobileItemSubtitle}>
							Social Media : Une Stratégie qui Fait Bouillir l'Engagement
						</h4>
						<p className={styles.serviceSectionMobileItemText}>
							Maximisez votre présence sur les réseaux sociaux et interagissez
							avec votre communauté pour créer un véritable engouement autour de
							votre marque.
						</p>
					</div>
				</div>
				<div className={styles.serviceSectionMobileItem}>
					<div className={styles.serviceSectionMobileItemHeader}>
						<img
							className={styles.serviceSectionMobileItemImg}
							src="img/COLOR.png"
							alt=""
						/>
						<h3 className={styles.serviceSectionMobileItemTitle}>
							IDENTITÉ VISUELLE
						</h3>
					</div>
					<div className={styles.serviceSectionMobileItemContent}>
						<h4 className={styles.serviceSectionMobileItemSubtitle}>
							Identité Visuelle, l'Art de Vous Démarquer
						</h4>
						<p className={styles.serviceSectionMobileItemText}>
							Démarquez-vous de la concurrence avec une identité visuelle
							percutante qui reflète votre singularité.
						</p>
					</div>
				</div>
			</div> */}
			<div className={styles.serviceSectionMobile}>
				{servicesData.map((service, index) => (
					<div
						className={styles.serviceSectionMobileItem}
						ref={(el) => (refs.current[index] = el)}
						id={index}
						key={index}
					>
						<div className={styles.serviceSectionMobileItemHeader}>
							<img
								className={styles.serviceSectionMobileItemImg}
								src={service.image}
								alt=""
							/>
							<h3 className={styles.serviceSectionMobileItemTitle}>
								{service.title}
							</h3>
						</div>
						<div
							className={
								openIndex === index
									? styles.serviceSectionMobileItemContentVisible
									: styles.serviceSectionMobileItemContentHidden
							}
						>
							<h4 className={styles.serviceSectionMobileItemSubtitle}>
								{service.subtitle}
							</h4>
							<p className={styles.serviceSectionMobileItemText}>
								{service.text}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className={styles.service2Section}>
				<div className={styles.service2Card}>
					<div
						className={styles.service2CardThumbnail}
						style={{ backgroundImage: "url('./img/analytics.png')" }}
					></div>
					<div className={styles.serviceCardDescription}>
						<h4>Google Analytics, le Révélateur de Tendances</h4>
						<p>
							<br />
							Obtenez des insights précieux sur le comportement des utilisateurs
							et optimisez votre stratégie en ligne.
						</p>
					</div>
				</div>
				<div className={styles.service2Card}>
					<div
						className={styles.service2CardThumbnail}
						style={{ backgroundImage: "url('./img/frog.png')" }}
					></div>
					<div className={styles.serviceCardDescription}>
						<h4>
							Publicité qui Fait Mouche, pas une seule grenouille à l’Horizon
						</h4>
						<p>
							<br />
							Atteignez votre public cible avec des campagnes publicitaires
							ciblées et percutantes qui génèrent des résultats tangibles.
						</p>
					</div>
				</div>
				<div className={styles.service2Card}>
					<div
						className={styles.service2CardThumbnail}
						style={{ backgroundImage: "url('./img/fan.png')" }}
					></div>
					<div className={styles.serviceCardDescription}>
						<h4>
							Atteignez votre public cible avec des campagnes publicitaires
							ciblées
						</h4>
						<p>
							<br />
							Augmentez vos taux de conversion grâce à des stratégies efficaces
							qui incitent les visiteurs à passer à l'action.
						</p>
					</div>
				</div>
				<div className={styles.service2Card}>
					<div
						className={styles.service2CardThumbnail}
						style={{ backgroundImage: "url('./img/support.png')" }}
					></div>
					<div className={styles.serviceCardDescription}>
						<h4>
							Support Toujours à l'Heure du Café, Parce que chez Nous, On Ne
							Chôme Pas
						</h4>
						<p>
							<br />
							Bénéficiez d'un accompagnement personnalisé et d'une assistance
							réactive pour optimiser votre présence en ligne et atteindre vos
							objectifs.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
