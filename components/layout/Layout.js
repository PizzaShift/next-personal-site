import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import styles from "./layout.module.css";
import Logo from "./Logo32.svg";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      {/* <div style={}></div> */}
      {props.children}
      {/* <div
        style={{
          position: "absolute",
          width: "50%",
          position: "absolute",
          backgroundColor: "#424242",
          bottom: 0,
          height: "56px",
        }}
      ></div> */}
      <footer
        style={{
          width: "100%",
          position: "absolute",
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
