import React from 'react';
import { Tag, ChevronDown } from 'lucide-react';

export default function BookingWidget() {
  return (
    <div className="main-right">
      <div className="promo-box mb-6" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div className="flex items-center gap-4">
          <div style={{ color: '#4CAF50', transform: 'rotate(-45deg)', display: 'flex' }}>
            <Tag size={22} fill="#4CAF50" />
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: '15px' }}>Get 10% off your next stay.</div>
            <div className="text-sm cursor-pointer" style={{ color: '#222', textDecoration: 'underline', fontWeight: 600 }}>Terms apply</div>
          </div>
        </div>
        <button className="btn-outline" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '14px' }}>Claim</button>
      </div>

      <div className="booking-widget-wrapper">
        <div className="booking-widget">
        <h3 className="mb-4" style={{ fontSize: '22px', fontWeight: 600 }}>
          <span style={{ textDecoration: 'underline' }}>₹28,499</span> <span className="text-base font-normal">for 5 nights</span>
        </h3>
        
        <div style={{ border: '1px solid var(--text-gray)', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--text-gray)' }}>
            <div style={{ flex: 1, padding: '10px 12px', borderRight: '1px solid var(--text-gray)' }}>
              <div style={{ fontSize: '10px', fontWeight: 700 }}>CHECK-IN</div>
              <div style={{ fontSize: '14px' }}>10/18/2026</div>
            </div>
            <div style={{ flex: 1, padding: '10px 12px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700 }}>CHECKOUT</div>
              <div style={{ fontSize: '14px' }}>10/23/2026</div>
            </div>
          </div>
          <div style={{ padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '10px', fontWeight: 700 }}>GUESTS</div>
              <div style={{ fontSize: '14px' }}>2 guests</div>
            </div>
            <ChevronDown size={20} />
          </div>
        </div>

        <div style={{ backgroundColor: '#f7f7f7', borderRadius: '8px', padding: '12px', textAlign: 'center', fontSize: '14px', marginBottom: '16px' }}>
          Free cancellation before <span style={{ fontWeight: 600 }}>17 October</span>
        </div>

        <button className="btn-primary w-full" style={{ padding: '14px', fontSize: '16px', fontWeight: 600, background: '#e31c5f' }}>Reserve</button>
        <div className="text-center text-sm mt-4" style={{ color: '#222' }}>You won't be charged yet</div>
      </div>
      
        <div className="text-center mt-6">
          <span className="text-gray cursor-pointer hover:underline" style={{ textDecoration: 'underline', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg> Report this listing
          </span>
        </div>
      </div>
    </div>
  );
}
