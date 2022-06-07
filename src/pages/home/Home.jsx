import { Alert, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardSlide from "../../components/body/CardSlide";
import CustomImageList from "../../components/body/CustomImageList";
import Header from "../../components/navbar/Header";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Header />
      <Container sx={{ margin: "60px auto 0px" }} maxWidth="desktop">
        <Alert variant="outlined" severity="info">
          Get the advice you need. Check the latest COVID-19 restrictions before
          you travel. Learn more
        </Alert>
        <Box marginTop={2}>
          <Typography fontWeight={700} variant="h5">
            Browse by property type
          </Typography>
          <CardSlide />
        </Box>
        <Box marginTop={2}>
          <CustomImageList />
        </Box>
        <Box marginTop={2}>
          <Typography fontWeight={700} variant="h5">
            Homes guests love
          </Typography>
          <CardSlide />
        </Box>
      </Container>
    </>
  );
};

export default Home;
