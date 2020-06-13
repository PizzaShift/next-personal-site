import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Hero = () => (
  <Grid item xs={10}>
    <Card>
      <CardContent>
        {/* <img alt="my bust"></img> */}
        <span
          style={{
            height: "10rem",
            width: "10rem",
            backgroundColor: "black",
            display: "inline-block",
            borderRadius: "1rem",
          }}
        ></span>
        <Typography>Hi, I'm Dakota Lewallen.</Typography>
        <Typography>
          I’m here to bring simple solutions to your most challenging problems,
          from initial concept all the way to automated deployments and
          monitoring.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default Hero;
