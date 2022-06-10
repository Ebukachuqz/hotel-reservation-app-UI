import { Box, CssBaseline, styled } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { AppProvider } from "./context";

// Route components import
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import HotelsResult from "./pages/hotelsResult/HotelsResult";
import NotFound from "./pages/Not-found/NotFound";

const Container = styled(Box)`
  width: 100%;
  font-family: "Poppins", sans-serif;
`;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <CssBaseline />
          <Container>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<HotelsResult />} />
              <Route path="/hotel/:id" element={<Hotel />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Container>
        </AppProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
