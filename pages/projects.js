import Root from "../components/root";
import ProjectWrapper from "../components/wrappers/ProjectWrapper";

const App = (props) => (
  <Root navLocation="/projects">
    <ProjectWrapper {...props} />
  </Root>
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
