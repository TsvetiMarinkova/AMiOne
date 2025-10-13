import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="row">
      <div className="col-md-7">
        <h2>Contact</h2>
        <p className="text-muted">
          Send a message to request commissions, ask about the knitting group,
          or general enquiries.
        </p>
        <ContactForm />
      </div>
      <div className="col-md-5 mt-4">
        <div
          className="card p-3 shadow-sm"
          style={{
            borderColor: "var(--dark-purple)",
          }}
        >
          <h5>Other ways to reach Kaye</h5>
          <p className="mb-0">
            <strong>Email:</strong>
            <a href="mailto:ami_one@hotmail.com">ami_one@hotmail.com</a>
          </p>
          <p className="mb-0">
            <strong>Instagram:</strong>
            <a href="https://www.instagram.com/NW10Knitters/">@NW10Knitters</a>
          </p>
          <p className="mb-0">
            <strong>Knitting group:</strong> Saturdays 10am-12pm
          </p>
        </div>
      </div>
    </div>
  );
}
