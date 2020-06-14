import {
  ChatBubbleOutline,
  InsertEmoticon,
  PersonOutline,
} from "@material-ui/icons/";
import { Grid, Typography, CardContent } from "@material-ui/core/";
import MyCard from "./Card";

const BlogCard = ({ title, description, views, reactions, comments }) => {
  return (
    <MyCard>
      <CardContent>
        <Typography variant={"h3"}>{title}</Typography>
        <Typography style={{ marginBottom: "0.5em" }}>{description}</Typography>
        <Grid container>
          <Grid item xs={12} lg={3} style={{ display: "flex" }}>
            <PersonOutline style={{ marginRight: "0.5rem" }} />
            <Typography>{views} Views</Typography>
          </Grid>
          <Grid item xs={12} lg={3} style={{ display: "flex" }}>
            <InsertEmoticon style={{ marginRight: "0.5rem" }} />
            <Typography>{reactions} Reactions</Typography>
          </Grid>
          <Grid item xs={12} lg={3} style={{ display: "flex" }}>
            <ChatBubbleOutline style={{ marginRight: "0.5rem" }} />
            <Typography>{comments} Comments</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </MyCard>
  );
};

export default BlogCard;
