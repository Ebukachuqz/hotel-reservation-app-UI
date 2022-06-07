import { styled } from "@mui/material";
import { IoBed } from "react-icons/io5";
import { useGlobalContext } from "../context";

const SearchInputBox = styled("input")`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
`;

const SearchInput = () => {
  const {
    searchDetails: { destination },
    handleSearchInput,
  } = useGlobalContext();
  return (
    <>
      <IoBed />
      <SearchInputBox
        value={destination}
        placeholder="Where are you going to"
        type={"text"}
        onChange={(e) => handleSearchInput(e)}
      />
    </>
  );
};

export default SearchInput;
