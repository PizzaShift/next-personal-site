import { Grid, Typography, CardContent, TextField } from "@material-ui/core/";
import MyCard from "./card";

const Contact = () => (
  <MyCard>
    <Grid container direction="column">
      <Typography style={{ marginLeft: "1rem" }} variant="h3">
        Contact
      </Typography>
      <Typography style={{ marginLeft: "1rem" }}>
        If you would like to contact me but don't have social media, feel free
        to leave your info and a message below.
      </Typography>
      <div style={{ padding: "1rem" }}>
        <Grid item xs={12}>
          <TextField
            required
            label="Name"
            variant="filled"
            style={{ width: "100%" }}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Email"
            variant="filled"
            style={{ width: "100%" }}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Message"
            variant="filled"
            multiline
            rows={3}
            size={"medium"}
            style={{ width: "100%" }}
          ></TextField>
        </Grid>
      </div>
    </Grid>
  </MyCard>
);

export default Contact;
