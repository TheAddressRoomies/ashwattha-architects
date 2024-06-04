import React, { useState } from "react";
import "./GoTop.css";
import Fab from "@mui/material/Fab";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Button, Modal } from "react-bootstrap";


const GoTop = () => {
//   const [handleScrollUp] = useState(false);
 
  const handleScrollUp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      })
  }

  return (
    <div>
      <div className="floating-button-top" onClick={handleScrollUp}>
        <Fab color="white" aria-label="add">
          <KeyboardDoubleArrowUpIcon></KeyboardDoubleArrowUpIcon>
        </Fab>
      </div>
    </div>
  );
};

export default GoTop;
