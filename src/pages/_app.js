import "@/styles/globals.css";

// Head
import Head from "next/head";
import Script from "next/script";

// Layout
import { Layout } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Rotin Niajad est le meilleur endroit pour acheter des meubles de maison, les produits que nous avons sont de bonne qualité et leurs prix sont négociables"
        />
        <link rel="icon" type="image/svg+xml" href="./couch.svg" />
      </Head>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WHDWB1486G"
      ></Script>

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WHDWB1486G', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
