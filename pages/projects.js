import { NextSeo } from "next-seo";
import Root from "../components/root";
import Hero from "../components/cards/Hero";
import ProjectWrapper from "../components/wrappers/ProjectWrapper";

const App = (props) => (
  <>
    <NextSeo
      title="Dakota Lewallen - Projects"
      description="Dakota Lewallens Projects Page"
      twitter={{
        handle: "@fastflowz",
        site: "@fastflowz",
        cardType: "summary",
      }}
    />
    <Root navLocation="/projects">
      <Hero
        title={"Projects"}
        description={"Everything I've built in the last couple of years."}
      />
      <ProjectWrapper {...props} />
    </Root>
  </>
);

export async function getStaticProps(context) {
  const resp = await fetch("https://api.github.com/users/iamflowz/repos", {
    headers: { Accept: "application/vnd.github.v3+json" },
  });
  const data = await resp.json();
  return {
    props: { data },
  };
}

export default App;
