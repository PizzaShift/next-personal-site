import { NextSeo } from "next-seo";
import Root from "../components/root";
import Hero from "../components/cards/Hero";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const App = ({ data }) => {
  console.log(data);
  const classes = useStyles();
  return (
    <>
      <NextSeo
        title="Dakota Lewallen - Uses Page"
        description="Dakota Lewallen's list of the tech he uses."
        twitter={{
          handle: "@therealdakotal",
          site: "@therealdakotal",
          cardType: "summary",
        }}
      />
      <Root navLocation="/uses">
        <Hero title={"Uses"} description={"My Tech related stuff"} />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple-table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Tags</TableCell>
                <TableCell>Links</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.Name}
                  </TableCell>
                  <TableCell>
                    {row.Tags.reduce((coll, curr) => `${coll}, ${curr}`)}
                  </TableCell>
                  <TableCell>{row.Links ?? ""}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Root>
    </>
  );
};

export async function getStaticProps(context) {
  const location = `${process.env.STRAPI_URL}/uses`;
  console.log(location);
  const resp = await fetch(location, {
    headers: { Accept: "application/json" },
  });
  const data = await resp.json();
  return {
    props: { data },
  };
}

export default App;
