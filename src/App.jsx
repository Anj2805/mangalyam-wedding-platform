import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCard, { serviceList } from './components/ServiceCard';
import TrustBar from './components/TrustBar';
import {
  AuthModal,
  BookingModal,
  WishlistDrawer,
  DownloadAppModal,
} from './components/Modals';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleBookNow = () => {
    setSelectedService(null);
    setBookingModalOpen(true);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    setBookingModalOpen(true);
  };

  const handleRemoveWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
    showToast('Item removed from wishlist');
  };

  return (
    <div className="mangalyam-root">
      {/* Main Header */}
      <Header
        onOpenAuth={() => setAuthModalOpen(true)}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
      />

      <main className="main-content">
        {/* Hero Section */}
        <Hero onBookNow={handleBookNow} />

        {/* 6 Service Cards Row Floating over the imagery */}
        <section className="services-section" id="services" aria-label="Celebration Services">
          <div className="services-container">
            <div className="services-cards-grid">
              {serviceList.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onSelect={handleSelectService}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Trust Indicators & App Download Bar */}
      <TrustBar onDownloadApp={() => setDownloadModalOpen(true)} />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedService={selectedService}
      />

      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        items={wishlist}
        onRemoveItem={handleRemoveWishlist}
      />

      <DownloadAppModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification" role="status">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
