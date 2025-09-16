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

      <div className="row g-3">
        {gallery.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4">
            <GalleryItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
