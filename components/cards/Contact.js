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
              style={{
                marginTop: "1rem",
                backgroundColor: "#0073E6",
                color: "white",
              }}
              onClick={() => {
                fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name,
                    email,
                    message,
                  }),
                });
              }}
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
