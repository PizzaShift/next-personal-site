import { Grid, Typography, CardContent } from "@material-ui/core/";
import { Search, StarOutlined, CallSplit } from "@material-ui/icons/";
import MyCard from "./Card";
import Stat from "../stat/Stat";

const Project = ({ link, title, description, watchers, stars, forks }) => {
  return (
    <MyCard>
      <CardContent>
        <a href={link}>
          <Typography
            variant={"h3"}
            style={{ wordBreak: "break-word", hyphens: "auto" }}
          >
            {title}
          </Typography>
        </a>
        <Typography style={{ marginBottom: "0.5em" }}>{description}</Typography>
        <Grid container>
          <Stat Icon={Search} number={watchers} type="Watchers" />
          <Stat Icon={StarOutlined} number={stars} type="Stars" />
          <Stat Icon={CallSplit} number={forks} type="Forks" />
        </Grid>
      </CardContent>
    </MyCard>
  );
};

export default Project;
