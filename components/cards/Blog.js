import Link from "next/link";
import {
  ChatBubbleOutline,
  InsertEmoticon,
  PersonOutline,
} from "@material-ui/icons/";
import { Grid, Typography, CardContent, makeStyles } from "@material-ui/core/";
import MyCard from "./Card";
import Stat from "../stat/Stat";

const useStyles = makeStyles({
  hover: {
    "&:hover": { textDecoration: "underline" },
  },
});

const BlogCard = ({ link, title, description, views, reactions, comments }) => {
  const classes = useStyles();
  return (
    <MyCard>
      <CardContent>
        <Link href={link}>
          <a className={classes.hover}>
            <Typography
              variant={"h3"}
              style={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              {title}
            </Typography>
          </a>
        </Link>
        <Typography style={{ marginBottom: "0.5em" }}>{description}</Typography>
      </CardContent>
    </MyCard>
  );
};

export default BlogCard;
