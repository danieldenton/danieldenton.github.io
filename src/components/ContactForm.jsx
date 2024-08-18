import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rj9lbxe", "template_5tdcrwf", form.current, {
        publicKey: "tkNcmbiASi0TUZpR7",
      })
      .then(
        () => {
          setMessageSent(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Card
      style={{
        maxWidth: "500px",
        backgroundColor: "black",
        border: "solid 3px white",
        borderRadius: "10px",
        height: "398px",
      }}
      className="mx-auto px-4"
    >
      {messageSent ? (
        <></>
      ) : (
        <Form
          onSubmit={sendEmail}
          ref={form}
          style={{ maxWidth: "450px", margin: "50px auto" }}
        >
          <Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" name="message" />
            </Form.Group>
          </Row>
          <Button
            type="submit"
            className="fw-bold"
            style={{
              backgroundColor: "#D8BFD8",
              color: "purple",
              border: "solid purple 2px",
              borderRadius: "5px",
              marginTop: "15px",
            }}
          >
            Send
          </Button>
        </Form>
      )}
    </Card>
  );
};
