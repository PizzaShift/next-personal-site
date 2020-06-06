import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  overrides: {
    MuiBottomNavigation: {
      width: "50%",
      height: 200,
    },
  },
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
