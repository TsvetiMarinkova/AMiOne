import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <p>
          Try going back to the <Link to="/products">products list</Link>.
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {product.images.length > 1 ? (
            <div
              id="productCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {product.images.map((src, i) => (
                  <div
                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                    key={i}
                  >
                    <img
                      src={src}
                      className="d-block w-100"
                      alt={`${product.title} ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            <img
              src={product.images[0]}
              alt={product.title}
              className="img-fluid rounded"
            />
          )}
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.short}</p>
          <p>{product.description}</p>
          <div className="my-3">
            <strong>
              {product.priceType === "fixed"
                ? `$${product.price}`
                : "Price on request"}
            </strong>
          </div>

          <div>
            <a
              href={`mailto:ami_one@hotmail.com?subject=${encodeURIComponent(
                "Product enquiry: " + product.title
              )}`}
              className="btn btn-primary me-2"
            >
              Enquire / Order
            </a>
            <Link to="/products" className="btn btn-outline-secondary">
              Back to products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
