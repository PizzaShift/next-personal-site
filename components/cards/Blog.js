import {
  ChatBubbleOutline,
  InsertEmoticon,
  PersonOutline,
} from "@material-ui/icons/";
import { Grid, Typography, CardContent } from "@material-ui/core/";
import MyCard from "./Card";
import Stat from "../stat/Stat";

const BlogCard = ({ link, title, description, views, reactions, comments }) => {
  return (
    <MyCard>
      <CardContent>
        <a href={link}>
          <Typography variant={"h3"}>{title}</Typography>
        </a>
        <Typography style={{ marginBottom: "0.5em" }}>{description}</Typography>
        <Grid container>
          <Stat Icon={PersonOutline} number={views} type="Views" />
          <Stat Icon={InsertEmoticon} number={reactions} type="Reactions" />
          <Stat Icon={ChatBubbleOutline} number={comments} type={"Comments"} />
        </Grid>
      </CardContent>
    </MyCard>
  );
};

export default BlogCard;
