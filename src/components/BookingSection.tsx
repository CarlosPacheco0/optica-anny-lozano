import React, { useState } from 'react';
import {
  MessageCircle,
  CalendarDays,
  Sun,
  Sunset,
  Clock,
  CheckCircle2,
  Send,
  User,
  FileText,
  Stethoscope,
} from 'lucide-react';
import {
  CLINIC_CONFIG,
  CLINIC_SERVICES,
  buildWhatsAppUrl,
  formatBookingMessage,
} from '../config/clinic';

interface BookingSectionProps {
  selectedServiceId: string;
  onChangeServiceId: (id: string) => void;
  prefilledNote: string;
  onChangeNote: (note: string) => void;
}

const SHIFTS = [
  { id: 'Mañana (8:00 a.m. - 12:00 m.)', label: 'Mañana', icon: Sun },
  { id: 'Tarde (2:00 p.m. - 6:00 p.m.)', label: 'Tarde', icon: Sunset },
  { id: 'Cualquier horario disponible', label: 'Flexible', icon: Clock },
] as const;

const BOOKING_STEPS = [
  {
    step: '01',
    title: 'Elige servicio y preferencia',
    desc: 'Selecciona el tipo de consulta y la jornada que prefieres.',
  },
  {
    step: '02',
    title: 'Envía el mensaje listo a WhatsApp',
    desc: 'Se abrirá tu chat con los datos ya ordenados, sin escribir desde cero.',
  },
  {
    step: '03',
    title: 'Confirmación personalizada',
    desc: 'Te respondemos con los horarios disponibles y dejamos tu cita separada.',
  },
];

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServiceId,
  onChangeServiceId,
  prefilledNote,
  onChangeNote,
}) => {
  const [patientName, setPatientName] = useState('');
  const [preferredDay, setPreferredDay] = useState('');
  const [preferredShift, setPreferredShift] = useState<string>(SHIFTS[0].id);
  const [nameError, setNameError] = useState(false);

  const selectedService =
    CLINIC_SERVICES.find((s) => s.id === selectedServiceId) ?? CLINIC_SERVICES[0];

  const formattedMessage = formatBookingMessage({
    patientName,
    serviceTitle: selectedService.title,
    preferredDay: preferredDay || 'Próxima fecha disponible',
    preferredShift,
    notes: prefilledNote,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    const url = buildWhatsAppUrl(formattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const todayIso = new Date().toISOString().split('T')[0];

  return (
    <section id="reservar" className="clinical-gradient relative py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column on desktop; on mobile only heading shows above form */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E3F4F1] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#388D81]">
              <MessageCircle className="h-3.5 w-3.5" />
              Reservas vía WhatsApp
            </span>

            <h2 className="mt-4 font-editorial text-4xl font-semibold leading-tight text-[#113D47] sm:text-5xl">
              Agenda tu consulta en menos de un minuto
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#5F6665] sm:mt-4 sm:text-base">
              Atendemos tu agenda personalmente por WhatsApp para brindarte la hora que mejor se
              adapte a ti. Completa estos datos breves y enviaremos tu solicitud organizada.
            </p>

            {/* Desktop steps + preview (hidden on mobile here, rendered below form on mobile) */}
            <div className="hidden lg:block">
              <ol className="mt-8 space-y-4">
                {BOOKING_STEPS.map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-bold text-[#4B9EB8] shadow-xs ring-1 ring-[#113D47]/10">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#113D47]">{item.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#5F6665]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl border border-[#113D47]/10 bg-white/90 p-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-[#388D81]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Vista previa de tu mensaje
                  </span>
                  <span className="text-[0.68rem] text-[#757D7B]">WhatsApp</span>
                </div>
                <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-[#EEF8F5] p-3.5 font-sans text-xs leading-relaxed text-[#113D47]">
                  {formattedMessage}
                </pre>
              </div>
            </div>
          </div>

          {/* Interactive form card (appears right under heading on mobile, right column on desktop) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[1.75rem] border border-[#113D47]/10 bg-white p-5 shadow-[0_24px_60px_rgba(17,61,71,0.09)] sm:rounded-[2rem] sm:p-9"
            >
              <div className="border-b border-[#113D47]/10 pb-4 sm:pb-5">
                <h3 className="font-editorial text-2xl font-semibold text-[#113D47] sm:text-3xl">
                  Datos de tu solicitud de cita
                </h3>
                <p className="mt-1 text-xs text-[#5F6665]">
                  Sin registros ni pagos previos. Confirmamos tu hora directamente por WhatsApp.
                </p>
              </div>

              <div className="mt-5 space-y-5 sm:mt-6">
                {/* Patient Name */}
                <div>
                  <label
                    htmlFor="patient-name"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#113D47]"
                  >
                    <User className="h-3.5 w-3.5 text-[#4B9EB8]" />
                    Nombre completo *
                  </label>
                  <input
                    id="patient-name"
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => {
                      setPatientName(e.target.value);
                      if (nameError) setNameError(false);
                    }}
                    placeholder="Ej. María Camila Pérez"
                    className={`mt-2 w-full rounded-2xl border bg-[#F8FCFD] px-4 py-3.5 text-base sm:text-sm text-[#113D47] placeholder-[#757D7B]/70 outline-none transition-all focus:bg-white focus:ring-2 ${
                      nameError
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                        : 'border-[#113D47]/12 focus:border-[#4B9EB8] focus:ring-[#CBE8F1]'
                    }`}
                  />
                  {nameError && (
                    <p className="mt-1.5 text-xs font-medium text-rose-600">
                      Por favor escribe tu nombre para personalizar la solicitud de cita.
                    </p>
                  )}
                </div>

                {/* Service selector */}
                <div>
                  <label
                    htmlFor="booking-service"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#113D47]"
                  >
                    <Stethoscope className="h-3.5 w-3.5 text-[#4B9EB8]" />
                    Servicio que deseas agendar
                  </label>
                  <select
                    id="booking-service"
                    value={selectedServiceId}
                    onChange={(e) => onChangeServiceId(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-[#113D47]/12 bg-[#F8FCFD] px-4 py-3.5 text-base sm:text-sm font-medium text-[#113D47] outline-none transition-all focus:border-[#4B9EB8] focus:bg-white focus:ring-2 focus:ring-[#CBE8F1]"
                  >
                    {CLINIC_SERVICES.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title} ({service.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred date + Shift */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label
                      htmlFor="preferred-day"
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#113D47]"
                    >
                      <CalendarDays className="h-3.5 w-3.5 text-[#4B9EB8]" />
                      Fecha preferida (opcional)
                    </label>
                    <input
                      id="preferred-day"
                      type="date"
                      min={todayIso}
                      value={preferredDay}
                      onChange={(e) => setPreferredDay(e.target.value)}
                      className="mt-2 w-full min-w-0 appearance-none rounded-2xl border border-[#113D47]/12 bg-[#F8FCFD] px-4 py-3.5 text-base sm:text-sm text-[#113D47] outline-none transition-all focus:border-[#4B9EB8] focus:bg-white focus:ring-2 focus:ring-[#CBE8F1]"
                    />
                  </div>

                  <div>
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#113D47]">
                      <Clock className="h-3.5 w-3.5 text-[#4B9EB8]" />
                      Jornada preferida
                    </span>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {SHIFTS.map((shift) => {
                        const Icon = shift.icon;
                        const active = preferredShift === shift.id;
                        return (
                          <button
                            key={shift.id}
                            type="button"
                            onClick={() => setPreferredShift(shift.id)}
                            className={`flex flex-col items-center justify-center gap-1 rounded-2xl border px-2 py-3 text-xs font-semibold transition-all sm:py-2.5 ${
                              active
                                ? 'border-[#4B9EB8] bg-[#E5F4F8] text-[#113D47] shadow-xs'
                                : 'border-[#113D47]/12 bg-[#F8FCFD] text-[#5F6665] hover:border-[#4B9EB8]/50 hover:bg-white'
                            }`}
                          >
                            <Icon className={`h-4 w-4 ${active ? 'text-[#4B9EB8]' : 'text-[#757D7B]'}`} />
                            {shift.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Optional note */}
                <div>
                  <label
                    htmlFor="booking-notes"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#113D47]"
                  >
                    <FileText className="h-3.5 w-3.5 text-[#4B9EB8]" />
                    Motivo o nota adicional (opcional)
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    value={prefilledNote}
                    onChange={(e) => onChangeNote(e.target.value)}
                    placeholder="Ej. Uso lentes de contacto, siento cansancio visual al leer o es primera consulta..."
                    className="mt-2 w-full resize-none rounded-2xl border border-[#113D47]/12 bg-[#F8FCFD] px-4 py-3 text-base sm:text-sm text-[#113D47] placeholder-[#757D7B]/70 outline-none transition-all focus:border-[#4B9EB8] focus:bg-white focus:ring-2 focus:ring-[#CBE8F1]"
                  />
                </div>
              </div>

              {/* Submit button */}
              <div className="mt-7 space-y-3">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#49A699] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(73,166,153,0.28)] transition-all hover:bg-[#388D81] active:scale-[0.99]"
                >
                  <Send className="h-4 w-4" />
                  Solicitar cita por WhatsApp
                </button>

                <p className="text-center text-xs text-[#757D7B]">
                  ¿Prefieres escribir directamente sin llenar el formulario?{' '}
                  <a
                    href={CLINIC_CONFIG.whatsappQrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#4B9EB8] underline decoration-[#4B9EB8]/40 underline-offset-4 hover:text-[#113D47]"
                  >
                    Abrir chat de WhatsApp
                  </a>
                </p>
              </div>
            </form>

            {/* Mobile-only preview + steps neatly below the form */}
            <div className="mt-6 space-y-5 lg:hidden">
              <div className="rounded-2xl border border-[#113D47]/10 bg-white/90 p-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-[#388D81]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Vista previa de tu mensaje
                  </span>
                  <span className="text-[0.68rem] text-[#757D7B]">WhatsApp</span>
                </div>
                <pre className="mt-2.5 whitespace-pre-wrap rounded-xl bg-[#EEF8F5] p-3 font-sans text-xs leading-relaxed text-[#113D47]">
                  {formattedMessage}
                </pre>
              </div>

              <ol className="grid gap-3 sm:grid-cols-3">
                {BOOKING_STEPS.map((item) => (
                  <li
                    key={item.step}
                    className="flex items-start gap-3 rounded-2xl border border-[#113D47]/8 bg-white/80 p-3.5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E5F4F8] text-[0.7rem] font-bold text-[#3A89A3]">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-[#113D47]">{item.title}</p>
                      <p className="mt-0.5 text-[0.72rem] leading-relaxed text-[#5F6665]">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
