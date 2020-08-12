import Grid from "@material-ui/core/Grid";
import dynamic from "next/dynamic";
import Hero from "../cards/Hero";
import Snake from "../snake/Snake";

const DynamicSnakeLoad = dynamic(() => import("../snake/Snake"), {
  ssr: false,
});

const Content = ({ children, navValue }) => {
  return (
    <Grid container direction="row">
      {/* <span
        style={{
          width: "10px",
          height: "100vh",
          backgroundColor: "white",
          position: "absolute",
          left: "50%",
        }}
      ></span> */}
      {/* <Grid item xs={1} sm={2} /> */}
      <Grid
        item
        container
        spacing={1}
        xs={12}
        sm={6}
        style={{ marginBottom: "60px", justifyContent: "center" }}
      >
        {children}
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        // sm={2}
        id="gameContainer"
        tabIndex="0"
        style={{
          width: "50vw",
          height: "100%",
        }}
      >
        <DynamicSnakeLoad />
      </Grid>
      {/* <Grid item xs={1} /> */}
    </Grid>
  );
};

export default Content;
