import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MyCard from "./card";

const Hero = () => (
  <MyCard>
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
        I’m here to bring simple solutions to your most challenging problems.
        From initial concept all the way to automated deployments and
        monitoring.{" "}
      </Typography>
    </CardContent>
  </MyCard>
);

export default Hero;
