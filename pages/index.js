import { NextSeo } from "next-seo";
import { Typography, Grid } from "@material-ui/core";
import Hero from "../components/cards/Hero";
import Layout from "../components/layout/Layout";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Twitter, LinkedIn } from "@material-ui/icons";
// Icons are the property of their respective companies.
import Twitch from "../public/TwitchGlitchWhite.svg";
import Discord from "../public/Discord-Logo-White.svg";

import theme from "../theme";

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
          handle: "@therealdakotal",
          site: "@therealdakotal",
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
              <Grid item container direction="row" xs={12} sm={10}>
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
                <Grid
                  item
                  container
                  xs={12}
                  sm={6}
                  style={{ marginTop: "3rem" }}
                >
                  <Typography variant="h3" className="white-font">
                    Find me on:
                  </Typography>
                  <Grid container>
                    <Grid item xs={12} sm={6} className="white-font">
                      <a
                        href="https://twitter.com/therealdakotal/"
                        className="logo-links"
                      >
                        <Twitter fontSize="large" className="icon-space" />{" "}
                        therealdakotal
                      </a>
                    </Grid>
                    <Grid item xs={12} sm={6} className="white-font">
                      <a
                        href="https://twitch.tv/iamflowz"
                        className="logo-links"
                      >
                        <Twitch className="icon-size icon-space" />
                        iamflowz
                      </a>
                    </Grid>
                    <Grid item xs={12} sm={6} className="white-font">
                      <a
                        href="https://linkedin.com/in/dakota-lewallen/"
                        className="logo-links"
                      >
                        <LinkedIn fontSize="large" className="icon-space" />{" "}
                        Dakota Lewallen
                      </a>
                    </Grid>
                    <Grid item xs={12} sm={6} className="white-font">
                      <div className="logo-links">
                        <Discord className="icon-size icon-space" style={{}} />
                        FlowZ #1712
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginTop: "3rem" }}>
                  <Typography
                    variant="h3"
                    className="white-font"
                    style={{ color: "white" }}
                  >
                    About
                  </Typography>
                  <details>
                    <summary className={classes.summary}>Home</summary>
                    <Typography className={classes.paragraph}>
                      This landing page.
                    </Typography>
                  </details>
                  <details>
                    <summary className={classes.summary}>Blog</summary>
                    <Typography className={classes.paragraph}>
                      My latest posts to dev.to.
                    </Typography>
                  </details>
                  <details>
                    <summary className={classes.summary}>Projects</summary>
                    <Typography className={classes.paragraph}>
                      A list of my github repositories.
                    </Typography>
                  </details>
                  <details>
                    <summary className={classes.summary}>
                      Certifications
                    </summary>
                    <Typography className={classes.paragraph}>
                      A collection of links to my certifications.
                    </Typography>
                  </details>
                  <details>
                    <summary className={classes.summary}>Contact</summary>
                    <Typography className={classes.paragraph}>
                      My contact form.
                    </Typography>
                  </details>
                </Grid>
              </Grid>
              {/* <Grid item xs={12} sm={5} id="gameContainer" tabIndex="0">
                <DynamicSnakeLoad />
              </Grid> */}
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
