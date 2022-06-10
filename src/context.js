import React, { useState, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  // Handle Options
  const handleOptions = (name, operation) => {
    dispatch({ type: "OPTIONS_OPERATION", payload: { name, operation } });
  };

  // handle date range
  const handleDate = (itemSelection) => {
    dispatch({ type: "HANDLE_DATE_RANGE", payload: { itemSelection } });
  };

  // Handle Search
  const handleSearch = () => {
    navigate("/hotels");
  };

  // Handle Go Home
  const goHome = () => {
    navigate("/");
  };

  // Handle hotel info route
  const handlehotelAvailability = () => {
    navigate("/hotel/:id");
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
        goHome,
        handlehotelAvailability,
        handleDate,
        handleSearch,
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
