const reducer = (state, action) => {
  const { name, operation, itemSelection, searchValue } = action.payload;
  switch (action.type) {
    case "OPTIONS_OPERATION":
      let newOptions = state.options;
      newOptions = {
        ...newOptions,
        [name]: operation === "i" ? newOptions[name] + 1 : newOptions[name] - 1,
      };
      return {
        ...state,
        options: newOptions,
      };
    case "HANDLE_DATE_RANGE":
      return { ...state, date: itemSelection };
    case "SEARCH_INPUTFIELD":
      return { ...state, destination: searchValue };
    default:
      throw new Error("Error occured");
  }
};

export default reducer;
