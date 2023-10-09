import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { colors } from "../../../helpers/conf";
import { postRequest } from "../../../helpers/request";
import "./ContactForm.css";

export const ContactForm = (props) => {
  const [header, setHeader] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const sendMail = (payload) => {
    console.log(JSON.stringify(payload));
    if (!message) return;
    postRequest(
      process.env.REACT_APP_SERVER_URL +
        "/api/" +
        process.env.REACT_APP_API_VERSION +
        "/mail",
      {},
      {
        "Content-Type": "application/json",
      },
      payload
    ).then((res) => {
      console.log(res);
    });
  };
  return (
    <div style={props.style}>
      <Accordion
        sx={{
          color: colors.text,
          backgroundColor: "transparent",
        }}
        onClick={async () => {
          await new Promise((r) => setTimeout(r, 300));
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ ontWeight: 700, color: colors.text }} />
          }
        >
          <Typography sx={{ fontWeight: 700 }} className="contact-summary">
            Contact Me
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              sendMail({
                destination: "serdilcakmak@gmail.com",
                sender: sender,
                subject: header,
                message: message,
              });
            }}
          >
            <Form.Group controlId="emailForm.subject">
              <div
                style={{
                  width: "100%",
                  marginBottom: "5px",
                  position: "relative",
                }}
              >
                <Form.Control
                  type="text"
                  placeholder="Sender"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                ></Form.Control>
              </div>
              <Form.Control
                type="text"
                placeholder="Subject"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <div
              style={{ width: "100%", padding: "5px", position: "relative" }}
            />
            <Form.Group className="mb-3" controlId="emailForm.message">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              style={{
                width: "100%",
                backgroundColor: colors.text,
                borderColor: colors.primary,
              }}
              variant="success"
              type="submit"
            >
              Send
            </Button>
          </Form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
