import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  test: {
    width: "100%",
  },
}));

const MyCard = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid item xs={10}>
      <Card>{children}</Card>
    </Grid>
  );
};

export default MyCard;
