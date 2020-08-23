import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <Button variant="secondary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>Login</ModalTitle>
        </Modal.Header>
        <ModalBody>Form should be here</ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" type="submit">
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Login;
