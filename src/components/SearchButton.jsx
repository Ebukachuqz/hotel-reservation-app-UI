import { Button, styled } from "@mui/material";

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

export default SearchButton;
