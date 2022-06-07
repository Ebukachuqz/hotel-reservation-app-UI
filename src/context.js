import React, { useState, useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialSearchState = {
  destination: "",
  date: [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ],
  options: {
    adults: 1,
    children: 0,
    rooms: 1,
  },
};

const AppProvider = ({ children }) => {
  const [searchDetails, dispatch] = useReducer(reducer, initialSearchState);
  const [showOptions, setShowOptions] = useState(false);
  const [openModalCalender, setOpenModalCalender] = useState(false);
  const handleOpenModalCalender = () => setOpenModalCalender(true);
  const handleCloseModalCalender = () => setOpenModalCalender(false);

  // Handle Options
  const handleOptions = (name, operation) => {
    dispatch({ type: "OPTIONS_OPERATION", payload: { name, operation } });
  };

  // handle date range
  const handleDate = (itemSelection) => {
    dispatch({ type: "HANDLE_DATE_RANGE", payload: { itemSelection } });
  };

  // Text change in inputfield
  const handleSearchInput = (e) => {
    let searchValue = e.target.value;
    dispatch({ type: "SEARCH_INPUTFIELD", payload: { searchValue } });
  };

  return (
    <AppContext.Provider
      value={{
        openModalCalender,
        handleOpenModalCalender,
        handleCloseModalCalender,
        handleSearchInput,
        handleDate,
        handleOptions,
        showOptions,
        setShowOptions,
        searchDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
