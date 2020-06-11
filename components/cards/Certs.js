import { Grid, Typography, CardContent } from "@material-ui/core/";
import MyCard from "./Card";

const Cert = () => {
  return (
    <>
      <MyCard>
        <CardContent>
          <Typography
            variant={"h3"}
            style={{ wordBreak: "break-word", hyphens: "manual" }}
          >
            Certified Cloud Practitioner
          </Typography>
          <Typography>Issued: February 2020</Typography>
          <a
            style={{ textDecorationColor: "white", color: "white" }}
            href="https://www.youracclaim.com/badges/040beb89-0d89-462e-83a3-0029544cc863/public_url"
          >
            <Typography>Badge</Typography>
          </a>
        </CardContent>
      </MyCard>
      <MyCard>
        <CardContent>
          <Typography
            variant={"h3"}
            style={{ wordBreak: "break-word", hyphens: "manual" }}
          >
            Neo4J Certified Professional
          </Typography>
          <Typography>Issued: April 2020</Typography>
          <a
            style={{ textDecorationColor: "white", color: "white" }}
            href="https://graphacademy.neo4j.com/certificates/362a1440003ee5e6f6aa98d7bae0849b8b7811ee58714d0ec83d598f3e82ef40.pdf"
          >
            <Typography>Badge</Typography>
          </a>
        </CardContent>
      </MyCard>
    </>
  );
};

export default Cert;
