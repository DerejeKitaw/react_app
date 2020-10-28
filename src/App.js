import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import {  Form,Button } from 'react-bootstrap'

export default function App() {
  return (
   <div className="container">
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Number of modules</Form.Label>
        <Form.Control type="text" placeholder="Enter Number of modules" />
        <Form.Text className="text-muted">
          Number of omdules in a modules.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </div>
  );
}
