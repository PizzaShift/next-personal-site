import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { Typography, Grid } from "@material-ui/core";
import Root from "../components/root";
import Hero from "../components/cards/Hero";
import Layout from "../components/layout/Layout";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

import theme from "../theme";

const DynamicSnakeLoad = dynamic(() => import("../components/snake/Snake"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  summary: {
    color: "white",
    fontSize: "1.75rem",
  },
  paragraph: {
    color: "white",
  },
}));

const App = (props) => {
  const classes = useStyles();
  return (
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
      <ThemeProvider theme={theme}>
        <Layout navValue="/">
          <Grid container direction="row">
            <Grid item xs={1}></Grid>
            <Grid
              item
              container
              spacing={1}
              xs={10}
              style={{ marginBottom: "60px", justifyContent: "center" }}
            >
              <Hero
                title={"Dakota Lewallen"}
                description={
                  "Indie Hacker. Open source developer. Lover of food, family and games."
                }
              />
              <Grid item container direction="row" xs={12} sm={5}>
                <Grid item xs={12}>
                  <Typography style={{ color: "white" }}>
                    Hi 👋️! If you hadn't noticed, I'm Dakota. The mind behind
                    this and many other projects. This, is my little corner of
                    the internet. My eventual goal for this site is to be able
                    to publish and share everything interesting I find around
                    here. Whether that be books, articles, videos, music. You
                    name it. I love seeing the amount of passion people put into
                    their work, and aspire to be able to give just a little bit
                    back to them. If you would like to see my progress, I
                    maintain a kanban board for this project{" "}
                    <a
                      style={{ textDecoration: "underline" }}
                      href="https://github.com/IamFlowZ/next-personal-site/projects/1"
                    >
                      here in the projects repository.
                    </a>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2" style={{ color: "white" }}>
                    About
                  </Typography>
                  <details>
                    <summary className={classes.summary}>Home</summary>
                    <Typography className={classes.paragraph}>
                      This landing page
                    </Typography>
                  </details>
                  <details>
                    <summary className={classes.summary}>Blog</summary>
                    <Typography className={classes.paragraph}>
                      My latest posts to dev.to
                    </Typography>
                  </details>
                  <details>
                    <summary className={classes.summary}>Projects</summary>
                    <Typography className={classes.paragraph}>
                      My github projects list
                    </Typography>
                  </details>
                  <details>
                    <summary className={classes.summary}>
                      Certifications
                    </summary>
                    <Typography className={classes.paragraph}>
                      Links to my certifications
                    </Typography>
                  </details>
                  <details>
                    <summary className={classes.summary}>Contact</summary>
                    <Typography className={classes.paragraph}>
                      A contact form
                    </Typography>
                  </details>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={5} id="gameContainer" tabIndex="0">
                <DynamicSnakeLoad />
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
