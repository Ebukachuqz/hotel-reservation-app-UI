import { Box, Container, Typography, styled, Checkbox } from "@mui/material";
import React from "react";
import SearchButton from "../SearchButton";
import { BiCopyright } from "react-icons/bi";

const flexStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const EmailBox = styled(Box)(({ theme }) => ({
  ...flexStyle,
  marginTop: "20px",

  [theme.breakpoints.down("laptop")]: {
    flexDirection: "column",
    gap: "10px",
  },
}));
const EmailInput = styled("input")({
  width: "355px",
  height: "48px",
  padding: "10px",
});

const FooterLinksCOntainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid white;
  padding: 10px 0;
  gap: 10px;
  color: white;
  font-size: 14px;
  background: #003580;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const FooterLink = styled("a")({
  color: "white",
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Footer = () => {
  return (
    <Box sx={{ width: "100%", color: "white", marginTop: "10px" }}>
      <Container
        sx={{ ...flexStyle, flexDirection: "column", background: "#00224F" }}
      >
        <Box sx={{ ...flexStyle, flexDirection: "column", marginTop: "60px" }}>
          <Typography variant="h5"> Save time, save money!</Typography>
          <Typography variant="subtitle1" sx={{ color: "lightgrey" }}>
            Sign up and we'll send the best deals to you
          </Typography>
        </Box>
        <EmailBox>
          <EmailInput />
          <SearchButton
            sx={{
              fontSize: "17px",
              height: "50px",
              borderRadius: "5px",
              width: "161.453px",
              margin: "0 5px",
              padding: "0 15px",
            }}
          >
            Subscribe
          </SearchButton>
        </EmailBox>
        <Box sx={{ marginBottom: "60px" }}>
          <Checkbox {...label} color="secondary" />
          Send me a link to get the FREE Booking.com app!
        </Box>
      </Container>
      <Container
        sx={{ ...flexStyle, padding: "10px 0", background: "#003580" }}
      >
        <BiCopyright style={{ margin: "0 5px" }} />
        Created By Ebuka Chuqz
      </Container>
      <FooterLinksCOntainer>
        <FooterLink href="#">Mobile version</FooterLink>
        <FooterLink href="#">Your account</FooterLink>
        <FooterLink href="#">Customer Service help</FooterLink>
        <FooterLink href="#">Become an affiliate</FooterLink>
      </FooterLinksCOntainer>
    </Box>
  );
};

export default Footer;
