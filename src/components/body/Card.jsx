import { Box, Paper, styled, Typography } from "@mui/material";
import React from "react";

const ImageCard = styled("img")`
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Card = () => {
  return (
    <Box sx={{ width: "170px", marginTop: "20px" }}>
      <Paper sx={{ width: "100%", height: "180px", overflow: "hidden" }}>
        <ImageCard
          alt="CardImage"
          src="https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
        />
      </Paper>
      <Box marginTop={2}>
        <Typography sx={{ fontWeight: "700" }} variant="body1">
          Hotels
        </Typography>
        <Typography sx={{ color: "#6B6B6B" }} variant="body2">
          865,892 hotels
        </Typography>
      </Box>

      <Box marginTop={2}></Box>
    </Box>
  );
};

export default Card;
