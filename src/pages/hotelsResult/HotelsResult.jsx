import { Container, Grid } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ResultsListContainer from "../../components/ResultsListContainer";
import ResultsSearchBox from "../../components/ResultsSearchBox";

const HotelsResult = () => {
  return (
    <>
      <Container maxWidth="desktop" sx={{ marginTop: "30px" }}>
        <Grid container gap={0}>
          <Grid item mobile={12} laptoplg={3.5}>
            <ResultsSearchBox />
          </Grid>
          <Grid item mobile={12} laptoplg={8.5}>
            <ResultsListContainer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HotelsResult;
