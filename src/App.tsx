import { useEffect } from "react";
import { Home } from "./components/Home";
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet";

function App() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <>
        <Helmet>
        <title>Yasmin Santana — Frontend & Mobile Developer</title>
        <meta
          name="description"
          content="Desenvolvedora Front End e Mobile. Focada em interfaces e experiências."
        />
        <meta name="keywords" content="freelance, developer, frontend, react, frontend developer portfolio, mobile developer, mobile" />
        <meta name="application-name" content="Yasmin Santana" />
        <meta name="robots" content="index, follow" />
        <meta name="color-scheme" content="dark" />

        {/* Open Graph */}
        <meta property="og:title" content="Yasmin Santana — Frontend & Mobile Developer" />
        <meta property="og:description" content="Desenvolvedora Front End e Mobile. Focada em interfaces e experiências." />
        <meta property="og:url" content="https://www.yasminsantana.me/" />
        <meta property="og:site_name" content="www.yasminsantana.me" />
        <meta property="og:image" content="https://raw.githubusercontent.com/santyasm/portfolio-yasmin/main/public/yasmin.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
