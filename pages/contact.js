import { NextSeo } from "next-seo";
import Contact from "../components/cards/Contact";
import Root from "../components/root";

const App = () => (
  <>
    <NextSeo
      title="Dakota Lewallen - Contact"
      description="Dakota Lewallens Contact Page"
      twitter={{
        handle: "@fastflowz",
        site: "@fastflowz",
        cardType: "summary",
      }}
    />
    <Root navLocation="/contact">
      <Contact />
    </Root>
  </>
);

export default App;
