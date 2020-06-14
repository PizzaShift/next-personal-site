import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bioText: {
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={10}>
      <Card>
        <CardContent>
          <Grid container>
            {/* <img alt="my bust"></img> */}
            <Grid item>
              <span
                style={{
                  height: "10rem",
                  width: "10rem",
                  backgroundColor: "black",
                  display: "inline-block",
                  borderRadius: "1rem",
                  alignSelf: "center",
                  justifySelf: "center",
                }}
              ></span>
            </Grid>
            <Grid item className={classes.bioText}>
              <Typography variant="h3">Dakota Lewallen</Typography>
              <Typography xs={12}>
                Bringing simple solutions to your most challenging problems,
                from initial concept all the way to automated deployments and
                monitoring.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Hero;
