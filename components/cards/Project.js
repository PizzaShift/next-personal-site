import { Grid, Typography, CardContent } from "@material-ui/core/";
import MyCard from "./Card";

const Project = () => {
  return (
    <MyCard>
      <CardContent>
        <Typography variant={"h3"}>dnd-graphql</Typography>
        <Typography>
          GraphQL service wrapper for the Dungeons and Dragons fifth edition
          SRD.
        </Typography>
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </CardContent>
    </MyCard>
  );
};

export default Project;
