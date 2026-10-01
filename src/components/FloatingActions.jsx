import React from 'react';
import { Phone } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/912412414747?text=${encodeURIComponent(
    "Hello Saraswati Superspeciality Hospital, Ahilyanagar. I would like to inquire about consultation and appointment booking."
  )}`;

  return (
    <aside className="floating-actions" aria-label="Quick contact shortcuts">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-btn whatsapp-btn"
        title="Chat with Saraswati Hospital on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="floating-tooltip">WhatsApp Us</span>
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.2.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.3 3.4 1.4 3.6.2.2 2.5 3.8 6 5.3.8.4 1.5.6 2 .8.8.3 1.6.2 2.2.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.6-.4z"
            fill="#FFFFFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2.1 21.9l4.887-1.282A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.17 8.17 0 0 1-4.172-1.144l-.3-.178-3.097.813.827-3.02-.195-.31A8.174 8.174 0 1 1 12 20.2z"
            fill="#FFFFFF"
          />
        </svg>
      </a>

      {/* Call Floating Button */}
      <a
        href={`tel:${hospitalInfo.phone}`}
        className="floating-btn call-btn"
        title="Call 0241-2414747 (24/7 Available)"
        aria-label="Call Hospital 0241-2414747"
      >
        <span className="floating-tooltip">Call 0241-2414747</span>
        <Phone size={22} className="call-icon-bounce" />
      </a>
    </aside>
  );
}
