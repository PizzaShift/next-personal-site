import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bioText: {
    marginBottom: "1rem",
  },
}));

const Hero = ({ title, description }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={10}>
      <Grid container>
        <Grid item className={classes.bioText}>
          <Typography variant="h3" style={{ color: "white" }}>
            {title}
          </Typography>
          <Typography xs={12} style={{ color: "white" }}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
