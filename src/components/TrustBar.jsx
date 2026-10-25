import React from 'react';

export default function TrustBar({ onDownloadApp }) {
  const trustItems = [
    {
      id: 'verified',
      title: 'ALL VERIFIED',
      subtitle: 'PROFESSIONALS',
      icon: (
        <svg viewBox="0 0 32 32" className="trust-svg-icon" fill="none">
          <path
            d="M16 4 L26 8 V16 C26 22 21.5 26.5 16 28 C10.5 26.5 6 22 6 16 V8 L16 4 Z"
            fill="#8C6527"
          />
          <path
            d="M12 16 L15 19 L21 13"
            stroke="#FBF7EE"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 'prices',
      title: 'BEST PRICES',
      subtitle: 'GUARANTEED',
      icon: (
        <svg viewBox="0 0 32 32" className="trust-svg-icon" fill="none">
          <path
            d="M8 8 L17 8 L27 18 C28 19 28 20.5 27 21.5 L21.5 27 C20.5 28 19 28 18 27 L8 17 L8 8 Z"
            fill="#8C6527"
          />
          <circle cx="12" cy="12" r="2" fill="#FBF7EE" />
        </svg>
      ),
    },
    {
      id: 'easy-booking',
      title: 'EASY BOOKING',
      subtitle: 'IN FEW CLICKS',
      icon: (
        <svg viewBox="0 0 32 32" className="trust-svg-icon" fill="none">
          {/* Finger touching target */}
          <path
            d="M15 15 L15 8 C15 6.8 15.9 6 17 6 C18.1 6 19 6.8 19 8 L19 15"
            stroke="#8C6527"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M19 12 C19.8 12 20.5 12.6 20.5 13.5 L20.5 16"
            stroke="#8C6527"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M20.5 14 C21.3 14 22 14.6 22 15.5 L22 18"
            stroke="#8C6527"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M15 12 C14.5 12 13 13 13 15 L13 18 C13 22 16 26 21 26 C25 26 26 22 26 19 L26 16 C26 15 25 14 24 14"
            fill="#8C6527"
          />
          {/* Ripple Click Rings */}
          <path
            d="M11 6 C8 9 8 13 10 16"
            stroke="#A87A32"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 4 C4 8 4 15 7 19"
            stroke="#A87A32"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 'customers',
      title: '1000+ HAPPY',
      subtitle: 'CUSTOMERS',
      icon: (
        <svg viewBox="0 0 32 32" className="trust-svg-icon" fill="none">
          {/* Center customer */}
          <circle cx="16" cy="11" r="3.5" fill="#8C6527" />
          <path
            d="M10 24 C10 19.5 12.5 18 16 18 C19.5 18 22 19.5 22 24 Z"
            fill="#8C6527"
          />
          {/* Left customer */}
          <circle cx="9" cy="13" r="2.8" fill="#A87A32" />
          <path
            d="M4 24 C4 20.5 6.5 19.5 9 19.5 C10 19.5 11 20 11.5 20.8"
            stroke="#A87A32"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Right customer */}
          <circle cx="23" cy="13" r="2.8" fill="#A87A32" />
          <path
            d="M28 24 C28 20.5 25.5 19.5 23 19.5 C22 19.5 21 20 20.5 20.8"
            stroke="#A87A32"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="site-footer-bar">
      <div className="footer-bar-inner">
        {/* 4 Trust Badges */}
        <div className="trust-indicators-group">
          {trustItems.map((item) => (
            <div key={item.id} className="trust-item">
              <div className="trust-icon-box">{item.icon}</div>
              <div className="trust-text">
                <span className="trust-title">{item.title}</span>
                <span className="trust-subtitle">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Far Right: Download App Pill Button with Google Play & Apple Logos */}
        <button
          type="button"
          className="btn-burgundy btn-download-app"
          onClick={onDownloadApp}
          aria-label="Download Mangalyam App on Google Play and Apple App Store"
        >
          <span className="download-text">DOWNLOAD APP</span>
          <div className="app-store-icons">
            {/* Google Play Triangle */}
            <svg
              viewBox="0 0 24 24"
              className="store-logo-icon play-icon"
              fill="currentColor"
              title="Google Play"
            >
              <path d="M4 3.5v17l14.2-8.5L4 3.5zm2 3.1l8.9 5.4-8.9 5.4V6.6z" />
            </svg>
            {/* Apple Logo */}
            <svg
              viewBox="0 0 24 24"
              className="store-logo-icon apple-icon"
              fill="currentColor"
              title="Apple App Store"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.36c.62-.77 1.05-1.84.93-2.91-.91.04-2.02.61-2.67 1.38-.58.68-1.09 1.77-.96 2.82 1.02.08 2.08-.52 2.7-1.29z" />
            </svg>
          </div>
        </button>
      </div>
    </footer>
  );
}
