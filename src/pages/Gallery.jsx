import React from "react";
import gallery from "../data/gallery";
import GalleryItem from "../components/GalleryItem";

export default function Gallery() {
  return (
    <div>
      <h2>Gallery — Shop window</h2>
      <p className="text-muted">
        A selection of pieces made by Kaye. Hover to see details.
      </p>

      <div className="gallery-grid">
        {gallery.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
