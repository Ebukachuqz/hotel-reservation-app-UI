import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import { IoLocation } from "react-icons/io5";
import ImageListContainer from "../../components/ImageListContainer";
import SearchButton from "../../components/SearchButton";

const HotelHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const CardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "15px 10px",
  background: "#dce9fc",
  gap: "15px",
  flex: "1",
  borderRadius: "5px",
}));

const DetailsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "50px",

  [theme.breakpoints.down("laptop")]: {
    flexDirection: "column",
  },
}));
const Hotel = () => {
  return (
    <>
      <Container sx={{ margin: "30px auto 0px" }} maxWidth="desktop">
        <HotelHeader>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography variant="h6" fontWeight={700}>
              Tower Street Apartments
            </Typography>
            <Typography variant="caption">
              <IoLocation /> 5 Basztowa, Old Town, 33-332 Krakow, Poland
            </Typography>
            <Typography variant="body2" sx={{ color: "blue" }}>
              Excellent Location - 500m from center
            </Typography>
            <Typography variant="body2" sx={{ color: "green" }}>
              Book a stay over $114 at this property and get a free airport taxi
            </Typography>
          </Box>
          <SearchButton
            sx={{
              fontSize: "10px",
              padding: "10px 5px",
              borderRadius: "5px",
            }}
          >
            Reserve or Book Now
          </SearchButton>
        </HotelHeader>
        <ImageListContainer />
        <DetailsBox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flex: "3",
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              Stay in the heart of Krakow
            </Typography>
            <Typography variant="body2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates ipsum rerum amet debitis et consectetur, reprehenderit
              architecto aspernatur numquam explicabo tenetur laborum ipsa dicta
              expedita porro deleniti veniam exercitationem possimus eligendi
              harum totam adipisci. Amet cumque quis voluptate expedita odio.
              Tenetur at incidunt architecto, consequatur, quae nulla optio esse
              iusto adipisci sapiente ex soluta cum cupiditate id ut sit ab qui
              ipsa atque maiores impedit quaerat maxime quasi. Sed, ratione
              similique. Dolorem, consequuntur? Soluta autem mollitia quidem,
              eveniet fugiat saepe suscipit, minus ea iure voluptates voluptate
              maxime ratione rem? Laudantium temporibus excepturi aspernatur
              cumque commodi magni est enim ea rerum.
            </Typography>
          </Box>
          <CardBox>
            <Typography
              variant="body1"
              sx={{ color: "#555", textAlign: "center", fontWeight: "700" }}
            >
              Perfect for a 9-night stay!
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis dolorum molestiae doloribus asperiores soluta eum
              labore.
            </Typography>
            <Typography variant="h6">
              <b>$945 </b>(9 nights)
            </Typography>
            <SearchButton>Reserve or Book Now!</SearchButton>
          </CardBox>
        </DetailsBox>
      </Container>
    </>
  );
};

export default Hotel;
