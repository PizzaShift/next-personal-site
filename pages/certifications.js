import { NextSeo } from "next-seo";
import Certs from "../components/cards/Certs";
import Hero from "../components/cards/Hero";
import Root from "../components/root";

const App = () => (
  <>
    <NextSeo
      title="Dakota Lewallen - Certifications"
      description="Dakota Lewallens Certifications Page"
      twitter={{
        handle: "@fastflowz",
        site: "@fastflowz",
        cardType: "summary",
      }}
    />
    <Root navLocation="/certifications">
      <Hero title={"Certifications"} description={"The pieces of paper."} />
      <Certs />
    </Root>
  </>
);

export default App;
