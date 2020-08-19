import { Typography, Grid } from "@material-ui/core";
import Root from "../components/root";
import Hero from "../components/cards/Hero";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bioText: {
    marginBottom: "0",
  },
}));

const App = (props) => {
  const classes = useStyles();
  return (
    <>
      <Root navLocation="/">
        <Hero
          title={"Dakota Lewallen"}
          description={
            "Indie Hacker. Open source developer. Lover of food, family and games."
          }
        />
        <Typography style={{ color: "white" }}>
          Hi 👋️! If you haven't noticed, I'm Dakota. The mind behind this and
          many other projects.
        </Typography>
      </Root>
    </>
  );
};

export default App;
