import { Grid, Typography } from "@material-ui/core/";

const Stat = ({ Icon, number, type }) => {
  return (
    <Grid item xs={12} lg={3} style={{ display: "flex" }}>
      <Icon style={{ marginRight: "0.5rem" }} />
      <Typography>
        {number} {type}
      </Typography>
    </Grid>
  );
};

export default Stat;
