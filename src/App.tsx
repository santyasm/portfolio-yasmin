import { useEffect, useState } from "react";
import { Home } from "./components/Home";
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/Navbar";
import FontFaceObserver from "fontfaceobserver";

function App() {
  const blobityInstance = useBlobity(initialBlobityOptions);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const inter = new FontFaceObserver("Mona Sans");
    inter.load().then(() => setFontsLoaded(true));
  }, []);

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

  if (!fontsLoaded) return <div />;

  return (
    <>
      <NavBar />
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
