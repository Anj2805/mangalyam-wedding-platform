import React from 'react';
import { ShieldCheck, Tag, Headphones } from 'lucide-react';

export default function Hero({ onBookNow }) {
  return (
    <section className="hero-section" id="home">

      <div className="hero-content-wrapper">
        {/* Left Column: Platform Headline */}
        <div className="hero-col hero-left">
          <h1 className="hero-main-title">
            <span className="title-line">ONE PLATFORM</span>
            <span className="title-line">FOR EVERY CELEBRATION</span>
          </h1>

          {/* Golden Traditional Indian Flourish Divider */}
          <div className="ornamental-flourish" aria-hidden="true">
            <svg width="180" height="18" viewBox="0 0 180 18" fill="none">
              <path
                d="M10 9H70M110 9H170"
                stroke="#C5A059"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="70" cy="9" r="2" fill="#C5A059" />
              <circle cx="110" cy="9" r="2" fill="#C5A059" />
              {/* Center Floral Motif */}
              <circle cx="90" cy="9" r="3.5" fill="#8C6527" stroke="#C5A059" strokeWidth="1" />
              <path
                d="M90 2 C87 5 87 7 90 9 C93 7 93 5 90 2 Z"
                fill="#C5A059"
              />
              <path
                d="M90 16 C87 13 87 11 90 9 C93 11 93 13 90 16 Z"
                fill="#C5A059"
              />
              <path
                d="M83 9 C86 6 88 6 90 9 C88 12 86 12 83 9 Z"
                fill="#C5A059"
              />
              <path
                d="M97 9 C94 6 92 6 90 9 C92 12 94 12 97 9 Z"
                fill="#C5A059"
              />
            </svg>
          </div>

          <p className="hero-tagline">
            Book. Plan. Celebrate. All in One Place.
          </p>
        </div>

        {/* Center Column: Grand Ornate Mangalyam Medallion Logo */}
        <div className="hero-col hero-center">
          <div className="logo-medallion-container">
            <div className="medallion-glow" />
            <img
              src="/images/mangalyamLogo.png"
              alt="Mangalyam - Kannada Calligraphy and Ornate Seal"
              className="mangalyam-central-logo"
            />
          </div>
        </div>

        {/* Right Column: Booking Headline, Script & Call to Action */}
        <div className="hero-col hero-right">
          <div className="booking-cta-box">
            <h2 className="booking-lead-text">
              BOOK EVERYTHING FOR YOUR
            </h2>
            <div className="script-accent-text">
              Special Day
            </div>

            <button
              type="button"
              className="btn-burgundy btn-book-now"
              onClick={onBookNow}
            >
              BOOK NOW
            </button>

            {/* 3 Mini Trust Badges */}
            <div className="hero-mini-badges">
              <div className="mini-badge-item">
                <ShieldCheck size={16} className="badge-icon" />
                <span>Verified Partners</span>
              </div>
              <div className="mini-badge-item">
                <Tag size={16} className="badge-icon" />
                <span>Best Prices</span>
              </div>
              <div className="mini-badge-item">
                <Headphones size={16} className="badge-icon" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
