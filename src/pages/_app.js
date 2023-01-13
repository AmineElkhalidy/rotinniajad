import "@/styles/globals.css";

// Layout
import { Layout } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
