import Grid from "@material-ui/core/Grid";
import Hero from "../cards/intro";
import BlogCard from "../cards/blog";

const Content = ({ children }) => {
  return (
    <Grid container direction="row">
      <Grid item xs={1} />
      <Grid container spacing={1} xs={10} style={{ marginBottom: "60px" }}>
        <Hero />
        <BlogCard
          title={"May 30th Side Project Check-in"}
          description={
            "Need some review or want to show off? Come share your side project with everyone! "
          }
          views={400}
          reactions={64}
          comments={24}
        />
        <BlogCard
          title={"Best Tech Startup Podcasts?"}
          description={"Share your favorite startup podcasts."}
          views={55}
          reactions={6}
          comments={2}
        />
        <BlogCard
          title={
            "When starting a new project, when wouldn't you want to build in a cloud?"
          }
          description={
            "Cloud providers are great, but when might you opt for rack-mounting or similar hosting for a project?"
          }
          views={578}
          reactions={21}
          comments={17}
        />

        <BlogCard
          title={"May 21st Side Project Check-in"}
          description={
            "Need some review or want to show off? Come share your side project with everyone! "
          }
          views={400}
          reactions={64}
          comments={24}
        />
        <BlogCard
          title={"deno-diceware. A Deno Password Generator"}
          description={
            "Check out this password generator I made... With Deno. *gasp*"
          }
          views={365}
          reactions={25}
          comments={1}
        />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default Content;
