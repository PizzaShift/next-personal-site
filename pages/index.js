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
            "Bringing simple solutions to your most challenging problems, from initial concept all the way to automated deployments and monitoring."
          }
        />
        <div style={{ color: "white" }}>Put something interesting here.</div>
      </Root>
    </>
  );
};

export default App;
