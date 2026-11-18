export type ServiceCategory = 'especialidad' | 'clinica' | 'optica';

export interface ClinicService {
  id: string;
  title: string;
  tag: string;
  category: ServiceCategory;
  shortDescription: string;
  highlights: string[];
  duration: string;
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CLINIC_CONFIG = {
  brandName: 'Dra. Anny Lozano Santos',
  fullName: 'Dra. Anny Carolina Lozano Santos',
  subtitle: 'Optometría y Contactología',
  specialty: 'Especialista en Segmento Anterior y Lentes de Contacto',
  tagline: 'Ver bien no es solo leer letras.',
  taglineSub:
    'En una consulta de optometría también evaluamos cómo trabajan tus ojos juntos, la salud de tu segmento anterior y cómo enfocas a diferentes distancias.',
  motto: 'Cada detalle cuenta para el cuidado de tu visión.',

  // Ubicación real extraída de Instagram
  address: 'Cra. 14 #11-20, Local 6',
  city: 'Ocaña, Norte de Santander',
  country: 'Colombia',
  fullAddress: 'Cra. 14 #11-20, Local 6 | Ocaña, N. de S.',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Cra.+14+%2311-20,+Oca%C3%B1a,+Norte+de+Santander,+Colombia',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Cra.%2014%20%2311-20,%20Oca%C3%B1a,%20Norte%20de%20Santander,%20Colombia&output=embed',

  // Redes y WhatsApp
  instagramHandle: '@opt_annylozanos',
  instagramUrl: 'https://www.instagram.com/opt_annylozanos/',
  // TODO: Reemplazar con el número real de WhatsApp (formato internacional sin "+", ej. 573101234567)
  whatsappNumber: '573000000000',
  whatsappQrUrl: 'https://wa.me/qr/ECUG3VAG6HEYE1',

  // TODO: Confirmar horarios reales con la Dra. Anny
  schedule: [
    { days: 'Lunes a Viernes', hours: '8:00 a.m. a 12:00 m. / 2:00 p.m. a 6:00 p.m.' },
    { days: 'Sábados', hours: '8:30 a.m. a 1:00 p.m.' },
    { days: 'Domingos y Festivos', hours: 'Cerrado' },
  ],
} as const;

// TODO: Ajustar o confirmar la lista definitiva de servicios con la Dra. Anny
export const CLINIC_SERVICES: ClinicService[] = [
  {
    id: 'optometria-integral',
    title: 'Consulta de Optometría Integral',
    tag: 'Más solicitado',
    category: 'clinica',
    shortDescription:
      'Evaluación visual completa: revisamos tu fórmula, cómo trabajan ambos ojos juntos, tu enfoque a distintas distancias y la salud ocular.',
    highlights: [
      'Medición precisa de fórmula refractiva',
      'Evaluación de coordinación binocular y enfoque',
      'Revisión preventiva de salud ocular',
    ],
    duration: '30 a 40 min',
    featured: true,
  },
  {
    id: 'lentes-de-contacto',
    title: 'Adaptación de Lentes de Contacto',
    tag: 'Especialidad',
    category: 'especialidad',
    shortDescription:
      'Valoración detallada para elegir, adaptar y controlar lentes de contacto blandos, tóricos, multifocales o de diseño especial.',
    highlights: [
      'Evaluación de córnea y película lagrimal',
      'Pruebas de comodidad, oxigenación y centrado',
      'Guía práctica de uso, higiene y controles',
    ],
    duration: '45 min',
    featured: true,
  },
  {
    id: 'segmento-anterior',
    title: 'Evaluación de Segmento Anterior y Ojo Seco',
    tag: 'Especialidad',
    category: 'especialidad',
    shortDescription:
      'Examen detallado de la superficie ocular, córnea, párpados y calidad lagrimal para identificar y tratar ardor, enrojecimiento o sequedad.',
    highlights: [
      'Valoración de ardor, fatiga y sequedad ocular',
      'Examen en lámpara de hendidura',
      'Plan de cuidado y lubricación según tu caso',
    ],
    duration: '35 a 45 min',
  },
  {
    id: 'asesoria-optica',
    title: 'Asesoría Óptica, Lentes y Monturas',
    tag: 'Óptica',
    category: 'optica',
    shortDescription:
      'Te orientamos para escoger la montura cómoda para tu rostro y los lentes oftálmicos con los filtros adecuados para tu rutina diaria.',
    highlights: [
      'Lentes antirreflejo, filtro azul y fotocromáticos',
      'Lentes progresivos de adaptación cómoda',
      'Recomendación según tu fórmula y uso diario',
    ],
    duration: '25 min',
  },
  {
    id: 'control-infantil',
    title: 'Control Visual Pediátrico y Escolar',
    tag: 'Prevención',
    category: 'clinica',
    shortDescription:
      'Revisión pensada para niños y adolescentes, clave para detectar a tiempo cambios visuales que pueden afectar su desempeño escolar.',
    highlights: [
      'Atención tranquila y amable para niños',
      'Detección temprana de miopía y astigmatismo',
      'Seguimiento del desarrollo visual escolar',
    ],
    duration: '30 min',
  },
  {
    id: 'certificados-visuales',
    title: 'Controles de Seguimiento y Certificados',
    tag: 'Clínico',
    category: 'optica',
    shortDescription:
      'Revisiones periódicas para usuarios de gafas o lentes de contacto, controles después de adaptación y certificados visuales.',
    highlights: [
      'Control anual preventivo de visión',
      'Verificación de lentes y fórmulas actuales',
      'Certificados visuales escolares o laborales',
    ],
    duration: '20 a 30 min',
  },
];

export const CLINIC_FAQS: FaqItem[] = [
  {
    question: '¿Cómo funciona la reserva de citas por WhatsApp?',
    answer:
      'Solo debes elegir el servicio, tu día o jornada preferida en el formulario de esta página y tocar "Solicitar cita por WhatsApp". Se abrirá tu chat con el mensaje ya organizado para que nuestro equipo te confirme la disponibilidad exacta.',
  },
  {
    question: '¿Cada cuánto tiempo debo realizarme un examen de optometría?',
    answer:
      'Se recomienda realizar una valoración visual al menos una vez al año, incluso si sientes que ves bien. Si usas lentes de contacto, trabajas muchas horas frente a pantallas o presentas dolores de cabeza, el control periódico es aún más importante.',
  },
  {
    question: '¿Qué diferencia a una especialista en Segmento Anterior y Lentes de Contacto?',
    answer:
      'Además de formular gafas, contamos con formación especializada en la superficie ocular, córnea, manejo de ojo seco y adaptación segura de lentes de contacto (tanto convencionales como especiales), cuidando la salud del ojo a largo plazo.',
  },
  {
    question: '¿Qué debo llevar el día de mi consulta?',
    answer:
      'Si usas gafas o lentes de contacto actualmente, tráelos contigo junto con tu fórmula anterior si la conservas. Si eres usuario de lentes de contacto, te indicaremos por WhatsApp si conviene retirarlos unas horas antes de la evaluación.',
  },
  {
    question: '¿Atienden niños y adultos?',
    answer:
      'Sí, realizamos evaluación visual integral para niños en edad escolar, jóvenes, adultos y adultos mayores, adaptando las pruebas a las necesidades visuales de cada etapa.',
  },
];

export interface BookingPayload {
  patientName: string;
  serviceTitle: string;
  preferredDay: string;
  preferredShift: string;
  notes: string;
}

export function formatBookingMessage(payload: BookingPayload): string {
  const lines = [
    'Hola Dra. Anny, me gustaría agendar una cita:',
    `• Paciente: ${payload.patientName.trim() || 'Por confirmar'}`,
    `• Servicio: ${payload.serviceTitle}`,
    `• Preferencia: ${payload.preferredDay.trim() || 'Próxima fecha disponible'} (${payload.preferredShift})`,
  ];

  if (payload.notes.trim()) {
    lines.push(`• Nota adicional: ${payload.notes.trim()}`);
  }

  lines.push('Quedo atento/a a disponibilidad para confirmar. ¡Muchas gracias!');
  return lines.join('\n');
}

export function buildWhatsAppUrl(message?: string): string {
  const cleanDigits = CLINIC_CONFIG.whatsappNumber.replace(/\D/g, '');
  if (!cleanDigits) {
    return CLINIC_CONFIG.whatsappQrUrl;
  }
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${cleanDigits}${query}`;
}
