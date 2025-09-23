import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card product-card h-100 shadow-sm">
      <img
        src={product.images[0]}
        className="card-img-top"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.short}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div className="fw-semibold">
            {product.priceType === "fixed"
              ? `£${product.price}`
              : "Request a quote"}
          </div>
          <Link
            to={`/products/${product.slug}`}
            className="btn btn-products-primary btn-sm"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
