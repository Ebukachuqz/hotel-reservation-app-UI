import { Container, styled } from "@mui/material";
import React from "react";
import Header from "../../components/navbar/Header";
import Navbar from "../../components/navbar/Navbar";

const HotelHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
const Hotel = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Container sx={{ margin: "60px auto 0px" }} maxWidth="desktop">
        <HotelHeader></HotelHeader>
      </Container>
    </>
  );
};

export default Hotel;
