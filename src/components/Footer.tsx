import React from 'react';
import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CLINIC_CONFIG } from '../config/clinic';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2A32] text-white">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-24 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandLogo variant="horizontal" tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#CBE8F1]/75">
              {CLINIC_CONFIG.specialty}. Atención clínica cercana y detallada para cuidar tu salud
              visual en Ocaña.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#CBE8F1]">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <a href="#inicio" className="transition-colors hover:text-[#CBE8F1]">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-[#CBE8F1]">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#reservar" className="transition-colors hover:text-[#CBE8F1]">
                  Agendar cita
                </a>
              </li>
              <li>
                <a href="#especialista" className="transition-colors hover:text-[#CBE8F1]">
                  Especialista
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="transition-colors hover:text-[#CBE8F1]">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#CBE8F1]">
              Contacto Directo
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#49A699]" />
                <span>{CLINIC_CONFIG.fullAddress}</span>
              </li>
              <li>
                <a
                  href={CLINIC_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#CBE8F1]"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-[#4B9EB8]" />
                  <span>{CLINIC_CONFIG.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={CLINIC_CONFIG.whatsappQrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#CBE8F1]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#49A699]" />
                  <span>Reservas y consultas por WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-white/55 sm:flex-row">
          <p>
            © {year} {CLINIC_CONFIG.brandName}. Todos los derechos reservados.
          </p>
          <p>Ocaña, Norte de Santander · Colombia</p>
        </div>
      </div>
    </footer>
  );
};
