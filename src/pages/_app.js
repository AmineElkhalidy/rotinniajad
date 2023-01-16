import "@/styles/globals.css";

// Head
import Head from "next/head";

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

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
