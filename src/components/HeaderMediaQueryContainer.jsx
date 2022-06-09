import { Box, Container, styled } from "@mui/material";
import React from "react";
import { ImUser } from "react-icons/im";
import { useGlobalContext } from "../context";
import DateContainer from "./DateContainer";
import OptionsBox from "./OptionsBox";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

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

const OptionBox = styled(Box)({
  position: "absolute",
  bottom: "110px",
  zIndex: 3,
});

const HeaderMediaQueryContainer = () => {
  const {
    searchDetails: { options },
    showOptions,
    setShowOptions,
  } = useGlobalContext();
  return (
    <MediaQuerySearchContainer>
      <MediaQuerySearchBox>
        <MediaQuerySearchBoxItem>
          <SearchInput />
        </MediaQuerySearchBoxItem>

        <MediaQuerySearchBoxItem>
          <DateContainer />
        </MediaQuerySearchBoxItem>

        <MediaQuerySearchBoxItem
          sx={{ cursor: "pointer" }}
          onClick={() => setShowOptions((state) => !state)}
        >
          <ImUser />
          <Box>
            {options.adults} Adults - {options.children} Children -{" "}
            {options.rooms} Rooms
          </Box>
          {showOptions && (
            <OptionBox>
              <OptionsBox />
            </OptionBox>
          )}
        </MediaQuerySearchBoxItem>
        <SearchButton>Search</SearchButton>
      </MediaQuerySearchBox>
    </MediaQuerySearchContainer>
  );
};

export default HeaderMediaQueryContainer;
