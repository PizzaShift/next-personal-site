import { useState } from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core/";
import SendIcon from "@material-ui/icons/Send";
import MyCard from "./Card";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "msg":
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
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
              id="name"
              required
              label="Name"
              variant="filled"
              style={{ width: "100%" }}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              required
              label="Email"
              variant="filled"
              style={{ width: "100%" }}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="msg"
              required
              label="Message"
              variant="filled"
              multiline
              rows={3}
              size={"medium"}
              style={{ width: "100%" }}
              onChange={handleChange}
            ></TextField>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "1rem" }}
              onClick={() => {}}
            >
              Submit <SendIcon style={{ marginLeft: "0.5rem" }} />
            </Button>
          </Grid>
        </div>
      </Grid>
    </MyCard>
  );
};

export default Contact;
