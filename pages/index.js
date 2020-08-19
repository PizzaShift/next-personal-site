import { NextSeo } from "next-seo";
import { Typography } from "@material-ui/core";
import Root from "../components/root";
import Hero from "../components/cards/Hero";
import { makeStyles } from "@material-ui/core/styles";

const App = (props) => (
  <>
    <NextSeo
      title="Dakota Lewallen - Home"
      description="Dakota Lewallens Home Page"
      twitter={{
        handle: "@fastflowz",
        site: "@fastflowz",
        cardType: "summary",
      }}
    />
    <Root navLocation="/">
      <Hero
        title={"Dakota Lewallen"}
        description={
          "Indie Hacker. Open source developer. Lover of food, family and games."
        }
      />
      <Typography style={{ color: "white" }}>
        Hi 👋️! If you haven't noticed, I'm Dakota. The mind behind this and
        many other projects.
      </Typography>
    </Root>
  </>
);

export async function getStaticProps(context) {
  const results = await fetch("https://dev.to/api/articles/me/published", {
    headers: {
      "api-key": process.env.DEV_TO_KEY,
    },
  });
  const data = await results.json();
  return {
    props: { data },
  };
}
export default App;
