import React from 'react';
import { Phone, ExternalLink, Menu, X, CalendarCheck } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';
import { InstagramIcon, YouTubeIcon } from './SocialIcons';

export default function Navbar({ activePage, navigate, menuOpen, setMenuOpen, onBookClick }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'departments', label: 'Departments' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'media', label: 'Media & Reels' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>
            <Phone size={14} /> 24/7 Emergency & ICU: <strong>{hospitalInfo.phone}</strong>
          </span>
          <span className="toplinks" style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <a href={hospitalInfo.socials.instagram} target="_blank" rel="noreferrer" title="Follow on Instagram (@saraswati_hospitals)" aria-label="Instagram">
              <InstagramIcon size={17} />
            </a>
            <a href={hospitalInfo.socials.youtube} target="_blank" rel="noreferrer" title="Visit YouTube Channel (@saraswatihospital898)" aria-label="YouTube">
              <YouTubeIcon size={19} />
            </a>
          </span>
        </div>
      </div>

      <header className="header">
        <div className="wrap header-in">
          <a
            className="brand"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigate('home');
            }}
          >
            <img src="/assets/saraswati-logo.jpg" alt="Saraswati Superspeciality Hospital Logo" />
            <span>
              <b>Saraswati</b>
              <small>SUPER SPECIALITY HOSPITAL</small>
            </span>
          </a>

          <nav className={menuOpen ? 'nav open' : 'nav'}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activePage === item.id ? 'active-link' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.id);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              className="button header-cta"
              onClick={() => {
                setMenuOpen(false);
                onBookClick();
              }}
            >
              <CalendarCheck size={15} /> Book Appointment
            </button>
          </nav>

          <button
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
    </>
  );
}
