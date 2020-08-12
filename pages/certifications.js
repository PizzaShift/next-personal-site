import Certs from "../components/cards/Certs";
import Hero from "../components/cards/Hero";
import Root from "../components/root";

const App = () => (
  <Root navLocation="/certifications">
    <Hero title={"Certifications"} description={"The pieces of paper."} />
    <Certs />
  </Root>
);

export default App;
