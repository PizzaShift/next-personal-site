import Head from "next/head";
import dynamic from "next/dynamic";
import Button from "@material-ui/core/Button";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const DynamicSnakeLoad = dynamic(() => import("../components/snake/snake"), {
  ssr: false,
});

import Content from "../components/content/Content";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Head>
            <title>Dakota Lewallen</title>
          </Head>
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
          <Content />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
