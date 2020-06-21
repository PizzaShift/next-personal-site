import Link from "next/link";
import Router from "next/router";
import { Link as LinkText, Grid } from "@material-ui/core";
import Logo from "./Logo32.svg";
import { makeStyles } from "@material-ui/core/styles";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    position: "fixed",
    top: 0,
    [theme.breakpoints.down("sm")]: {
      top: "unset",
      bottom: 0,
    },
    zIndex: 999,
  },
  topContainer: {
    display: "flex",
    marginTop: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  },
  links: {
    alignSelf: "center",
    marginRight: "2rem",
    cursor: "pointer",
    marginTop: "0.25rem",
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const { navValue } = props;
  console.log(navValue);
  return (
    <div className={classes.topContainer}>
      {props.children}
      <footer className={classes.footer}>
        <Grid
          container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#424242",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          }}
        >
          <Grid item xs={1} sm={3} />
          <Grid item>
            <Link href="/">
              <LinkText
                className={classes.links}
                style={
                  navValue === "/"
                    ? {
                        textDecoration: "underline",
                        textDecorationColor: "DodgerBlue",
                        fontSize: "large",
                      }
                    : {}
                }
              >
                Blog
              </LinkText>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/projects">
              <LinkText
                className={classes.links}
                style={
                  navValue === "/projects"
                    ? {
                        textDecoration: "underline",
                        textDecorationColor: "DodgerBlue",
                        fontSize: "large",
                      }
                    : {}
                }
              >
                Projects
              </LinkText>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/certifications">
              <LinkText
                className={classes.links}
                style={
                  navValue === "/certifications"
                    ? {
                        textDecoration: "underline",
                        textDecorationColor: "DodgerBlue",
                        fontSize: "large",
                      }
                    : {}
                }
              >
                Certifications
              </LinkText>
            </Link>
          </Grid>

          <Grid item>
            <Link href="/contact">
              <LinkText
                className={classes.links}
                style={
                  navValue === "/contact"
                    ? {
                        textDecoration: "underline",
                        textDecorationColor: "DodgerBlue",
                        fontSize: "large",
                        marginRight: 0,
                      }
                    : { marginRight: 0 }
                }
              >
                Contact
              </LinkText>
            </Link>
          </Grid>
          <Grid item xs={1} sm={3} />
          <Grid item>
            <Logo style={{ paddingTop: "0.25rem" }} />
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default Layout;
