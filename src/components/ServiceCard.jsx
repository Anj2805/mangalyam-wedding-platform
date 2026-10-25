import React from 'react';

// Custom hand-crafted SVG icons matching the reference image's golden motif art
export const ServiceIcons = {
  marriageHalls: (
    <svg viewBox="0 0 48 48" className="service-svg-icon" fill="none">
      {/* Central dome */}
      <path d="M24 8 C22 13 18 16 18 20 L30 20 C30 16 26 13 24 8 Z" fill="#8C6527" stroke="#A87A32" strokeWidth="1.2" />
      <line x1="24" y1="5" x2="24" y2="8" stroke="#A87A32" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="5" r="1.5" fill="#8C6527" />
      {/* Left side dome */}
      <path d="M12 14 C10 17 8 19 8 22 L16 22 C16 19 14 17 12 14 Z" fill="#8C6527" />
      {/* Right side dome */}
      <path d="M36 14 C34 17 32 19 32 22 L40 22 C40 19 38 17 36 14 Z" fill="#8C6527" />
      {/* Archway & Roof beam */}
      <rect x="6" y="22" width="36" height="3" rx="1" fill="#8C6527" />
      {/* Pillars */}
      <rect x="9" y="25" width="3" height="13" rx="0.5" fill="#8C6527" />
      <rect x="17" y="25" width="2.5" height="13" rx="0.5" fill="#8C6527" />
      <rect x="28.5" y="25" width="2.5" height="13" rx="0.5" fill="#8C6527" />
      <rect x="36" y="25" width="3" height="13" rx="0.5" fill="#8C6527" />
      {/* Central arched entrance */}
      <path d="M20 38 L20 30 C20 27 28 27 28 30 L28 38 Z" fill="none" stroke="#8C6527" strokeWidth="1.2" />
      {/* Base steps */}
      <rect x="6" y="38" width="36" height="2.5" rx="1" fill="#8C6527" />
      <rect x="4" y="40.5" width="40" height="2.5" rx="1" fill="#8C6527" />
    </svg>
  ),

  resorts: (
    <svg viewBox="0 0 48 48" className="service-svg-icon" fill="none">
      {/* Rising Sun */}
      <circle cx="20" cy="18" r="6" stroke="#A87A32" strokeWidth="1.2" strokeDasharray="2 1.5" />
      {/* Tall Palm Tree Trunk */}
      <path d="M28 40 C27 30 25 24 23 15" stroke="#8C6527" strokeWidth="2.5" strokeLinecap="round" />
      {/* Tall Palm Fronds */}
      <path d="M23 15 C20 10 13 11 10 14" stroke="#8C6527" strokeWidth="2" strokeLinecap="round" />
      <path d="M23 15 C25 9 32 9 35 12" stroke="#8C6527" strokeWidth="2" strokeLinecap="round" />
      <path d="M23 15 C19 14 14 18 13 22" stroke="#8C6527" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M23 15 C27 15 33 18 34 23" stroke="#8C6527" strokeWidth="1.8" strokeLinecap="round" />
      {/* Second Palm Tree */}
      <path d="M34 40 C35 32 36 26 38 18" stroke="#8C6527" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 18 C36 14 30 14 27 16" stroke="#8C6527" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M38 18 C40 13 45 14 47 16" stroke="#8C6527" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M38 18 C41 20 44 24 43 27" stroke="#8C6527" strokeWidth="1.5" strokeLinecap="round" />
      {/* Island Shore Hill */}
      <path d="M8 41 C16 38 32 38 42 41" stroke="#8C6527" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  caterers: (
    <svg viewBox="0 0 48 48" className="service-svg-icon" fill="none">
      {/* Cloche Handle */}
      <circle cx="24" cy="14" r="3" fill="#8C6527" />
      <rect x="23" y="16" width="2" height="3" fill="#8C6527" />
      {/* Cloche Dome */}
      <path d="M10 33 C10 20 38 20 38 33 Z" fill="#8C6527" />
      {/* Platter Rim */}
      <rect x="6" y="34" width="36" height="3" rx="1.5" fill="#8C6527" />
      {/* Platter Base */}
      <rect x="14" y="37" width="20" height="2" rx="1" fill="#A87A32" />
    </svg>
  ),

  hotels: (
    <svg viewBox="0 0 48 48" className="service-svg-icon" fill="none">
      {/* Bed Headboard */}
      <rect x="8" y="14" width="4" height="26" rx="1.5" fill="#8C6527" />
      <rect x="10" y="20" width="30" height="4" rx="1" fill="#8C6527" />
      {/* Pillows */}
      <rect x="14" y="23" width="9" height="5" rx="2" fill="#8C6527" />
      <rect x="25" y="23" width="9" height="5" rx="2" fill="#8C6527" />
      {/* Mattress / Duvet */}
      <path d="M12 29 L38 29 C40 29 41 31 41 33 L41 38 L12 38 Z" fill="#8C6527" />
      {/* Footboard / Right Leg */}
      <rect x="38" y="26" width="4" height="14" rx="1.5" fill="#8C6527" />
    </svg>
  ),

  photographers: (
    <svg viewBox="0 0 48 48" className="service-svg-icon" fill="none">
      {/* Camera Body */}
      <path d="M9 18 C9 15.8 10.8 14 13 14 L17 14 L19 11 L29 11 L31 14 L35 14 C37.2 14 39 15.8 39 18 L39 36 C39 38.2 37.2 40 35 40 L13 40 C10.8 40 9 38.2 9 36 Z" fill="#8C6527" />
      {/* Flash / Sensor */}
      <circle cx="34" cy="18" r="1.8" fill="#F8E7C9" />
      {/* Outer Lens Ring */}
      <circle cx="24" cy="27" r="8" fill="#F8E7C9" />
      {/* Inner Lens */}
      <circle cx="24" cy="27" r="5.5" fill="#8C6527" />
      {/* Lens Reflection */}
      <circle cx="22" cy="25" r="1.5" fill="#F8E7C9" />
    </svg>
  ),

  decorators: (
    <svg viewBox="0 0 48 48" className="service-svg-icon" fill="none">
      {/* Central Floral Motif */}
      <circle cx="24" cy="20" r="3.5" fill="#8C6527" />
      {/* Floral Petals around center */}
      <circle cx="24" cy="13" r="2.5" fill="#8C6527" />
      <circle cx="24" cy="27" r="2.5" fill="#8C6527" />
      <circle cx="17" cy="20" r="2.5" fill="#8C6527" />
      <circle cx="31" cy="20" r="2.5" fill="#8C6527" />
      <circle cx="19" cy="15" r="2" fill="#A87A32" />
      <circle cx="29" cy="15" r="2" fill="#A87A32" />
      <circle cx="19" cy="25" r="2" fill="#A87A32" />
      <circle cx="29" cy="25" r="2" fill="#A87A32" />
      {/* Hanging Garland Leaves / Bells */}
      <path d="M14 28 C14 36 24 38 24 38 C24 38 34 36 34 28" stroke="#8C6527" strokeWidth="1.5" strokeLinecap="round" />
      {/* Hanging Drops */}
      <circle cx="18" cy="36" r="1.5" fill="#8C6527" />
      <circle cx="24" cy="41" r="2" fill="#8C6527" />
      <circle cx="30" cy="36" r="1.5" fill="#8C6527" />
    </svg>
  ),
};

export const serviceList = [
  {
    id: 'marriage-halls',
    title: 'MARRIAGE HALLS',
    description: 'Find the perfect venue for your special day',
    iconKey: 'marriageHalls',
  },
  {
    id: 'resorts',
    title: 'RESORTS',
    description: 'Luxurious resorts for a memorable celebration',
    iconKey: 'resorts',
  },
  {
    id: 'caterers',
    title: 'CATERERS',
    description: 'Delicious menus crafted for your events',
    iconKey: 'caterers',
  },
  {
    id: 'hotels',
    title: 'HOTELS',
    description: 'Comfortable stays for you and your guests',
    iconKey: 'hotels',
  },
  {
    id: 'photographers',
    title: 'PHOTOGRAPHERS',
    description: 'Capture every moment beautifully forever',
    iconKey: 'photographers',
  },
  {
    id: 'decorators',
    title: 'DECORATORS',
    description: 'Stunning décor that brings your dreams to life',
    iconKey: 'decorators',
  },
];

export default function ServiceCard({ service, onSelect }) {
  return (
    <div
      className="service-card"
      onClick={() => onSelect(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect(service);
        }
      }}
      aria-label={`${service.title} service card`}
    >
      {/* Corner Accents */}
      <div className="card-corner corner-tl" aria-hidden="true">
        <svg viewBox="0 0 16 16" className="corner-svg" fill="none">
          <path d="M2 14 C2 7.4 7.4 2 14 2" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="6" cy="6" r="1.5" fill="#C5A059" />
        </svg>
      </div>
      <div className="card-corner corner-tr" aria-hidden="true">
        <svg viewBox="0 0 16 16" className="corner-svg" fill="none">
          <path d="M2 14 C2 7.4 7.4 2 14 2" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="6" cy="6" r="1.5" fill="#C5A059" />
        </svg>
      </div>
      <div className="card-corner corner-bl" aria-hidden="true">
        <svg viewBox="0 0 16 16" className="corner-svg" fill="none">
          <path d="M2 14 C2 7.4 7.4 2 14 2" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="6" cy="6" r="1.5" fill="#C5A059" />
        </svg>
      </div>
      <div className="card-corner corner-br" aria-hidden="true">
        <svg viewBox="0 0 16 16" className="corner-svg" fill="none">
          <path d="M2 14 C2 7.4 7.4 2 14 2" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="6" cy="6" r="1.5" fill="#C5A059" />
        </svg>
      </div>

      {/* Service Icon */}
      <div className="card-icon-wrapper">
        {ServiceIcons[service.iconKey]}
      </div>

      {/* Service Title */}
      <h3 className="card-title">{service.title}</h3>

      {/* Service Description */}
      <p className="card-description">{service.description}</p>

      {/* Bottom Flourish */}
      <div className="card-ornament-wrapper" aria-hidden="true">
        <svg viewBox="0 0 130 14" className="card-ornament-svg" fill="none">
          <circle cx="8" cy="7" r="1.5" fill="#C5A059" />
          <line x1="12" y1="7" x2="46" y2="7" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" />
          <path d="M46 7 C49 4, 53 4, 55 7 C53 10, 49 10, 46 7" stroke="#C5A059" strokeWidth="0.9" fill="none" />
          <path d="M65 2 C63.5 4.5, 62 6, 59 7 C62 8, 63.5 9.5, 65 12 C66.5 9.5, 68 8, 71 7 C68 6, 66.5 4.5, 65 2 Z" fill="#C5A059" />
          <path d="M59 7 C56.5 5.5, 53.5 5.5, 51.5 7 C53.5 8.5, 56.5 8.5, 59 7" fill="#C5A059" />
          <path d="M71 7 C73.5 5.5, 76.5 5.5, 78.5 7 C76.5 8.5, 73.5 8.5, 71 7" fill="#C5A059" />
          <path d="M84 7 C81 4, 77 4, 75 7 C77 10, 81 10, 84 7" stroke="#C5A059" strokeWidth="0.9" fill="none" />
          <line x1="84" y1="7" x2="118" y2="7" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" />
          <circle cx="122" cy="7" r="1.5" fill="#C5A059" />
        </svg>
      </div>
    </div>
  );
}
