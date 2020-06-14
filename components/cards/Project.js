import { Grid, Typography, CardContent } from "@material-ui/core/";
import { Search, StarOutlined, CallSplit } from "@material-ui/icons/";
import MyCard from "./Card";
import Stat from "../stat/Stat";

const Project = ({ title, description }) => {
  return (
    <MyCard>
      <CardContent>
        <Typography variant={"h3"}>{title}</Typography>
        <Typography style={{ marginBottom: "0.5em" }}>{description}</Typography>
        <Grid container>
          <Stat Icon={Search} number={5} type="Watchers" />
          <Stat Icon={StarOutlined} number={6} type="Stars" />
          <Stat Icon={CallSplit} number={0} type="Forks" />
        </Grid>
      </CardContent>
    </MyCard>
  );
};

export default Project;
