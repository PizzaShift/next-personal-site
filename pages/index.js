import Head from "next/head";
import dynamic from "next/dynamic";
import Button from "@material-ui/core/Button";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const DynamicSnakeLoad = dynamic(() => import("../components/snake/snake"), {
  ssr: false,
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Head>
            <title>Dakota Lewallen</title>
          </Head>
          <DynamicSnakeLoad />
          <span></span>
          <section
            style={{
              width: "50%",
              height: "100vh",
              position: "absolute",
              left: "50%",
            }}
          ></section>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
