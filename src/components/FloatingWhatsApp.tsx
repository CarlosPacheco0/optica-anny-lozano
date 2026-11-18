import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="#reservar"
      aria-label="Agendar cita por WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#49A699] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(17,61,71,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#388D81] sm:bottom-6 sm:right-6 sm:px-5"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Agendar cita</span>
    </a>
  );
};
