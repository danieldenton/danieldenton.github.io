import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

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
      }}
      className="mx-auto px-4"
    >
      {messageSent ? (
        <Alert variant="success">Message Sent!</Alert>
      ) : (
        <Form
          onSubmit={sendEmail}
          ref={form}
          style={{ maxWidth: "450px", margin: "50px auto" }}
        >
          <Form.Group
            className="mb-3"
            style={{ marginBottom: "10px" }}
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              style={{
                marginTop: "5px",
                width: "95%",
                height: "28px",
                borderRadius: "5px",
              }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{ marginBottom: "10px" }}
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ fontWeight: "bold", marginBottom: "7px" }}>
              Email
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              style={{
                marginTop: "5px",
                width: "95%",
                height: "28px",
                borderRadius: "5px",
              }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{ marginBottom: "10px" }}
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label style={{ fontWeight: "bold", marginBottom: "7px" }}>
              Message
            </Form.Label>
            <Form.Control
              type="text"
              name="message"
              as="textarea"
              rows={8}
              style={{ marginTop: "5px", width: "95%", borderRadius: "5px" }}
            />
          </Form.Group>

          <Button
            type="submit"
            className="fw-bold"
            style={{
              backgroundColor: "rgb(234, 255, 0)",
              width: "96%",
              height: "40px",
              color: "black",
              borderRadius: "7px",
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
