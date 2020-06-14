import Grid from "@material-ui/core/Grid";
import Hero from "../cards/Hero";

const Content = ({ children, navValue }) => {
  console.log(navValue);
  return (
    <Grid container direction="row">
      <Grid item xs={1} sm={2} />
      <Grid item container spacing={1} xs={10} style={{ marginBottom: "60px" }}>
        <Hero />
        {children}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default Content;
