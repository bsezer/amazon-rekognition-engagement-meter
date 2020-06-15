import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

import AddUserModal from "./AddUserModal";
import RekognitionButton from "./RekognitionButton";

export default props => (
  <Navbar inverse collapseOnSelect style={{ backgroundColor: "#000" }}>
    <Navbar.Header>
      <Navbar.Brand>Rekognition Engagement Meter</Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight style={{ paddingTop: "8px" }}>
        <RekognitionButton onClick={props.toggleRekognition} enabled={props.readyToStream} />
        <AddUserModal onSave={props.addUser} />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
