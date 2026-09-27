import React from 'react';
import { Menu } from 'lucide-react';

export default function Gallery({ photos, onShowPhotos }) {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-grid">
        <div style={{ height: '100%', overflow: 'hidden' }}>
          <img 
            src={photos[0]} 
            alt="Main" 
            className="gallery-main" 
            onClick={onShowPhotos} 
          />
        </div>
        <div className="gallery-subgrid">
          {photos.slice(1, 5).map((photo, i) => (
            <div key={i} style={{ height: '100%', overflow: 'hidden' }}>
              <img 
                src={photo} 
                alt={`Room ${i+1}`} 
                className="gallery-subimg" 
                onClick={onShowPhotos} 
              />
            </div>
          ))}
        </div>
      </div>
      <button className="show-photos-btn" onClick={onShowPhotos}>
        <Menu size={16} /> Show all photos
      </button>
    </div>
  );
}
