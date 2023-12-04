import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="fr">
				<Head>
					<link rel="icon" href="/favicon.svg" />
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=G-PVT1JWP13W`}
						strategy="afterInteractive"
					/>
					<Script strategy="afterInteractive">
						{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PVT1JWP13W');
            `}
					</Script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
