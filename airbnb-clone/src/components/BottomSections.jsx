import React from 'react';
import { Search, Plus, Minus, Star, User, Shield, Calendar, Key, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BottomSections({ photos }) {
  const coHosts = ['Sharath', 'Aman Dev Pahwa', 'Maria Karen Priyanka', 'Simran', 'Pallavi', 'Sanyukta', 'Shruti', 'Amisha'];
  const coHostColors = ['#555', '#777', '#999', '#666', '#888', '#aaa', '#4ade80', '#7c3aed'];

  return (
    <>
      {/* ── Where you'll be ── */}
      <section className="border-bottom py-12">
        <h2 className="text-2xl mb-2">Where you'll be</h2>
        <p className="text-base mb-6">Candolim, Goa, India</p>
        <div className="map-placeholder">
          <div className="map-water"></div>
          <div className="map-blob-1"></div>
          <div className="map-blob-2"></div>
          <div className="map-pin">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <div className="map-search"><Search size={16} color="#222" /></div>
          <div className="map-zoom">
            <button><Plus size={16} /></button>
            <button><Minus size={16} /></button>
          </div>
        </div>
        <p className="text-base mt-6">Exact location will be provided after booking.</p>
        <h3 style={{ fontSize: 18, fontWeight: 600 }} className="mt-8 mb-2">Neighbourhood highlights</h3>
        <p className="text-base mb-4">Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p>
        <div style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', gap: 4 }}>
          Show more <ChevronRight size={16} />
        </div>
      </section>

      {/* ── Meet your host ── */}
      <section className="border-bottom py-12">
        <h2 className="text-2xl mb-6">Meet your host</h2>
        <div className="flex gap-8" style={{ alignItems: 'flex-start' }}>
          {/* Left: Host card */}
          <div className="host-card">
            <div className="host-profile">
              <div className="host-avatar-large">
                MH
                <div className="host-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginTop: 12 }}>Mirashya<br/>Homes</h3>
              <span className="text-sm" style={{ fontWeight: 500 }}>Host</span>
            </div>
            <div className="host-stats">
              <div className="host-stat">
                <div style={{ fontSize: 22, fontWeight: 700 }}>1,463</div>
                <div className="text-xs" style={{ fontWeight: 500 }}>Reviews</div>
              </div>
              <div className="host-stat">
                <div className="flex items-center gap-1" style={{ fontSize: 22, fontWeight: 700 }}>4.68<Star size={14} fill="#222" /></div>
                <div className="text-xs" style={{ fontWeight: 500 }}>Rating</div>
              </div>
              <div className="host-stat">
                <div style={{ fontSize: 22, fontWeight: 700 }}>2</div>
                <div className="text-xs" style={{ fontWeight: 500 }}>Years hosting</div>
              </div>
            </div>
          </div>

          {/* Right: Co-hosts & details */}
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }} className="mb-4">Co-Hosts</h3>
            <div className="cohosts-grid mb-8">
              {coHosts.map((name, i) => (
                <div className="flex items-center gap-3" key={i}>
                  <div className="review-avatar" style={{ background: coHostColors[i], width: 36, height: 36, fontSize: 14 }}>{name[0]}</div>
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: 18, fontWeight: 600 }} className="mb-4">Host details</h3>
            <p className="text-base mb-1">Response rate: 100%</p>
            <p className="text-base mb-6">Responds within an hour</p>
            <button className="btn-outline mb-8">Message host</button>
            <div className="flex gap-3 items-start text-sm text-gray border-top" style={{ paddingTop: 24 }}>
              <Shield size={24} strokeWidth={1.5} style={{ flexShrink: 0 }} />
              <p style={{ lineHeight: 1.4 }}>To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <User size={24} strokeWidth={1.5} color="#717171" />
            <span className="text-base">Born in the 80s</span>
          </div>
          <div className="flex items-center gap-4">
            <Shield size={24} strokeWidth={1.5} color="#717171" />
            <span className="text-base">Where I went to school: NICMAR GOA</span>
          </div>
        </div>
      </section>

      {/* ── Things to know ── */}
      <section className="border-bottom py-12">
        <h2 className="text-2xl mb-8">Things to know</h2>
        <div className="grid-3-col">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={28} strokeWidth={1.2} />
            </div>
            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Cancellation policy</h4>
            <p className="text-base mb-2">Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p>
            <p className="text-base mb-4">Review this host's full policy for details.</p>
            <span style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', fontSize: 14 }}>Learn more</span>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Key size={28} strokeWidth={1.2} />
            </div>
            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>House rules</h4>
            <p className="text-base mb-2">Check-in after 2:00 pm</p>
            <p className="text-base mb-2">Checkout before 11:00 am</p>
            <p className="text-base mb-4">3 guests maximum</p>
            <span style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', fontSize: 14 }}>Learn more</span>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield size={28} strokeWidth={1.2} />
            </div>
            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Safety & property</h4>
            <p className="text-base mb-2">Carbon monoxide alarm not reported</p>
            <p className="text-base mb-2">Smoke alarm not reported</p>
            <p className="text-base mb-4">Exterior security cameras on property</p>
            <span style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', fontSize: 14 }}>Learn more</span>
          </div>
        </div>
      </section>

      {/* ── More stays nearby ── */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl">More stays nearby</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm">1 / 2</span>
            <div className="flex gap-2">
              <button className="btn-round" style={{ border: '1px solid var(--border-light)' }}><ChevronLeft size={16}/></button>
              <button className="btn-round" style={{ border: '1px solid var(--border-light)' }}><ChevronRight size={16}/></button>
            </div>
          </div>
        </div>
        <div className="carousel">
          {[
            { title: 'Beautiful Studio with a view to die for', price: '₹23,600', rating: '4.91' },
            { title: 'NAQAB - 1bhk with private pool', price: '₹42,218', rating: '4.95' },
            { title: 'Greentique Luxury Flat with plunge pool, Calangute', price: '₹44,506', rating: '4.94' },
            { title: 'The Tropical Studio | 5 mins to Beach', price: '₹22,824', rating: '4.96' },
            { title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute', price: '₹39,942', rating: '4.95' }
          ].map((stay, i) => (
            <div key={i} className="carousel-card cursor-pointer">
              <img src={photos[i % photos.length]} alt={stay.title} className="carousel-img" />
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }} className="truncate">{stay.title}</div>
              <div className="text-sm" style={{ fontWeight: 600 }}>{stay.price}</div>
              <div className="text-sm flex items-center gap-1 mt-1"><Star size={12} fill="currentColor" /> {stay.rating}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
