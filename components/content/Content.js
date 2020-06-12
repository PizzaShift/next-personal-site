import Grid from "@material-ui/core/Grid";
import Hero from "../cards/intro";
import BlogCard from "../cards/blog";

const Content = ({ children }) => {
  return (
    <Grid container direction="row">
      <Grid item xs={1} />
      <Grid container spacing={1} xs={10}>
        <Hero />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default Content;
