import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import styles from "./layout.module.css";
import Logo from "./Logo32.svg";

const Layout = (props) => {
  return (
    <div
      className={styles.container}
      style={{ display: "flex", marginTop: "2rem" }}
    >
      {props.children}
      <footer
        style={{
          width: "100%",
          position: "fixed",
          // left: "50vw",
          bottom: 0,
        }}
      >
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
