import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white mt-5 py-4 border-top">
      <div className="container text-center small text-muted">
        © {new Date().getFullYear()} A Mi One — Hand-knit commissions & knitting
        group. Built with care.
      </div>
    </footer>
  );
}
