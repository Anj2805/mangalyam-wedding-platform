import React, { useState } from 'react';
import { X, Check, Heart, Sparkles } from 'lucide-react';

export function AuthModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('login');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <img
            src="/images/mangalyamLogo.png"
            alt="Mangalyam"
            className="modal-brand-logo"
          />
          <h2 className="modal-title">Welcome to Mangalyam</h2>
          <p className="modal-subtitle">One platform for your sacred celebrations</p>
        </div>

        <div className="modal-tabs">
          <button
            type="button"
            className={`modal-tab ${tab === 'login' ? 'active' : ''}`}
            onClick={() => setTab('login')}
          >
            Login
          </button>
          <button
            type="button"
            className={`modal-tab ${tab === 'signup' ? 'active' : ''}`}
            onClick={() => setTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-icon-bubble">
              <Check size={28} />
            </div>
            <h3>{tab === 'login' ? 'Logged in successfully!' : 'Account created!'}</h3>
            <p>Welcome back to Mangalyam celebrations.</p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="auth-ident">Mobile Number or Email</label>
              <input
                id="auth-ident"
                type="text"
                placeholder="Enter 10-digit mobile or email"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="auth-pass">Password</label>
              <input
                id="auth-pass"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-burgundy w-full submit-btn">
              {tab === 'login' ? 'Sign In' : 'Create Account'}
            </button>

            <p className="modal-disclaimer">
              By proceeding, you agree to Mangalyam's Terms of Service & Privacy Policy.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export function BookingModal({ isOpen, onClose, selectedService }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Bangalore',
    eventDate: '',
    guests: '300-500',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1400);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-icon-badge">
            <Sparkles size={24} />
          </div>
          <h2 className="modal-title">
            {selectedService ? `Book ${selectedService.title}` : 'Plan Your Celebration'}
          </h2>
          <p className="modal-subtitle">
            Get personalized packages & best verified partner quotes
          </p>
        </div>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-icon-bubble">
              <Check size={28} />
            </div>
            <h3>Inquiry Received!</h3>
            <p>Our celebration specialist will call you within 15 minutes.</p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="book-name">Your Full Name</label>
              <input
                id="book-name"
                type="text"
                placeholder="e.g. Anjali Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="book-phone">Phone Number</label>
              <input
                id="book-phone"
                type="tel"
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="book-city">City / Destination</label>
                <select
                  id="book-city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                >
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Mysore">Mysore</option>
                  <option value="Goa">Goa</option>
                  <option value="Udaipur">Udaipur</option>
                  <option value="Other">Other Cities</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="book-date">Expected Date</label>
                <input
                  id="book-date"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-burgundy w-full submit-btn">
              Get Instant Quotes & Availability
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function WishlistDrawer({ isOpen, onClose, items, onRemoveItem }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box wishlist-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close wishlist"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <Heart size={24} className="modal-heart-icon" />
          <h2 className="modal-title">Your Celebration Wishlist</h2>
          <p className="modal-subtitle">Saved venues, caterers & decorators</p>
        </div>

        <div className="wishlist-content">
          {items.length === 0 ? (
            <div className="empty-wishlist">
              <p>Your wishlist is currently empty.</p>
              <span>Click on any service card to explore and save your favorites!</span>
            </div>
          ) : (
            <ul className="wishlist-list">
              {items.map((item) => (
                <li key={item.id} className="wishlist-item-row">
                  <div>
                    <h4 className="wishlist-item-title">{item.title}</h4>
                    <p className="wishlist-item-desc">{item.description}</p>
                  </div>
                  <button
                    type="button"
                    className="wishlist-remove-btn"
                    onClick={() => onRemoveItem(item.id)}
                    title="Remove item"
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export function DownloadAppModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box download-modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <img
            src="/images/mangalyamLogo.png"
            alt="Mangalyam"
            className="modal-brand-logo"
          />
          <h2 className="modal-title">Get the Mangalyam App</h2>
          <p className="modal-subtitle">
            Plan, shortlist mandaps, chat with caterers, and manage your wedding guest lists on the go.
          </p>
        </div>

        <div className="download-qr-row">
          <div className="qr-card">
            {/* Elegant SVG QR Mockup */}
            <svg viewBox="0 0 100 100" width="120" height="120" className="qr-svg">
              <rect width="100" height="100" fill="#FAF6EE" rx="8" />
              {/* Corner markers */}
              <rect x="10" y="10" width="24" height="24" fill="#5B1924" rx="3" />
              <rect x="14" y="14" width="16" height="16" fill="#FAF6EE" />
              <rect x="18" y="18" width="8" height="8" fill="#5B1924" />

              <rect x="66" y="10" width="24" height="24" fill="#5B1924" rx="3" />
              <rect x="70" y="14" width="16" height="16" fill="#FAF6EE" />
              <rect x="74" y="18" width="8" height="8" fill="#5B1924" />

              <rect x="10" y="66" width="24" height="24" fill="#5B1924" rx="3" />
              <rect x="14" y="70" width="16" height="16" fill="#FAF6EE" />
              <rect x="18" y="74" width="8" height="8" fill="#5B1924" />

              {/* Data dots */}
              <rect x="42" y="12" width="6" height="6" fill="#8C6527" />
              <rect x="52" y="18" width="6" height="6" fill="#8C6527" />
              <rect x="44" y="28" width="6" height="6" fill="#5B1924" />
              <rect x="54" y="38" width="8" height="6" fill="#8C6527" />
              <rect x="20" y="44" width="8" height="8" fill="#8C6527" />
              <rect x="36" y="50" width="6" height="6" fill="#5B1924" />
              <rect x="48" y="64" width="6" height="8" fill="#8C6527" />
              <rect x="68" y="54" width="8" height="6" fill="#8C6527" />
              <rect x="80" y="44" width="6" height="8" fill="#5B1924" />
              <rect x="72" y="74" width="8" height="8" fill="#8C6527" />
            </svg>
            <span className="qr-hint">Scan with phone camera</span>
          </div>

          <div className="store-buttons-col">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn google-play-btn"
            >
              <div className="store-badge-text">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </div>
            </a>
            <a
              href="https://apple.com/app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn app-store-btn"
            >
              <div className="store-badge-text">
                <small>Download on the</small>
                <strong>Apple App Store</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
