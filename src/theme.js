import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 481,
      laptop: 769,
      desktop: 1025,
      tv: 1201,
    },
  },
  palette: {
    primary: {
      main: "#003580",
    },
  },
  typography: {
    fontWeightVeryBold: 900,
  },
});

export default theme;
