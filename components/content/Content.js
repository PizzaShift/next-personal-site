import Grid from "@material-ui/core/Grid";

const Content = ({ children, navValue }) => {
  return (
    <Grid container direction="row">
      <Grid item xs={1}></Grid>
      <Grid
        item
        container
        spacing={1}
        xs={10}
        style={{ marginBottom: "60px", justifyContent: "center" }}
      >
        {children}
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Content;
