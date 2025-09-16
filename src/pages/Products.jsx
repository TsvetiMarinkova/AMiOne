import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div>
      <h2>Products</h2>
      <p className="text-muted">
        Items available for immediate purchase or by commission.
      </p>
      <div className="row g-3 mt-3">
        {products.map((p) => (
          <div className="col-12 col-sm-6 col-md-4" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
