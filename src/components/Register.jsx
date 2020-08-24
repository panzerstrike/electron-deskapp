import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";

const Register = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>Register</ModalTitle>
        </Modal.Header>
        <ModalBody>
          <Form>
            <FormGroup controlId="email">
              <FormLabel>Email</FormLabel>
              <FormControl type="email" placholder="Enter email" />
            </FormGroup>

            <FormGroup controlId="password">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" placholder="Enter paswword" />
            </FormGroup>

            <FormGroup controlId="role">
              <FormLabel>Role</FormLabel>
              <FormControl type="text" placholder="Enter role" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button as="input" variant="primary" type="submit" value="Register" />

          <Button
            as="input"
            variant="secondary"
            type="submit"
            value="Close"
            onClick={handleClose}
          />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Register;
