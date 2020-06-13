import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import styles from "./layout.module.css";
import Logo from "./Logo32.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    position: "fixed",
    top: 0,
    [theme.breakpoints.down("sm")]: {
      top: "unset",
      bottom: 0,
    },
  },
  topContainer: {
    display: "flex",
    marginTop: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.topContainer}>
      {props.children}
      <footer className={classes.footer}>
        <BottomNavigation value="test" showLabels>
          <BottomNavigationAction label="Blog" value="blog" />
          <BottomNavigationAction label="Projects" value="projects" />
          <BottomNavigationAction
            label="Certifications"
            value="certifications"
          />
          <BottomNavigationAction label="Contact" value="contact" />
          <Logo
            style={{ position: "absolute", right: "5px", bottom: "10px" }}
          />
        </BottomNavigation>
      </footer>
    </div>
  );
};

export default Layout;
