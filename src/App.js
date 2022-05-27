import { Box, CssBaseline, styled } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import HotelList from "./pages/hotelList/HotelList";

const Container = styled(Box)`
  width: 100%;
  font-family: "Poppins", sans-serif;
`;

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<HotelList />} />
            <Route path="/hotel/:id" element={<Hotel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
