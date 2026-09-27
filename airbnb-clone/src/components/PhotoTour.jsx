import React from 'react';
import { ChevronLeft, Share, Heart } from 'lucide-react';
import { PHOTO_CATEGORIES, PHOTOS } from '../data/photos';

export default function PhotoTour({ onClose, onPhotoClick }) {
  const handleScrollTo = (id) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="photo-tour-overlay">
      <div className="photo-tour-header">
        <button className="btn-round-ghost" onClick={onClose}>
          <ChevronLeft size={20} />
        </button>
        <div className="photo-tour-title">Photo tour</div>
        <div className="photo-tour-actions">
          <button className="btn-ghost" style={{ padding: '8px', border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <Share size={18} />
          </button>
          <button className="btn-ghost" style={{ padding: '8px', border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <Heart size={18} />
          </button>
        </div>
      </div>
      
      <div className="photo-tour-main">
        {/* Navigation Grid */}
        <div className="photo-tour-nav-grid">
          {PHOTO_CATEGORIES.map(cat => (
            <div key={cat.id} className="photo-tour-nav-item" onClick={() => handleScrollTo(cat.id)}>
              <div className="photo-tour-nav-img-wrapper">
                <img src={cat.photos[0]} alt={cat.title} />
              </div>
              <div className="photo-tour-nav-title">{cat.title}</div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="photo-tour-content">
          {PHOTO_CATEGORIES.map(cat => (
            <div key={cat.id} id={`section-${cat.id}`} className="photo-tour-section">
              <div className="photo-tour-section-info">
                <h2>{cat.title}</h2>
                {cat.amenities && <p>{cat.amenities}</p>}
              </div>
              <div className="photo-tour-section-photos">
                {cat.photos.map((photo, i) => {
                  const globalIndex = PHOTOS.indexOf(photo);
                  return (
                    <div key={i} className={`photo-tour-photo-wrapper ${i === 0 ? 'full-width' : 'half-width'}`} onClick={() => onPhotoClick(globalIndex)}>
                      <img src={photo} alt={`${cat.title} ${i + 1}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
