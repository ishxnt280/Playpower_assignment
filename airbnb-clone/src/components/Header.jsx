import React from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';
import logoImg from '../assets/airbnb_logo.png';

export default function Header() {
  return (
    <header className="header" style={{ width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 80px' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <img src={logoImg} alt="Airbnb Logo" style={{ height: '32px', objectFit: 'contain' }} />
          <span style={{ fontWeight: 800, fontSize: '23px', letterSpacing: '-0.8px', color: 'var(--primary)', fontFamily: "'Nunito', sans-serif", marginBottom: '2px' }}>airbnb</span>
        </div>
        <div className="search-bar">
          <span style={{ fontSize: '18px', marginRight: '8px' }}>🏡</span>
          <span style={{ paddingRight: 16, fontWeight: 600 }}>Anywhere</span>
          <div className="search-divider"></div>
          <span style={{ paddingRight: 16, fontWeight: 600 }}>Anytime</span>
          <div className="search-divider"></div>
          <span style={{ color: 'var(--text-gray)', fontWeight: 400 }}>Add guests</span>
          <div className="search-btn"><Search size={14} strokeWidth={3} /></div>
        </div>
        <div className="header-right" style={{ gap: '12px' }}>
          <div className="host-link cursor-pointer" style={{ fontWeight: 600, paddingRight: '12px' }}>Become a host</div>
          <div className="globe-btn cursor-pointer" style={{ backgroundColor: '#f5f5f5', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Globe size={18} /></div>
          <div className="user-menu cursor-pointer" style={{ backgroundColor: '#f5f5f5', border: 'none', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0, borderRadius: '50%' }}>
            <Menu size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
