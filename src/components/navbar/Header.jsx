import React, { useState } from "react";

// Material UI imports
import {
  Box,
  Button,
  Container,
  Modal,
  styled,
  Typography,
} from "@mui/material";

// React Icons Imports
import { IoBed } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { GoCalendar } from "react-icons/go";

// React date range imports
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import SearchInput from "../SearchInput";
import { useGlobalContext } from "../../context";
import OptionsBox from "../OptionsBox";
import CalenderContainer from "../CalenderContainer";
import HeaderMediaQueryContainer from "../HeaderMediaQueryContainer";
import SearchButton from "../SearchButton";
import ModalCalender from "../ModalCalender";
import DateContainer from "../DateContainer";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  alignItems: "center",
  color: "white",
  background: theme.palette.primary.main,

  [theme.breakpoints.down("laptop")]: {
    height: "170px",
  },
}));

const HeaderHeroContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("laptop")]: {
    display: "none",
  },
}));

const HeaderHero = styled(Box)(({ theme }) => ({
  margin: "40px 0px",
  positon: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const HeaderHeroBtn = styled(Button)({
  fontSize: 14,
  margin: "32px 0 0 0",
  padding: "8px 16px 8px 16px",
  fontWeight: 700,
  width: "190px",
  minWidth: "60px",
  minHeight: "50px",
  color: "white",
  background: "#0071C2",

  "&:hover": {
    backgroundColor: "#00487A",
    boxShadow: "none",
  },
});

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "absolute",
  bottom: "-25px",
  height: "50px",
  alignItems: "center",
  border: "5px solid #febb02",
  borderRadius: "5px",
  maxWidth: "1024px",
  width: "100%",
  backgroundColor: "white",
}));

const SearchBoxItem = styled(Box)`
  display: flex;
  height: 100%;
  font-size: 14px;
  border-right: 5px solid #febb02;
  align-items: center;
  color: grey;
  padding: 10px 20px;
  gap: 10px;
`;

const DateRangeBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  p: 4,
});

// COMPONENT
const Header = () => {
  const {
    searchDetails: { date, options },
    handleOpenModalCalender,
    showOptions,
    setShowOptions,
  } = useGlobalContext();

  return (
    <HeaderContainer>
      <Container maxWidth="desktop">
        <HeaderHeroContainer>
          <HeaderHero>
            <Typography variant="h3" fontWeight={700}>
              A lifetime of discounts? It's Genius.
            </Typography>
            <Typography variant="h5">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Booking.com account
            </Typography>
            <HeaderHeroBtn>Sign In / Register</HeaderHeroBtn>
          </HeaderHero>

          <SearchBox>
            <SearchBoxItem flex={1}>
              <SearchInput />
            </SearchBoxItem>
            <SearchBoxItem sx={{ minWidth: "260px" }}>
              <DateContainer />
            </SearchBoxItem>
            <SearchBoxItem sx={{ minWidth: "280px" }}>
              <ImUser />
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() => setShowOptions((state) => !state)}
              >
                {options.adults} Adults - {options.children} Children -{" "}
                {options.rooms} Rooms
              </Box>
              {showOptions && <OptionsBox />}
            </SearchBoxItem>

            <SearchButton>Search</SearchButton>
          </SearchBox>
        </HeaderHeroContainer>
      </Container>

      {/* Media Query Container */}
      <HeaderMediaQueryContainer />
    </HeaderContainer>
  );
};

export default Header;
