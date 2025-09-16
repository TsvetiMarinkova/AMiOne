import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="home-hero py-5 rounded-3"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-purple) 0%, var(--lilac) 60%)",
      }}
    >
      <div className="container text-white py-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h1
              className="display-5 fw-bold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              A Mi One
            </h1>
            <p className="lead">
              Colourful. Elegant. Unique. Hand-knitted commissions and a
              friendly knitting group.
            </p>
            <p>
              <Link to="/products" className="btn btn-light btn-lg me-2">
                Products
              </Link>
              <Link to="/gallery" className="btn btn-outline-light btn-lg">
                Gallery
              </Link>
            </p>
          </div>
          <div className="col-md-5 d-none d-md-block">
            <div className="card shadow-lg">
              <img alt="Handmade by Kaye" className="card-img-top" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
