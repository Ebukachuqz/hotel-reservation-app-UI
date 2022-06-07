import { Box, Modal, styled } from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "../context";
import CalenderContainer from "./CalenderContainer";

const DateRangeBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
});

const ModalCalender = () => {
  const { openModalCalender, handleCloseModalCalender } = useGlobalContext();
  return (
    <Modal
      open={openModalCalender}
      onClose={handleCloseModalCalender}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DateRangeBox>
        <CalenderContainer />
      </DateRangeBox>
    </Modal>
  );
};

export default ModalCalender;
