import React from "react";

export default function GalleryItem({ item }) {
  return (
    <div className="gallery-item position-relative overflow-hidden rounded">
      <img src={item.image} alt={item.title} loading="lazy" />
      <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3">
        <div>
          <h6 className="mb-0">{item.title}</h6>
          <small style={{ color: "var(--success)" }}>{item.subtitle}</small>
        </div>
      </div>
    </div>
  );
}
