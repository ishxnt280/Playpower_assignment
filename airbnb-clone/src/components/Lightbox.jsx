import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Lightbox({ photos, index, setIndex, onClose }) {
  if (index === null) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="btn-round lightbox-close" onClick={onClose}>
        <X size={20} />
      </button>
      
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="lightbox-nav prev"
          onClick={() => setIndex(p => p > 0 ? p - 1 : photos.length - 1)}
        >
          <ChevronLeft size={20} />
        </button>
        
        <img src={photos[index]} alt="Lightbox view" className="lightbox-img" />
        
        <button 
          className="lightbox-nav next"
          onClick={() => setIndex(p => p < photos.length - 1 ? p + 1 : 0)}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="lightbox-counter">
        {index + 1} / {photos.length}
      </div>
    </div>
  );
}
