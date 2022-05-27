import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
  styled,
  Box,
} from "@mui/material";
import React from "react";
import {
  IoAirplaneOutline,
  IoBedOutline,
  IoCarSportOutline,
} from "react-icons/io5";
import { MdOutlineAttractions } from "react-icons/md";
import { RiTaxiWifiLine } from "react-icons/ri";

const NavButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  padding: "5px 10px",
  fontSize: "13px",
  fontWeight: "bold",
  border: "1px solid",
  lineHeight: 1.5,
  borderColor: "#fffff",

  "&:hover": {
    backgroundColor: "#1A4A8D",
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const HeaderNav = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "10px 0px",
  background: theme.palette.primary.main,
}));

const HeaderButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "11px 15px",
  lineHeight: "20px",
  color: "white",
  borderRadius: "50px",

  "&:hover": {
    backgroundColor: "#1A4A8D",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#1A4A8D",
    border: "1px solid",
    borderColor: "white",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.1rem #ffffffff",
  },
}));

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" elevation={0} color="primary">
        <Container maxWidth="desktop">
          <Toolbar sx={{ justifyContent: "space-between", padding: "0" }}>
            <Typography fontWeight={900} variant="h5">
              Booking.com
            </Typography>

            <Stack spacing={1.5} direction="row">
              <NavButton variant="contained" size="inherit">
                Sign Up
              </NavButton>
              <NavButton variant="contained" size="small">
                LogIn
              </NavButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <HeaderNav>
        <Container maxWidth="desktop">
          <HeaderButton variant="outlined" startIcon={<IoBedOutline />}>
            Stays
          </HeaderButton>
          <HeaderButton variant="outlined" startIcon={<IoAirplaneOutline />}>
            Flights
          </HeaderButton>
          <HeaderButton variant="outlined" startIcon={<IoCarSportOutline />}>
            Car Rentals
          </HeaderButton>
          <HeaderButton variant="outlined" startIcon={<MdOutlineAttractions />}>
            Attraction
          </HeaderButton>
          <HeaderButton variant="outlined" startIcon={<RiTaxiWifiLine />}>
            Taxi
          </HeaderButton>
        </Container>
      </HeaderNav>
    </div>
  );
};

export default Navbar;
