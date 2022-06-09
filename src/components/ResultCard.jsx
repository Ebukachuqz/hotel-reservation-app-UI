import * as React from "react";
import { styled, Box, Grid, Container, Typography, Paper } from "@mui/material";
import SearchButton from "./SearchButton";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "5px",
});

const MainContainer = styled(Paper)({
  width: "100%",
  padding: "10px 5px",
  marginBottom: "20px",
});

const RatingsBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const PricingBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "right",
  gap: "5px",
});

const Rating = styled(Box)({
  width: "30px",
  color: "white",
  background: "darkblue",
  fontSize: "12px",
  fontWeight: "bold",
  padding: "5px",
});

const ResultCard = () => {
  return (
    <MainContainer elevation={3}>
      <Grid container>
        <Grid item tablet={3}>
          <Img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/340210867.webp?k=30fe5986a5a3d579470868233a9fa3d84db056c192510bf491dc0bfb634f1feb&o=&s=1" />
        </Grid>
        <Grid
          item
          tablet={6}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "0px 10px",
            gap: "8px",
          }}
        >
          <Typography sx={{ fontWeight: 700, color: "#003580" }} variant="h6">
            Tower Street Apartments
          </Typography>
          <Typography variant="body2">500m from center</Typography>
          <Typography
            sx={{
              background: "#008009",
              color: "white",
              padding: "3px",
              borderRadius: "5px",
              width: "max-content",
            }}
            variant="caption"
          >
            Free airport taxi
          </Typography>
          <Typography fontWeight={700} variant="caption">
            Studio Apartment with Air conditioning
          </Typography>
          <Typography variant="caption">
            Entire studio . 1 bathroom . 21m 1 full bed
          </Typography>
          <Typography
            sx={{
              color: "#008009",
              fontWeight: "bold",
            }}
            variant="caption"
          >
            Free cancelation
          </Typography>
          <Typography
            sx={{
              color: "#008009",
            }}
            variant="caption"
          >
            You can cancel later, so lock this great price
          </Typography>
        </Grid>
        <Grid item tablet={3}>
          <Container
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <RatingsBox>
              <Typography variant="body2" sx={{ fontweight: "bold" }}>
                Excellent
              </Typography>
              <Rating>8.9</Rating>
            </RatingsBox>
            <PricingBox>
              <Typography variant="h6" sx={{ fontweight: "bold" }}>
                $123
              </Typography>
              <Typography variant="caption" sx={{ color: "grey" }}>
                Includes taxes and fees
              </Typography>
              <SearchButton
                sx={{
                  fontSize: "10px",
                  padding: "10px 5px",
                  borderRadius: "5px",
                }}
              >
                See availability
              </SearchButton>
            </PricingBox>
          </Container>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default ResultCard;
