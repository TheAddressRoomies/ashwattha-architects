import React, { useState } from "react";
import "./FloatingCall.css";
import Fab from "@mui/material/Fab";
import CallIcon from "@mui/icons-material/Call";
import { Button, Modal } from "react-bootstrap";


const FloatingCall = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    console.log(showPopup);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    console.log("Close popup + ", showPopup);
  };

  return (
    <div>
      <div className="floating-button" onClick={handleShowPopup}>
        <Fab color="primary" aria-label="add">
          <CallIcon href="tel:+900300400" />
        </Fab>
      </div>
        <Modal show={showPopup} onHide={handleClosePopup}>
          <Modal.Title>Contact Information</Modal.Title>
          <Modal.Body>
            <div className="d-flex flex-column">
              <Button
                variant="outline-primary"
                href="tel:+91 9665331711"
                className="mb-2"
              >
                Mobile: +91 9665331711
              </Button>
              <Button
                variant="outline-secondary"
                href="mailto:techroomies@gmail.com"
              >
                Email: techroomies@gmail.com
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClosePopup}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
};

export default FloatingCall;
