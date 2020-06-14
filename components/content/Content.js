import Grid from "@material-ui/core/Grid";
import Hero from "../cards/Hero";
import BlogWrapper from "../wrappers/BlogWrapper";
import ProjectWrapper from "../wrappers/ProjectWrapper";
import Contact from "../cards/Contact";
import Cert from "../cards/Certs";

const navs = {
  blog: <BlogWrapper />,
  contact: <Contact />,
  certifications: <Cert />,
  projects: <ProjectWrapper />,
};

const Content = ({ children, navValue }) => {
  console.log(navValue);
  return (
    <Grid container direction="row">
      <Grid item xs={1} sm={2} />
      <Grid container spacing={1} xs={10} style={{ marginBottom: "60px" }}>
        <Hero />
        {navs[navValue]}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default Content;
