import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ClinicalPillarsBanner } from './components/ClinicalPillarsBanner';
import { VisualQuizSection } from './components/VisualQuizSection';
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

  const handleSelectServiceFromQuiz = (serviceId: string, note?: string) => {
    setSelectedServiceId(serviceId);
    if (note) {
      setBookingNote(note);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection
          selectedServiceId={selectedServiceId}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />
        <ClinicalPillarsBanner />
        <VisualQuizSection onSelectServiceForBooking={handleSelectServiceFromQuiz} />
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
