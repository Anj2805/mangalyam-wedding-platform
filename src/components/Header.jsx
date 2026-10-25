import React, { useState } from 'react';
import { Phone, Heart, Menu, X } from 'lucide-react';

export default function Header({ onOpenAuth, wishlistCount, onOpenWishlist }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'VENUES', href: '#venues' },
    { label: 'PACKAGES', href: '#packages' },
    { label: 'BLOG', href: '#blog' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveNav(item.label);
    setMobileMenuOpen(false);
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Left: Brand Mini Logo (Approved Asset) */}
        <a href="#home" className="header-logo-link" aria-label="Mangalyam Home">
          <img
            src="/images/mangalyamLogo.png"
            alt="Mangalyam Logo"
            className="header-logo-img"
          />
        </a>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeNav === item.label ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Phone, Wishlist, Login/Signup */}
        <div className="header-right">
          <a href="tel:18001234567" className="phone-contact" title="Call Toll Free">
            <Phone className="phone-icon" size={16} />
            <span className="phone-number">1800 123 4567</span>
          </a>

          <button
            type="button"
            className="wishlist-btn"
            onClick={onOpenWishlist}
            aria-label="View Wishlist"
            title="Wishlist"
          >
            <Heart size={20} className="heart-icon" />
            {wishlistCount > 0 && (
              <span className="wishlist-badge">{wishlistCount}</span>
            )}
          </button>

          <button
            type="button"
            className="btn-burgundy btn-login"
            onClick={onOpenAuth}
          >
            LOGIN / SIGNUP
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${activeNav === item.label ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <a href="tel:18001234567" className="mobile-phone-link">
              <Phone size={16} /> 1800 123 4567
            </a>
            <button
              type="button"
              className="btn-burgundy w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
            >
              LOGIN / SIGNUP
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
