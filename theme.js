import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#c4c4c4",
    },
  },
  status: {
    danger: "orange",
  },
});

export default theme;
