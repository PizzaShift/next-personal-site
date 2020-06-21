import { Grid, Typography, CardContent, Button } from "@material-ui/core/";
import MyCard from "./Card";

const Cert = () => {
  return (
    <>
      <MyCard>
        <CardContent>
          <Typography
            variant={"h3"}
            style={{
              wordBreak: "break-word",
              hyphens: "manual",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Certified Cloud Practitioner
          </Typography>
          <Typography>Issued: February 2020</Typography>
          <a
            style={{ textDecorationColor: "white", color: "white" }}
            href="https://www.youracclaim.com/badges/040beb89-0d89-462e-83a3-0029544cc863/public_url"
          >
            <Button
              variant="contained"
              style={{
                textTransform: "none",
                backgroundColor: "#0073E6",
                color: "white",
                marginTop: "0.5rem",
              }}
            >
              <Typography>Badge</Typography>
            </Button>
          </a>
        </CardContent>
      </MyCard>
      <MyCard>
        <CardContent>
          <Typography
            variant={"h3"}
            style={{
              wordBreak: "break-word",
              hyphens: "manual",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Neo4J Certified Professional
          </Typography>
          <Typography>Issued: April 2020</Typography>
          <a
            style={{ textDecorationColor: "white", color: "white" }}
            href="https://graphacademy.neo4j.com/certificates/362a1440003ee5e6f6aa98d7bae0849b8b7811ee58714d0ec83d598f3e82ef40.pdf"
          >
            <Button
              variant="contained"
              style={{
                textTransform: "none",
                backgroundColor: "#0073E6",
                color: "white",
                marginTop: "0.5rem",
              }}
            >
              <Typography>Badge</Typography>
            </Button>
          </a>
        </CardContent>
      </MyCard>
    </>
  );
};

export default Cert;
