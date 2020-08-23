import { NextSeo } from "next-seo";
import Root from "../components/root";
import BlogWrapper from "../components/wrappers/BlogWrapper";
import Hero from "../components/cards/Hero";

const App = (props) => (
  <Root navLocation="/blog">
    <NextSeo
      title="Dakota Lewallen - Blog"
      description="Dakota Lewallens Blog"
      twitter={{
        handle: "@fastflowz",
        site: "@fastflowz",
        cardType: "summary",
      }}
    />
    <Hero
      title="Blog"
      description="All the places that I like to share my thoughts."
    />
    <BlogWrapper {...props} />
  </Root>
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
