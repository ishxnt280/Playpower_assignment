import React, { useState, useEffect } from 'react';
import { Share, Heart } from 'lucide-react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import MainContent from './components/MainContent';
import BookingWidget from './components/BookingWidget';
import ReviewsSection from './components/ReviewsSection';
import PhotoTour from './components/PhotoTour';
import Lightbox from './components/Lightbox';
import BottomSections from './components/BottomSections';

import { PHOTOS } from './data/photos';

export default function App() {
  const [showPhotoTour, setShowPhotoTour] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showTopBar, setShowTopBar] = useState(false);
  const [activeSection, setActiveSection] = useState('photos');

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY > 400);

      // Track active section
      const sections = ['photos', 'amenities', 'reviews', 'location'];
      let currentSection = 'photos';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 120) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowLeft') setLightboxIndex(p => p > 0 ? p - 1 : PHOTOS.length - 1);
        else if (e.key === 'ArrowRight') setLightboxIndex(p => p < PHOTOS.length - 1 ? p + 1 : 0);
        else if (e.key === 'Escape') setLightboxIndex(null);
      } else if (showPhotoTour && e.key === 'Escape') {
        setShowPhotoTour(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showPhotoTour]);

  return (
    <>
      {/* Sticky secondary nav bar */}
      <div className={`secondary-top-bar ${showTopBar ? 'visible' : ''}`}>
        <div className="top-bar-nav">
          <a href="#photos" className={activeSection === 'photos' ? 'active' : ''}>Photos</a>
          <a href="#amenities" className={activeSection === 'amenities' ? 'active' : ''}>Amenities</a>
          <a href="#reviews" className={activeSection === 'reviews' ? 'active' : ''}>Reviews</a>
          <a href="#location" className={activeSection === 'location' ? 'active' : ''}>Location</a>
        </div>
        <div className="top-bar-right">
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 600, fontSize: 16 }}>₹28,499 <span style={{ fontWeight: 400, fontSize: 14 }}>for 5 nights</span></div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>★ 4.95 · 19 reviews</div>
          </div>
          <button className="btn-primary">Reserve</button>
        </div>
      </div>

      <Header />

      <main className="container">
        {/* Title */}
        <div className="mt-6 mb-2">
          <h1 style={{ fontSize: 26, fontWeight: 600, lineHeight: '30px' }}>Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>
        </div>

        {/* Sub-header row */}
        <div className="flex justify-between items-center mb-2">
          <div></div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 cursor-pointer text-sm" style={{ fontWeight: 500 }}>
              <Share size={16} /> Share
            </div>
            <div className="flex items-center gap-2 cursor-pointer text-sm" style={{ fontWeight: 500 }}>
              <Heart size={16} /> Save
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div id="photos">
          <Gallery photos={PHOTOS} onShowPhotos={() => setShowPhotoTour(true)} />
        </div>

        {/* Split layout: Left content + Right booking widget */}
        <div className="main-content border-bottom">
          <MainContent />
          <BookingWidget />
        </div>
        
        <ReviewsSection />

        {/* Full-width sections below (no booking widget) */}
        <div id="location">
          <BottomSections photos={PHOTOS} />
        </div>
      </main>

      {/* Photo Tour Overlay */}
      {showPhotoTour && (
        <PhotoTour 
          photos={PHOTOS} 
          onClose={() => setShowPhotoTour(false)} 
          onPhotoClick={setLightboxIndex} 
        />
      )}

      {/* Lightbox Overlay */}
      <Lightbox 
        photos={PHOTOS} 
        index={lightboxIndex} 
        setIndex={setLightboxIndex} 
        onClose={() => setLightboxIndex(null)} 
      />
    </>
  );
}
