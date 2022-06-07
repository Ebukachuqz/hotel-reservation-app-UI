import { Box } from "@mui/material";
import { format } from "date-fns";
import React from "react";
import { GoCalendar } from "react-icons/go";
import { useGlobalContext } from "../context";
import ModalCalender from "./ModalCalender";

const DateContainer = () => {
  const {
    searchDetails: { date },
    handleOpenModalCalender,
  } = useGlobalContext();
  return (
    <>
      <GoCalendar />
      <Box
        onClick={handleOpenModalCalender}
        sx={{ cursor: "pointer", width: "100%" }}
      >
        {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}
      </Box>
      <ModalCalender />
    </>
  );
};

export default DateContainer;
