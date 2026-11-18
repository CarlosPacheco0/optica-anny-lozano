import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Especialista', href: '#especialista' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Ubicación', href: '#ubicacion' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-md shadow-[0_6px_30px_rgba(17,61,71,0.06)] border-b border-[#113D47]/8 py-2.5 sm:py-3'
          : 'bg-white/75 backdrop-blur-sm py-3.5 sm:py-4'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          onClick={() => setIsOpen(false)}
          className="focus:outline-none"
          aria-label="Inicio Dra. Anny Lozano Santos"
        >
          <BrandLogo variant="horizontal" tone="dark" />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#113D47]/80 transition-colors hover:text-[#4B9EB8]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#reservar"
            className="inline-flex items-center gap-2 rounded-full bg-[#113D47] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#194E5A] hover:shadow-md active:scale-[0.98]"
          >
            <CalendarCheck className="h-4 w-4 text-[#CBE8F1]" />
            Agendar cita
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#113D47] transition-colors hover:bg-[#EAF6FA] md:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile backdrop & menu panel */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 top-[60px] z-40 bg-[#0B2A32]/25 backdrop-blur-[2px] md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-50 border-t border-[#113D47]/10 bg-white px-4 pb-6 pt-3 shadow-xl md:hidden">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-[#113D47] transition-colors hover:bg-[#F3FAFC] hover:text-[#4B9EB8]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 border-t border-[#113D47]/10 pt-4">
              <a
                href="#reservar"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#113D47] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#194E5A]"
              >
                <CalendarCheck className="h-4 w-4 text-[#CBE8F1]" />
                Agendar cita por WhatsApp
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
