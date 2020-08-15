import { NextSeo } from "next-seo";
import Certs from "../components/cards/Certs";
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
      <Certs />
    </Root>
  </>
);

export default App;
