import Contact from "../components/cards/Contact";
import Hero from "../components/cards/Hero";
import Root from "../components/root";

const App = () => (
  <Root navLocation="/contact">
    <Hero
      title={"Contact"}
      description={
        "If you would like to contact me but don't have social media, feel free to leave your info and a message below."
      }
    />
    <Contact />
  </Root>
);

export default App;
