import React, { useState } from 'react';
import { Star, ChevronRight, ChevronLeft, Utensils, Wifi, Monitor, Car, Waves, Bath, PawPrint, Video, BellOff, Flame, X, Wind, Shirt, Bed, Moon, Box, Archive, Baby, Tv, Coffee, Sun, Speaker, Book, Gamepad2 } from 'lucide-react';

export default function MainContent() {
  const [showAmenitiesModal, setShowAmenitiesModal] = useState(false);

  const ratings = [
    { label: 'Cleanliness', score: 4.9 },
    { label: 'Accuracy', score: 5.0 },
    { label: 'Communication', score: 5.0 },
    { label: 'Location', score: 4.8 },
    { label: 'Check-in', score: 5.0 },
    { label: 'Value', score: 4.8 }
  ];



  const allAmenities = [
    {
      title: 'Bathroom',
      items: [
        { name: 'Shower gel', icon: <Bath size={24} strokeWidth={1.5} /> },
        { name: 'Hot water', icon: <Waves size={24} strokeWidth={1.5} /> },
        { name: 'Hair dryer', icon: <Wind size={24} strokeWidth={1.5} /> },
        { name: 'Shampoo', icon: <Bath size={24} strokeWidth={1.5} /> },
        { name: 'Conditioner', icon: <Bath size={24} strokeWidth={1.5} /> },
        { name: 'Body soap', icon: <Bath size={24} strokeWidth={1.5} /> },
      ]
    },
    {
      title: 'Bedroom and laundry',
      items: [
        { name: 'Washing machine', icon: <Wind size={24} strokeWidth={1.5} /> },
        { name: 'Hangers', icon: <Shirt size={24} strokeWidth={1.5} /> },
        { name: 'Bed linen', icon: <Bed size={24} strokeWidth={1.5} /> },
        { name: 'Room-darkening blinds', icon: <Moon size={24} strokeWidth={1.5} /> },
        { name: 'Iron', icon: <Box size={24} strokeWidth={1.5} /> },
        { name: 'Clothes storage', icon: <Archive size={24} strokeWidth={1.5} /> },
        { name: 'Cot', icon: <Baby size={24} strokeWidth={1.5} /> },
      ]
    },
    {
      title: 'Entertainment',
      items: [
        { name: 'TV', icon: <Tv size={24} strokeWidth={1.5} /> },
        { name: 'Bluetooth sound system', icon: <Speaker size={24} strokeWidth={1.5} /> },
        { name: 'Books and reading material', icon: <Book size={24} strokeWidth={1.5} /> },
        { name: 'Board games', icon: <Gamepad2 size={24} strokeWidth={1.5} /> },
        { name: 'Gaming console', icon: <Gamepad2 size={24} strokeWidth={1.5} /> },
      ]
    },
    {
      title: 'Internet and office',
      items: [
        { name: 'Wifi', icon: <Wifi size={24} strokeWidth={1.5} /> },
        { name: 'Dedicated workspace', icon: <Monitor size={24} strokeWidth={1.5} /> },
        { name: 'Pocket wifi', icon: <Wifi size={24} strokeWidth={1.5} /> },
        { name: 'Ethernet connection', icon: <Wifi size={24} strokeWidth={1.5} /> },
        { name: 'Ergonomic office chair', icon: <Monitor size={24} strokeWidth={1.5} /> },
      ]
    },
    {
      title: 'Kitchen and dining',
      items: [
        { name: 'Kitchen', icon: <Utensils size={24} strokeWidth={1.5} /> },
        { name: 'Fridge', icon: <Archive size={24} strokeWidth={1.5} /> },
        { name: 'Freezer', icon: <Archive size={24} strokeWidth={1.5} /> },
        { name: 'Microwave', icon: <Monitor size={24} strokeWidth={1.5} /> },
        { name: 'Cooking basics', icon: <Utensils size={24} strokeWidth={1.5} /> },
        { name: 'Crockery and cutlery', icon: <Utensils size={24} strokeWidth={1.5} /> },
        { name: 'Kettle', icon: <Coffee size={24} strokeWidth={1.5} /> },
      ]
    },
    {
      title: 'Outdoor and location',
      items: [
        { name: 'Patio or balcony', icon: <Sun size={24} strokeWidth={1.5} /> },
        { name: 'Shared pool', icon: <Waves size={24} strokeWidth={1.5} /> },
        { name: 'Outdoor furniture', icon: <Box size={24} strokeWidth={1.5} /> },
        { name: 'Outdoor dining area', icon: <Utensils size={24} strokeWidth={1.5} /> },
        { name: 'BBQ grill', icon: <Flame size={24} strokeWidth={1.5} /> },
      ]
    }
  ];

  return (
    <>
      <div className="main-left">
        {/* Description */}
        <div className="border-bottom py-8">
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#222' }}>
            🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind.<br/>
            Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴
          </p>
          <div className="mt-4" style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            Show less <ChevronRight size={18} />
          </div>
        </div>

        {/* Where you'll sleep */}
        <div className="border-bottom py-10">
          <h2 className="mb-6" style={{ fontSize: '22px', fontWeight: 600 }}>Where you'll sleep</h2>
          <div className="flex gap-4">
            <div style={{ flex: 1 }}>
              <img src="/room_bedroom.jpeg" alt="Bedroom" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }} />
              <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '4px' }}>Bedroom</div>
              <div style={{ color: '#222', fontSize: '14px' }}>1 double bed</div>
            </div>
            <div style={{ flex: 1 }}>
              <img src="/room_living_room.jpeg" alt="Living room" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }} />
              <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '4px' }}>Living room</div>
              <div style={{ color: '#222', fontSize: '14px' }}>1 sofa</div>
            </div>
          </div>
        </div>

        {/* What this place offers */}
        <div id="amenities" className="border-bottom py-10">
          <h2 className="mb-6" style={{ fontSize: '22px', fontWeight: 600 }}>What this place offers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 16px', marginBottom: '32px' }}>
            <div className="flex items-center gap-4"><Utensils size={24} strokeWidth={1.5} /> <span style={{ fontSize: '16px', color: '#222' }}>Kitchen</span></div>
            <div className="flex items-center gap-4"><Wifi size={24} strokeWidth={1.5} /> <span style={{ fontSize: '16px', color: '#222' }}>Wifi</span></div>
            <div className="flex items-center gap-4"><Monitor size={24} strokeWidth={1.5} /> <span style={{ fontSize: '16px', color: '#222' }}>Dedicated workspace</span></div>
            <div className="flex items-center gap-4"><Car size={24} strokeWidth={1.5} /> <span style={{ fontSize: '16px', color: '#222' }}>Free parking on premises</span></div>
            <div className="flex items-center gap-4"><Waves size={24} strokeWidth={1.5} /> <span style={{ fontSize: '16px', color: '#222' }}>Pool</span></div>
            <div className="flex items-center gap-4"><Bath size={24} strokeWidth={1.5} /> <span style={{ fontSize: '16px', color: '#222' }}>Hot tub</span></div>
            <div className="flex items-center gap-4"><PawPrint size={24} strokeWidth={1.5} /> <span style={{ fontSize: '16px', color: '#222' }}>Pets allowed</span></div>
            <div className="flex items-center gap-4"><Video size={24} strokeWidth={1.5} /> <span style={{ fontSize: '16px', color: '#222' }}>Exterior security cameras on property</span></div>
            <div className="flex items-center gap-4 text-gray" style={{ textDecoration: 'line-through' }}><BellOff size={24} strokeWidth={1.5} /> <span style={{ fontSize: '16px' }}>Carbon monoxide alarm</span></div>
            <div className="flex items-center gap-4 text-gray" style={{ textDecoration: 'line-through' }}><Flame size={24} strokeWidth={1.5} /> <span style={{ fontSize: '16px' }}>Smoke alarm</span></div>
          </div>
          <button className="btn-outline" onClick={() => setShowAmenitiesModal(true)}>Show all 50 amenities</button>
        </div>

        {/* Calendar */}
        <div className="border-bottom py-10">
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px' }}>5 nights in Candolim</h2>
          <div style={{ color: '#717171', fontSize: '14px', marginBottom: '24px' }}>18 Oct 2026 - 23 Oct 2026</div>
          
          <div className="flex gap-8">
            {/* October 2026 */}
            <div style={{ flex: 1 }}>
              <div className="flex items-center justify-between mb-4">
                <button className="btn-round" style={{ width: '32px', height: '32px' }}><ChevronLeft size={20} /></button>
                <div style={{ fontWeight: 600, fontSize: '16px' }}>October 2026</div>
                <div style={{ width: '32px' }}></div> {/* Spacer */}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#717171', marginBottom: '16px' }}>
                <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px 0', textAlign: 'center', fontSize: '14px', fontWeight: 500 }}>
                {/* Empty days */}
                <div></div><div></div><div></div><div></div>
                <div style={{ padding: '12px 0' }}>1</div><div style={{ padding: '12px 0' }}>2</div><div style={{ padding: '12px 0' }}>3</div>
                <div style={{ padding: '12px 0' }}>4</div><div style={{ padding: '12px 0' }}>5</div><div style={{ padding: '12px 0' }}>6</div><div style={{ padding: '12px 0' }}>7</div><div style={{ padding: '12px 0' }}>8</div><div style={{ padding: '12px 0' }}>9</div><div style={{ padding: '12px 0' }}>10</div>
                <div style={{ padding: '12px 0' }}>11</div><div style={{ padding: '12px 0' }}>12</div><div style={{ padding: '12px 0' }}>13</div><div style={{ padding: '12px 0' }}>14</div><div style={{ padding: '12px 0' }}>15</div><div style={{ padding: '12px 0' }}>16</div><div style={{ padding: '12px 0' }}>17</div>
                {/* Selected Range */}
                <div style={{ background: '#222', color: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>18</div>
                <div style={{ background: '#f7f7f7', width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>19</div>
                <div style={{ background: '#f7f7f7', width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>20</div>
                <div style={{ background: '#f7f7f7', width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>21</div>
                <div style={{ background: '#f7f7f7', width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>22</div>
                <div style={{ background: '#222', color: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>23</div>
                <div style={{ padding: '12px 0' }}>24</div>
                <div style={{ padding: '12px 0' }}>25</div><div style={{ padding: '12px 0' }}>26</div><div style={{ padding: '12px 0' }}>27</div><div style={{ padding: '12px 0' }}>28</div><div style={{ padding: '12px 0' }}>29</div><div style={{ padding: '12px 0' }}>30</div><div style={{ padding: '12px 0' }}>31</div>
              </div>
            </div>
            
            {/* November 2026 */}
            <div style={{ flex: 1 }}>
              <div className="flex items-center justify-between mb-4">
                <div style={{ width: '32px' }}></div> {/* Spacer */}
                <div style={{ fontWeight: 600, fontSize: '16px' }}>November 2026</div>
                <button className="btn-round" style={{ width: '32px', height: '32px' }}><ChevronRight size={20} /></button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#717171', marginBottom: '16px' }}>
                <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px 0', textAlign: 'center', fontSize: '14px', fontWeight: 500 }}>
                <div style={{ padding: '12px 0' }}>1</div><div style={{ padding: '12px 0' }}>2</div><div style={{ padding: '12px 0' }}>3</div><div style={{ padding: '12px 0' }}>4</div><div style={{ padding: '12px 0' }}>5</div><div style={{ padding: '12px 0' }}>6</div><div style={{ padding: '12px 0' }}>7</div>
                <div style={{ padding: '12px 0' }}>8</div><div style={{ padding: '12px 0' }}>9</div><div style={{ padding: '12px 0' }}>10</div><div style={{ padding: '12px 0' }}>11</div><div style={{ padding: '12px 0' }}>12</div><div style={{ padding: '12px 0' }}>13</div><div style={{ padding: '12px 0' }}>14</div>
                <div style={{ padding: '12px 0' }}>15</div><div style={{ padding: '12px 0' }}>16</div><div style={{ padding: '12px 0' }}>17</div><div style={{ padding: '12px 0', color: '#b0b0b0' }}>18</div><div style={{ padding: '12px 0', color: '#b0b0b0' }}>19</div><div style={{ padding: '12px 0', color: '#b0b0b0' }}>20</div><div style={{ padding: '12px 0', color: '#b0b0b0' }}>21</div>
                <div style={{ padding: '12px 0', color: '#b0b0b0' }}>22</div><div style={{ padding: '12px 0', color: '#b0b0b0' }}>23</div><div style={{ padding: '12px 0', color: '#b0b0b0' }}>24</div><div style={{ padding: '12px 0' }}>25</div><div style={{ padding: '12px 0' }}>26</div><div style={{ padding: '12px 0' }}>27</div><div style={{ padding: '12px 0' }}>28</div>
                <div style={{ padding: '12px 0', color: '#b0b0b0' }}>29</div><div style={{ padding: '12px 0', color: '#b0b0b0' }}>30</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <div style={{ color: '#222' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <div style={{ fontSize: '14px', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Clear dates</div>
          </div>
        </div>


      </div>

      {/* Amenities Modal */}
      {showAmenitiesModal && (
        <div className="modal-backdrop" onClick={() => setShowAmenitiesModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="btn-round" onClick={() => setShowAmenitiesModal(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px' }}>What this place offers</h2>
              {allAmenities.map((category, i) => (
                <div key={i}>
                  <div className="amenity-category">{category.title}</div>
                  {category.items.map((item, j) => (
                    <div key={j} className="amenity-item">
                      {item.icon}
                      <span style={{ fontSize: '16px', color: '#222' }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
