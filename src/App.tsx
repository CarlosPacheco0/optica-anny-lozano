import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BookingSection } from './components/BookingSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CLINIC_SERVICES, type ClinicService } from './config/clinic';

export function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(CLINIC_SERVICES[0].id);
  const [bookingNote, setBookingNote] = useState<string>('');

  const handleSelectServiceForBooking = (service: ClinicService) => {
    setSelectedServiceId(service.id);
    const el = document.getElementById('reservar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#113D47]">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection
          selectedServiceId={selectedServiceId}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />
        <BookingSection
          selectedServiceId={selectedServiceId}
          onChangeServiceId={setSelectedServiceId}
          prefilledNote={bookingNote}
          onChangeNote={setBookingNote}
        />
        <AboutSection />
        <FaqSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
