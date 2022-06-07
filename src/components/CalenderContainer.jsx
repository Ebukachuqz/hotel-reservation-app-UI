import React from "react";
import { useGlobalContext } from "../context";

// React date range imports
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";

const CalenderContainer = () => {
  const {
    searchDetails: { date },
    handleDate,
  } = useGlobalContext();

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => {
          let itemSelection = [item.selection];
          return handleDate(itemSelection);
        }}
        moveRangeOnFirstSelection={false}
        ranges={date}
      />
    </div>
  );
};

export default CalenderContainer;
