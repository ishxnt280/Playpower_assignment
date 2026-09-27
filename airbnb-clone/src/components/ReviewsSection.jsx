import React from 'react';
import { Star, CheckCircle, Key, MessageCircle, Map, Tag, Sparkles, Sofa, Bed, Droplets, Gift, Box } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    { name: 'Amit', time: '2 months on Airbnb', date: '1 week ago', text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.', color: '#fcd34d' },
    { name: 'Aheesh', time: '3 years on Airbnb', date: '2 weeks ago', text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.', img: '/room_bedroom.jpeg' },
    { name: 'Samiksha', time: '8 months on Airbnb', date: 'May 2026', text: 'the host nitish was really great help', img: '/room_living_room.jpeg' },
    { name: 'Vedant', time: '4 years on Airbnb', date: 'May 2026', text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....', color: '#e9d5ff' },
    { name: 'Vaibhav S', time: '3 years on Airbnb', date: 'May 2026', text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.", img: '/room_gym.jpeg' },
    { name: 'Mohd', time: '5 years on Airbnb', date: 'May 2026', text: 'Great place. Exactly as described in the listing.', img: '/room_bathroom.jpeg' }
  ];

  return (
    <div id="reviews" className="py-12 border-bottom">
      {/* Top Banner */}
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="flex items-center gap-4 justify-center">
          <svg viewBox="0 0 32 32" width="60" height="60" style={{ transform: 'scaleX(-1)' }}><path d="M12.63 26c-1 0-2.32-.47-2.95-1.5-.72-1.18-.5-2.73.52-3.75a6.45 6.45 0 0 1 4.36-1.78l1.37-.1-1.37-2a6.56 6.56 0 0 1-1-5 4.35 4.35 0 0 1 2.3-2.92l.82-.4-1-.5a6 6 0 0 1-2.92-3.8 4.26 4.26 0 0 1 .63-3.4 3 3 0 0 1 1.77-1.18 4.14 4.14 0 0 1 3.4.63 6 6 0 0 1 2.52 4l.32 1.5.32-1.5a6 6 0 0 1 2.52-4 4.14 4.14 0 0 1 3.4-.63 3 3 0 0 1 1.77 1.18 4.26 4.26 0 0 1 .63 3.4 6 6 0 0 1-2.92 3.8l-1 .5.82.4a4.35 4.35 0 0 1 2.3 2.92 6.56 6.56 0 0 1-1 5l-1.37 2 1.37.1a6.45 6.45 0 0 1 4.36 1.78c1.02 1.02 1.24 2.57.52 3.75-.63 1.03-1.95 1.5-2.95 1.5z" fill="#222"/></svg>
          <div style={{ fontSize: '96px', fontWeight: 800, letterSpacing: '-4px', lineHeight: 1 }}>4.95</div>
          <svg viewBox="0 0 32 32" width="60" height="60"><path d="M12.63 26c-1 0-2.32-.47-2.95-1.5-.72-1.18-.5-2.73.52-3.75a6.45 6.45 0 0 1 4.36-1.78l1.37-.1-1.37-2a6.56 6.56 0 0 1-1-5 4.35 4.35 0 0 1 2.3-2.92l.82-.4-1-.5a6 6 0 0 1-2.92-3.8 4.26 4.26 0 0 1 .63-3.4 3 3 0 0 1 1.77-1.18 4.14 4.14 0 0 1 3.4.63 6 6 0 0 1 2.52 4l.32 1.5.32-1.5a6 6 0 0 1 2.52-4 4.14 4.14 0 0 1 3.4-.63 3 3 0 0 1 1.77 1.18 4.26 4.26 0 0 1 .63 3.4 6 6 0 0 1-2.92 3.8l-1 .5.82.4a4.35 4.35 0 0 1 2.3 2.92 6.56 6.56 0 0 1-1 5l-1.37 2 1.37.1a6.45 6.45 0 0 1 4.36 1.78c1.02 1.02 1.24 2.57.52 3.75-.63 1.03-1.95 1.5-2.95 1.5z" fill="#222"/></svg>
        </div>
        <div style={{ fontSize: '22px', fontWeight: 600, marginTop: '8px' }}>Guest favourite</div>
        <div style={{ fontSize: '16px', color: '#717171', marginTop: '8px', maxWidth: '400px' }}>This home is a guest favourite based on ratings, reviews and reliability</div>
        <div style={{ fontSize: '14px', fontWeight: 600, textDecoration: 'underline', marginTop: '12px', cursor: 'pointer' }}>How reviews work</div>
      </div>

      {/* 7 Columns Ratings Grid */}
      <div className="flex w-full mb-10 overflow-x-auto pb-4" style={{ gap: '0', border: 'none' }}>
        {/* Column 1: Overall rating bars */}
        <div style={{ flex: '1.2', minWidth: '150px', paddingRight: '24px', borderRight: '1px solid var(--border-light)' }}>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>Overall rating</div>
          <div className="flex flex-col gap-1">
            {[5, 4, 3, 2, 1].map((val) => (
              <div key={val} className="flex items-center gap-2">
                <span style={{ fontSize: '12px', width: '8px' }}>{val}</span>
                <div style={{ flex: 1, height: '4px', background: '#ddd', borderRadius: '2px', position: 'relative' }}>
                  {val === 5 && <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '95%', background: '#222', borderRadius: '2px' }}></div>}
                  {val === 4 && <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '5%', background: '#222', borderRadius: '2px' }}></div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other 6 Columns */}
        {[
          { label: 'Cleanliness', score: '5.0', icon: <Sparkles size={32} strokeWidth={1} /> },
          { label: 'Accuracy', score: '5.0', icon: <CheckCircle size={32} strokeWidth={1} /> },
          { label: 'Check-in', score: '5.0', icon: <Key size={32} strokeWidth={1} /> },
          { label: 'Communication', score: '5.0', icon: <MessageCircle size={32} strokeWidth={1} /> },
          { label: 'Location', score: '4.8', icon: <Map size={32} strokeWidth={1} /> },
          { label: 'Value', score: '4.8', icon: <Tag size={32} strokeWidth={1} /> }
        ].map((col, idx) => (
          <div key={idx} style={{ flex: 1, minWidth: '110px', paddingLeft: '24px', borderRight: idx < 5 ? '1px solid var(--border-light)' : 'none' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>{col.label}</div>
            <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>{col.score}</div>
            <div>{col.icon}</div>
          </div>
        ))}
      </div>

      {/* Pill Tags */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { label: 'Comfort', count: 6, icon: <Sofa size={16} /> },
          { label: 'Accuracy', count: 5, icon: <CheckCircle size={16} color="green" /> },
          { label: 'Hot tub', count: 5, icon: <Droplets size={16} color="brown" /> },
          { label: 'Condition', count: 4, icon: <Box size={16} color="red" /> },
          { label: 'Hospitality', count: 8, icon: <Gift size={16} color="pink" /> },
          { label: 'Cleanliness', count: 4, icon: <Sparkles size={16} color="blue" /> },
          { label: 'Amenities', count: 2, icon: <Bed size={16} color="gray" /> }
        ].map((pill, i) => (
          <div key={i} className="flex items-center gap-2" style={{ padding: '10px 16px', border: '1px solid var(--border-light)', borderRadius: '24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
            {pill.icon} {pill.label} <span style={{ fontWeight: 400, color: '#717171' }}>{pill.count}</span>
          </div>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 80px' }}>
        {reviews.map((review, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="review-avatar" style={{ background: review.color || '#ddd', overflow: 'hidden' }}>
                {review.img ? <img src={review.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="User" /> : review.name[0]}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{review.name}</div>
                <div className="text-sm text-gray">{review.time}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="#222" color="#222" />)}
              </div>
              <span>· {review.date}</span>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.5 }}>{review.text}</p>
            {review.text.length > 120 && (
              <div style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', fontSize: 16 }}>Show more</div>
            )}
          </div>
        ))}
      </div>
      
      <button className="btn-outline mt-10">Show all 19 reviews</button>
    </div>
  );
}
