import Paper from "@material-ui/core/Paper";
import { Grid, Typography, CardContent, makeStyles } from "@material-ui/core/";
import { NextSeo } from "next-seo";
import Root from "../../components/root";
import Hero from "../../components/cards/Hero";

const Page = ({ data }) => {
  return (
    <Root navLocation="/blog">
      <NextSeo
        title={data.Title}
        description={data.Description}
        twitter={{
          handle: "@fastflowz",
          site: "@fastflowz",
          cardType: "summary",
        }}
      />
      <Paper>
        <Hero title={data.Title} description={data.Description} />
        <Typography>{data.Body}</Typography>
      </Paper>
    </Root>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      "/blog/1",
      "/blog/2",
      "/blog/3",
      "/blog/4",
      "/blog/5",
      "/blog/6",
      "/blog/7",
      "/blog/8",
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const location = `${process.env.STRAPI_URL}/blogs/${context.params.id}`;
  const resp = await fetch(location, {
    headers: { Accept: "application/json" },
  });
  const data = await resp.json();
  return {
    props: { data },
  };
}

export default Page;
