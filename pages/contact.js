import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Contact from "../components/cards/Contact";

const DynamicSnakeLoad = dynamic(() => import("../components/snake/Snake"), {
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
          <Content navValue="contact">
            <Contact />
          </Content>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
