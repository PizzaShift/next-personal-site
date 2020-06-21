import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bioText: {
    marginBottom: "1rem",
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={10}>
      <Grid container>
        <Grid item className={classes.bioText}>
          <Typography variant="h3" style={{ color: "white" }}>
            Dakota Lewallen
          </Typography>
          <Typography xs={12} style={{ color: "white" }}>
            Bringing simple solutions to your most challenging problems, from
            initial concept all the way to automated deployments and monitoring.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
