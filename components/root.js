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
          <Head>
            <title>Dakota Lewallen</title>
            <html lang="en" />
          </Head>
          <Content>{children}</Content>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
