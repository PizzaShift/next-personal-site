import Root from "../components/root";
import BlogWrapper from "../components/wrappers/BlogWrapper";

const App = (props) => (
  <Root navLocation="/">
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
