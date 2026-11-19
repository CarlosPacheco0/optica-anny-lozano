import React, { useState, useEffect } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Test Visual", href: "#test-visual" },
  { label: "Especialista", href: "#especialista" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Ubicación", href: "#ubicacion" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-[0_6px_30px_rgba(15,76,129,0.06)] border-b border-[#0F4C81]/10 py-2.5 sm:py-3"
          : "bg-[#F8FAFC]/85 backdrop-blur-sm py-3.5 sm:py-4"
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
        <nav
          className="hidden items-center gap-5 lg:gap-7 md:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#1E293B]/80 transition-colors hover:text-[#0D9488]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#reservar"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0D9488] to-[#0F766E] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#0D9488]/30 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#0D9488]/40 active:scale-[0.98]"
          >
            <CalendarCheck className="h-4 w-4 text-white" />
            Agendar cita
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#0F4C81] transition-colors hover:bg-[#E1EFF9] md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile backdrop & menu panel */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 top-[60px] z-40 bg-[#092338]/40 backdrop-blur-[2px] md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-50 border-t border-[#E2E8F0] bg-white px-4 pb-6 pt-3 shadow-xl md:hidden">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-[#1E293B] transition-colors hover:bg-[#F0F7FD] hover:text-[#0D9488]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 border-t border-[#E2E8F0] pt-4">
              <a
                href="#reservar"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0D9488] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0F766E]"
              >
                <CalendarCheck className="h-4 w-4 text-white" />
                Agendar cita por WhatsApp
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
