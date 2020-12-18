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
  //delete this
  console.log(data);
  const classes = useStyles();
  return (
    <>
      <NextSeo
        title="Dakota Lewallen - Reading List"
        description="Dakota Lewallen's Reading List"
        twitter={{
          handle: "@therealdakotal",
          site: "@therealdakotal",
          cardType: "summary",
        }}
      />
      <Root navLocation="/reading-list">
        <Hero
          title={"Reading List"}
          description={"The stuff I'm digging into"}
        />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple-table">
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Author/Creator</TableCell>
                <TableCell>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.Type}
                  </TableCell>
                  <TableCell>{row.Name}</TableCell>
                  <TableCell>{row.Status}</TableCell>
                  <TableCell>{row.Score ?? "-"}/5</TableCell>
                  <TableCell>{row.Author}</TableCell>
                  <TableCell>
                    <a href={row.Link}>{row.Link}</a>
                  </TableCell>
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
  const location = `${process.env.STRAPI_URL}/reading-lists`;
  const resp = await fetch(location, {
    headers: { Accept: "application/json" },
  });
  const data = await resp.json();
  return {
    props: { data },
  };
}

export default App;
