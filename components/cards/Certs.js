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
            href="https://amazonaws.com"
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
            href="https://amazonaws.com"
          >
            <Typography>Badge</Typography>
          </a>
        </CardContent>
      </MyCard>
    </>
  );
};

export default Cert;
