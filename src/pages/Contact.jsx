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
      <div className="col-md-5">
        <div className="card p-3 shadow-sm">
          <h5>Other ways to reach Kaye</h5>
          <p className="mb-0">
            <strong>Email:</strong>{" "}
            <a href="mailto:ami_one@hotmail.com">ami_one@hotmail.com</a>
          </p>
          <p className="mb-0">
            <strong>Knitting group:</strong> Weekly meet-ups — add details here.
          </p>
        </div>
      </div>
    </div>
  );
}
