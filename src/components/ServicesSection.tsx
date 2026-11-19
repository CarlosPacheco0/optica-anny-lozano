import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Eye,
  CircleDot,
  Microscope,
  Glasses,
  Smile,
  FileCheck2,
  Clock,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { CLINIC_SERVICES, type ClinicService } from '../config/clinic';

interface ServicesSectionProps {
  selectedServiceId: string;
  onSelectServiceForBooking: (service: ClinicService) => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'optometria-integral': <Eye className="h-5 w-5" />,
  'lentes-de-contacto': <CircleDot className="h-5 w-5" />,
  'segmento-anterior': <Microscope className="h-5 w-5" />,
  'asesoria-optica': <Glasses className="h-5 w-5" />,
  'control-infantil': <Smile className="h-5 w-5" />,
  'certificados-visuales': <FileCheck2 className="h-5 w-5" />,
};

const SERVICE_IMAGES: Record<string, string> = {
  'optometria-integral': `${import.meta.env.BASE_URL}images/service-optometria.jpg`,
  'lentes-de-contacto': `${import.meta.env.BASE_URL}images/service-contactologia.jpg`,
  'segmento-anterior': `${import.meta.env.BASE_URL}images/service-segmento.jpg`,
  'asesoria-optica': `${import.meta.env.BASE_URL}images/service-asesoria.jpg`,
  'control-infantil': `${import.meta.env.BASE_URL}images/service-infantil.jpg`,
  'certificados-visuales': `${import.meta.env.BASE_URL}images/service-certificados.jpg`,
};

// Codificación por color según la categoría clínica
const SERVICE_THEMES: Record<
  string,
  {
    tagStyle: string;
    iconGradient: string;
    topStripe: string;
    checkColor: string;
  }
> = {
  'optometria-integral': {
    tagStyle: 'bg-[#E1EFF9] text-[#0F4C81] border border-[#0F4C81]/25',
    iconGradient: 'bg-gradient-to-br from-[#0F4C81] to-[#1E65A4] text-white shadow-[#0F4C81]/30',
    topStripe: 'bg-[#0F4C81]',
    checkColor: 'text-[#0F4C81]',
  },
  'lentes-de-contacto': {
    tagStyle: 'bg-[#CCFBF1] text-[#0F766E] border border-[#0D9488]/30',
    iconGradient: 'bg-gradient-to-br from-[#0D9488] to-[#0F766E] text-white shadow-[#0D9488]/30',
    topStripe: 'bg-[#0D9488]',
    checkColor: 'text-[#0D9488]',
  },
  'segmento-anterior': {
    tagStyle: 'bg-[#CCFBF1] text-[#0F766E] border border-[#0D9488]/30',
    iconGradient: 'bg-gradient-to-br from-[#0D9488] to-[#0F766E] text-white shadow-[#0D9488]/30',
    topStripe: 'bg-gradient-to-r from-[#0F4C81] to-[#0D9488]',
    checkColor: 'text-[#0D9488]',
  },
  'asesoria-optica': {
    tagStyle: 'bg-slate-100 text-[#1E293B] border border-slate-300',
    iconGradient: 'bg-gradient-to-br from-[#1E293B] to-[#475569] text-white shadow-slate-900/20',
    topStripe: 'bg-gradient-to-r from-[#0F4C81] to-[#334155]',
    checkColor: 'text-[#0F4C81]',
  },
  'control-infantil': {
    tagStyle: 'bg-[#E0F2FE] text-[#0369A1] border border-[#0284C7]/30',
    iconGradient: 'bg-gradient-to-br from-[#0284C7] to-[#0369A1] text-white shadow-[#0284C7]/30',
    topStripe: 'bg-[#0284C7]',
    checkColor: 'text-[#0284C7]',
  },
  'certificados-visuales': {
    tagStyle: 'bg-slate-100 text-[#1E293B] border border-slate-300',
    iconGradient: 'bg-gradient-to-br from-[#1E293B] to-[#475569] text-white shadow-slate-900/20',
    topStripe: 'bg-[#0F4C81]',
    checkColor: 'text-[#0F4C81]',
  },
};

// Inclinaciones distintivas alternadas: Card 1 rota hacia adentro (derecha) para que su esquina nunca se corte
const CARD_TILTS = [
  'rotate-1 sm:rotate-[1.5deg] translate-y-1 sm:translate-y-1.5',
  '-rotate-1 sm:-rotate-[1.75deg] -translate-y-1 sm:-translate-y-2',
  'rotate-[0.75deg] sm:rotate-[1.35deg] translate-y-1 sm:translate-y-2',
  '-rotate-1 sm:-rotate-2 -translate-y-0.5 sm:-translate-y-1.5',
  'rotate-1 sm:rotate-[1.75deg] translate-y-0.5 sm:translate-y-1',
  '-rotate-[0.75deg] sm:-rotate-[1.35deg] -translate-y-0.5 sm:-translate-y-1',
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedServiceId,
  onSelectServiceForBooking,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);

    const firstCard = el.querySelector('article');
    if (firstCard) {
      const cardStep = firstCard.clientWidth + 24;
      const idx = Math.round(el.scrollLeft / cardStep);
      setActiveIndex(Math.max(0, Math.min(CLINIC_SERVICES.length - 1, idx)));
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(updateScrollState, 120);
    window.addEventListener('resize', updateScrollState);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollTrack = (direction: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.querySelector('article');
    const step = firstCard ? firstCard.clientWidth + 24 : 340;
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  const scrollToCard = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('article');
    const target = cards[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  };

  return (
    <section id="servicios" className="relative overflow-hidden bg-white py-16 sm:py-24 border-t border-slate-200/70">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#0F4C81]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Editorial header + deck navigation */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0F4C81]/15 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F4C81] shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#0D9488]" />
              Catálogo Clínico
            </span>
            <h2 className="mt-4 font-editorial text-4xl font-semibold leading-tight tracking-tight text-[#0F4C81] sm:text-5xl">
              Cuidado visual especializado para cada etapa
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#475569]">
              Cada consulta está diseñada con equipamiento moderno, tiempo dedicado y un enfoque
              100% clínico para cuidar la salud de tus ojos en Ocaña.
            </p>
          </div>

          {/* Desktop horizontal deck arrows */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollTrack('left')}
              disabled={!canScrollLeft}
              aria-label="Servicios anteriores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-[#0F4C81] shadow-xs transition-all hover:border-[#0F4C81] hover:bg-[#F0F7FD] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTrack('right')}
              disabled={!canScrollRight}
              aria-label="Siguientes servicios"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-[#0F4C81] shadow-xs transition-all hover:border-[#0F4C81] hover:bg-[#F0F7FD] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal cards track with alternating distinctive tilts and generous padding */}
        <div className="relative mt-4 sm:mt-6">
          <div
            ref={trackRef}
            onScroll={updateScrollState}
            className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto px-4 sm:px-6 py-10 sm:py-12"
          >
            {CLINIC_SERVICES.map((service, index) => {
              const isSelected = selectedServiceId === service.id;
              const isExpanded = expandedId === service.id;
              const theme =
                SERVICE_THEMES[service.id] ?? SERVICE_THEMES['optometria-integral'];
              const imageUrl =
                SERVICE_IMAGES[service.id] ??
                `${import.meta.env.BASE_URL}images/service-optometria.jpg`;

              // Distinctive tilt: straightens on hover or when selected
              const tiltClass =
                isExpanded || isSelected
                  ? 'rotate-0 -translate-y-3 z-20 shadow-2xl'
                  : CARD_TILTS[index % CARD_TILTS.length];

              return (
                <article
                  key={service.id}
                  className={`group relative flex w-[85vw] max-w-[320px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[2.25rem] border transition-all duration-300 ease-out sm:w-[335px] sm:max-w-none ${tiltClass} hover:z-20 hover:rotate-0 hover:-translate-y-3 hover:scale-[1.02] ${
                    isSelected
                      ? 'border-2 border-[#0D9488] bg-white ring-4 ring-[#0D9488]/20 shadow-[0_26px_55px_rgba(13,148,136,0.22)]'
                      : 'border border-[#CBD5E1] bg-white shadow-[0_10px_28px_rgba(15,76,129,0.06)] hover:border-[#0F4C81]/50 hover:shadow-[0_20px_45px_rgba(15,76,129,0.14)]'
                  }`}
                >
                  {/* Top clinical accent stripe */}
                  <div className={`h-2 w-full ${theme.topStripe}`} />

                  {/* Photographic Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={imageUrl}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Floating Category Tag on Image Top-Left */}
                    <span
                      className={`absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-wide shadow-sm backdrop-blur-md ${theme.tagStyle}`}
                    >
                      {service.tag}
                    </span>

                    {/* Floating Icon badge on image bottom-right */}
                    <div
                      className={`absolute bottom-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-xl shadow-lg ring-2 ring-white/90 transition-transform group-hover:scale-110 ${
                        isSelected
                          ? 'bg-[#0D9488] text-white shadow-[#0D9488]/40'
                          : theme.iconGradient
                      }`}
                    >
                      {SERVICE_ICONS[service.id] ?? <Eye className="h-5 w-5" />}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="font-editorial text-[1.45rem] sm:text-[1.55rem] font-semibold leading-snug text-[#0F4C81] group-hover:text-[#0D9488] transition-colors">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#475569]">
                        {service.shortDescription}
                      </p>

                      {/* Expandable "Qué incluye" */}
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={() => setExpandedId(isExpanded ? null : service.id)}
                          aria-expanded={isExpanded}
                          className="inline-flex items-center gap-1.5 py-1 text-xs font-bold text-[#0F4C81] transition-colors hover:text-[#0D9488]"
                        >
                          <span>
                            {isExpanded ? 'Ocultar detalle' : 'Ver qué incluye la consulta'}
                          </span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <ul className="mt-3 space-y-2 border-l-2 border-[#0D9488]/30 pl-3.5 animate-in fade-in duration-200">
                            {service.highlights.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs leading-relaxed text-[#1E293B]"
                              >
                                <Check
                                  className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${theme.checkColor}`}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="mt-6 flex items-center justify-between gap-2 border-t border-[#E2E8F0] pt-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B]">
                        <Clock className="h-3.5 w-3.5 text-[#0D9488]" />
                        {service.duration}
                      </span>

                      <button
                        type="button"
                        onClick={() => onSelectServiceForBooking(service)}
                        className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                          isSelected
                            ? 'bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/30 scale-[1.02]'
                            : 'bg-[#0F4C81] text-white shadow-xs hover:bg-[#0D9488] hover:scale-[1.02]'
                        }`}
                      >
                        {isSelected ? 'Seleccionado' : 'Reservar'}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Mobile indicators & arrows */}
          <div className="mt-4 flex items-center justify-between sm:hidden">
            <div className="flex items-center gap-1.5">
              {CLINIC_SERVICES.map((service, idx) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Ver ${service.title}`}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === idx ? 'w-6 bg-[#0D9488]' : 'w-2 bg-[#CBD5E1]'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#64748B]">
                {activeIndex + 1} / {CLINIC_SERVICES.length}
              </span>
              <button
                type="button"
                onClick={() => scrollTrack('left')}
                disabled={!canScrollLeft}
                aria-label="Servicio anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-[#0F4C81] disabled:opacity-35"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTrack('right')}
                disabled={!canScrollRight}
                aria-label="Siguiente servicio"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-[#0F4C81] disabled:opacity-35"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
