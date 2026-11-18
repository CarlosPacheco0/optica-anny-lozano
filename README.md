# Dra. Anny Lozano Santos — Landing Page

Landing page responsiva para el consultorio de **Optometría y Contactología Dra. Anny Lozano Santos** (Ocaña, Norte de Santander), enfocada en presentar sus servicios y facilitar solicitudes de cita ordenadas hacia WhatsApp para gestión manual.

## Stack

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Lucide React**

## Secciones actuales

1. **Navbar y menú móvil (`Navbar.tsx`)**: Barra fija con logo adaptable y cierre del menú al tocar fuera o presionar `Escape`.
2. **Inicio (`Hero.tsx`)**: Presentación principal, especialidad en Segmento Anterior y Lentes de Contacto, botones de acción y fotografía editorial.
3. **Servicios (`ServicesSection.tsx`)**: 6 tarjetas horizontales con inclinación sutil, navegación con flechas (escritorio) y paginación táctil (móvil), detalle desplegable por consulta y selección directa hacia la agenda.
4. **Agenda tu consulta (`BookingSection.tsx`)**: Formulario de pre-reserva (nombre, servicio, fecha opcional, jornada y nota) con vista previa del mensaje que se envía a WhatsApp. En móvil prioriza el formulario arriba y evita zoom automático en iOS.
5. **Conoce a tu Especialista (`AboutSection.tsx`)**: Perfil del consultorio y 4 pilares de atención.
6. **Preguntas Frecuentes (`FaqSection.tsx`)**: Acordeón numerado y bloque de contacto directo a WhatsApp e Instagram (2 columnas en escritorio; preguntas primero en móvil).
7. **Visítanos y Footer (`LocationSection.tsx`, `Footer.tsx`, `FloatingWhatsApp.tsx`)**: Dirección en Ocaña, horarios, mapa embebido de Google Maps y botón flotante para agendar.

## Estructura del proyecto

```text
optica-anylozano/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero-clinic.jpg
│       └── specialist-care.jpg
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── BookingSection.tsx
│   │   ├── BrandLogo.tsx
│   │   ├── FaqSection.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LocationSection.tsx
│   │   ├── Navbar.tsx
│   │   └── ServicesSection.tsx
│   ├── config/
│   │   └── clinic.ts          # Datos centralizados del consultorio, servicios, horarios y WhatsApp
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── reporte-proyecto.html      # Reporte de avance y lista de pendientes para el cliente
```

## Uso local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Configuración y datos pendientes del cliente

Toda la información editable está centralizada en `src/config/clinic.ts`. Antes de publicar en producción, actualizar:

- [ ] Número oficial de WhatsApp con indicativo `+57` (`whatsappNumber` en `src/config/clinic.ts`).
- [ ] Lista definitiva de servicios, descripciones y duraciones (`CLINIC_SERVICES`).
- [ ] Horarios oficiales de atención (`schedule`).
- [ ] Logo oficial en SVG/PNG transparente (`src/components/BrandLogo.tsx` y `public/favicon.svg`).
- [ ] Fotografías reales del consultorio y de la doctora (`public/images/`).
- [ ] Reseña profesional, medios de pago/convenios y enlace exacto de Google Maps (opcional recomendado).
