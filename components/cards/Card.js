import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const MyCard = ({ children }) => {
  return (
    <Grid item xs={12} sm={10}>
      <Card>{children}</Card>
    </Grid>
  );
};

export default MyCard;
