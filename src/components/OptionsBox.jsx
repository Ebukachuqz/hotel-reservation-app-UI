import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useGlobalContext } from "../context";

const OptionBox = styled(Box)({
  position: "absolute",
  top: "50px",
  backgroundColor: "white",
  color: "grey",
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

const OptionsBox = () => {
  const {
    searchDetails: { options },
    handleOptions,
  } = useGlobalContext();
  return (
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
            disabled={options.rooms <= 1}
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
  );
};

export default OptionsBox;
