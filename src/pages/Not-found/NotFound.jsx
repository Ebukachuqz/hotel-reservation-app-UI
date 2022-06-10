import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../../context";

const NotFound = () => {
  const { goHome } = useGlobalContext();
  return (
    <Container>
      <Typography variant="h1">Sorry Page Not Found</Typography>
      <Button color="primary" onClick={goHome}>
        Home
      </Button>
    </Container>
  );
};

export default NotFound;
