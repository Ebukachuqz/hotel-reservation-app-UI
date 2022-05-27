import React, { useState } from "react";

// Material UI imports
import { Box, Button, Container, styled, Typography } from "@mui/material";

// React Icons Imports
import { IoBed } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { GoCalendar } from "react-icons/go";

// React date range imports
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

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

const SearchInput = styled("input")`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
`;

const SearchButton = styled(Button)({
  fontSize: 14,
  padding: "8px 16px 8px 16px",
  fontWeight: 700,
  height: "100%",
  borderRadius: 0,
  color: "white",
  background: "#0071C2",

  "&:hover": {
    backgroundColor: "#00487A",
    boxShadow: "none",
  },
});

const DateRangeBox = styled(DateRange)`
  position: absolute;
  top: 50px;
`;

const OptionBox = styled(Box)({
  position: "absolute",
  top: "50px",
  backgroundColor: "white",
  color: "grey",
  boxShadow: "revert",
  borderRadius: "5px",
  boxShadow: "1px 0px 10px 0px rgba(0,0,0,0.75)",
});

const OptionBoxItem = styled("div")({
  width: "250px",
  display: "flex",
  justifyContent: "space-between",
  margin: "10px",
});

const OptionBoxCounter = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  fontSize: "12px",
  color: "black",
});

const OptionButton = styled(Button)({
  width: "20px",
  height: "20px",
  border: "1px solid blue",
});

const MediaQuerySearchContainer = styled(Container)(({ theme }) => ({
  height: "200px",
  position: "absolute",
  top: "20px",
  [theme.breakpoints.up("laptop")]: {
    display: "none",
  },
}));

const MediaQuerySearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  border: "5px solid #febb02",
  background: "white",
  borderRadius: "5px",
  height: "100%",
  width: "100%",
}));

const MediaQuerySearchBoxItem = styled(Box)({
  display: "flex",
  height: "50px",
  fontSize: "14px",
  width: "100%",
  borderBottom: "5px solid #febb02",
  justifyContent: "flex-start",
  alignItems: "center",
  color: "grey",
  padding: "10px 20px",
  gap: "10px",
});

// COMPONENT
const Header = () => {
  const [showCalender, setShowCalender] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOptions = (name, operation) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
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
              <IoBed />
              <SearchInput placeholder="Where are you going to" type={"text"} />
            </SearchBoxItem>
            <SearchBoxItem sx={{ minWidth: "260px" }}>
              <GoCalendar />
              <Box onClick={() => setShowCalender((state) => !state)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </Box>
              {showCalender && (
                <DateRangeBox
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
            </SearchBoxItem>
            <SearchBoxItem sx={{ minWidth: "280px" }}>
              <ImUser />
              <Box onClick={() => setShowOptions((state) => !state)}>
                {options.adults} Adults - {options.children} Children -{" "}
                {options.rooms} Rooms
              </Box>
              {showOptions && (
                <OptionBox>
                  <OptionBoxItem>
                    <Typography variant="body1">Adult</Typography>
                    <OptionBoxCounter>
                      <OptionButton
                        disabled={options.adults <= 1}
                        onClick={() => {
                          handleOptions("adults", "d");
                        }}
                      >
                        -
                      </OptionButton>
                      <span>{options.adults}</span>
                      <OptionButton
                        onClick={() => {
                          handleOptions("adults", "i");
                        }}
                      >
                        +
                      </OptionButton>
                    </OptionBoxCounter>
                  </OptionBoxItem>

                  <OptionBoxItem>
                    <Typography variant="body1">Children</Typography>
                    <OptionBoxCounter>
                      <OptionButton
                        onClick={() => {
                          handleOptions("children", "d");
                        }}
                        disabled={options.children <= 0}
                      >
                        -
                      </OptionButton>
                      <span>{options.children}</span>
                      <OptionButton
                        onClick={() => {
                          handleOptions("children", "i");
                        }}
                      >
                        +
                      </OptionButton>
                    </OptionBoxCounter>
                  </OptionBoxItem>

                  <OptionBoxItem>
                    <Typography variant="body1">Rooms</Typography>
                    <OptionBoxCounter>
                      <OptionButton
                        onClick={() => {
                          handleOptions("rooms", "d");
                        }}
                        disabled={options.adults <= 1}
                      >
                        -
                      </OptionButton>
                      <span>{options.rooms}</span>
                      <OptionButton
                        onClick={() => {
                          handleOptions("rooms", "i");
                        }}
                      >
                        +
                      </OptionButton>
                    </OptionBoxCounter>
                  </OptionBoxItem>
                </OptionBox>
              )}
            </SearchBoxItem>

            <SearchButton>Search</SearchButton>
          </SearchBox>
        </HeaderHeroContainer>
      </Container>

      {/* TODO Export this component in a different file */}
      <MediaQuerySearchContainer>
        <MediaQuerySearchBox>
          <MediaQuerySearchBoxItem>
            <IoBed />
            <SearchInput placeholder="Where are you going to" type={"text"} />
          </MediaQuerySearchBoxItem>

          <MediaQuerySearchBoxItem>
            <GoCalendar />
            <Box onClick={() => setShowCalender((state) => !state)}>
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </Box>
          </MediaQuerySearchBoxItem>

          <MediaQuerySearchBoxItem>
            <ImUser />
            <Box onClick={() => setShowOptions((state) => !state)}>
              {options.adults} Adults - {options.children} Children -{" "}
              {options.rooms} Rooms
            </Box>
          </MediaQuerySearchBoxItem>
          <SearchButton>Search</SearchButton>
        </MediaQuerySearchBox>
      </MediaQuerySearchContainer>
    </HeaderContainer>
  );
};

export default Header;
