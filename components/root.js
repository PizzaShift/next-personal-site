import Head from "next/head";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

import Content from "../components/content/Content";

const App = ({ children, navLocation }) => {
  console.log(navLocation);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout navValue={navLocation}>
          {/* <DynamicSnakeLoad /> */}
          {/* <span
            style={{
              width: "10px",
              height: "100vh",
              backgroundColor: "white",
              position: "absolute",
              left: "50%",
            }}
          ></span> */}
          <Content>{children}</Content>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
