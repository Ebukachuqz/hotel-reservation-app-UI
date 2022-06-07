import { Box, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { ImUser } from "react-icons/im";
import { useGlobalContext } from "../context";
import DateContainer from "./DateContainer";
import OptionsBox from "./OptionsBox";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const Container = styled(Box)({
  width: "264px",
  background: "#febb02",
  padding: "10px",
  marginRight: "10px",
  borderRadius: "5px",
  position: "sticky",
  top: "10px",
  height: "max-content",
});

const DetailsContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "10px",
  marginTop: "15px",
});

const Detail = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  background: "white",
  height: "45px",
  gap: "5px",
  padding: "10px 5px",
});

const Options = styled(Container)({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  minWidth: "240px",
  width: "100%",
});

const Optionitem = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "12px",
  color: "#555",
});

const OptionInput = styled("input")({
  width: "50px",
});

const ResultsSearchBox = () => {
  const {
    searchDetails: { options },
    showOptions,
    setShowOptions,
  } = useGlobalContext();
  return (
    <Container>
      <Typography fontWeight={600} variant="h6">
        Search
      </Typography>
      <DetailsContainer>
        <Box>
          <label>Destination</label>
          <Detail>
            <SearchInput />
          </Detail>
        </Box>
        <Box>
          <label>Date</label>
          <Detail>
            <DateContainer />
          </Detail>
        </Box>
        <Box>
          <label>Options</label>

          <Options>
            <Optionitem>
              <span>
                Min price <small>per night</small>
              </span>
              <OptionInput type="number" />
            </Optionitem>
            <Optionitem>
              <span>
                Max price <small>per night</small>
              </span>
              <OptionInput type="number" />
            </Optionitem>
            <Optionitem>
              <span>Adults</span>
              <OptionInput type="number" />
            </Optionitem>
            <Optionitem>
              <span>Children</span>
              <OptionInput type="number" />
            </Optionitem>
            <Optionitem>
              <span>Room</span>
              <OptionInput type="number" />
            </Optionitem>
          </Options>
        </Box>
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <SearchButton sx={{ width: "100%", borderRadius: "5px" }}>
            Search
          </SearchButton>
        </Box>
      </DetailsContainer>
    </Container>
  );
};

export default ResultsSearchBox;
