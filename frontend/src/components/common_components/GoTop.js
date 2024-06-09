import React, { useState, useEffect } from "react";
import "./GoTop.css";
import Fab from "@mui/material/Fab";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Button, Modal } from "react-bootstrap";


const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
 
  const handleScrollUp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      <div className="floating-button-top" onClick={handleScrollUp}>
      {isVisible && (
        <Fab color="white" aria-label="add">
          <KeyboardDoubleArrowUpIcon></KeyboardDoubleArrowUpIcon>
        </Fab>
      )}
      </div>
    </div>
  );
};

export default GoTop;
