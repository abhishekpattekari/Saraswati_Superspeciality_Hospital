import React from 'react';
import { MapPin, Phone, Mail, Clock3, ExternalLink, ShieldCheck, HeartPulse } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';
import { InstagramIcon, YouTubeIcon } from './SocialIcons';

export default function Footer({ navigate, onBookClick }) {
  return (
    <footer id="contact">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <img src="/assets/saraswati-logo.jpg" alt="Saraswati Superspeciality Hospital" />
          <p>
            Specialist healthcare for women, families and the Ahilyanagar community. Combining advanced clinical excellence with genuine compassion.
          </p>
          <div className="socials">
            <a href={hospitalInfo.socials.instagram} target="_blank" rel="noreferrer" title="Follow on Instagram (@saraswati_hospitals)" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href={hospitalInfo.socials.youtube} target="_blank" rel="noreferrer" title="Watch on YouTube (@saraswatihospital898)" aria-label="YouTube">
              <YouTubeIcon size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); navigate('about'); }}>About Us</a>
          <a href="#departments" onClick={(e) => { e.preventDefault(); navigate('departments'); }}>Departments</a>
          <a href="#doctors" onClick={(e) => { e.preventDefault(); navigate('doctors'); }}>Doctors</a>
          <a href="#media" onClick={(e) => { e.preventDefault(); navigate('media'); }}>Media & Reels</a>
        </div>

        <div>
          <h4>Specialties</h4>
          <a href="#departments" onClick={(e) => { e.preventDefault(); navigate('departments', 'obstetrics-gynecology'); }}>
            Obstetrics & Gynaecology
          </a>
          <a href="#departments" onClick={(e) => { e.preventDefault(); navigate('departments', 'labour-delivery-suites'); }}>
            Labour & Delivery Suites
          </a>
          <a href="#departments" onClick={(e) => { e.preventDefault(); navigate('departments', 'high-risk-pregnancy'); }}>
            High-Risk Pregnancy Unit
          </a>
          <a href="#departments" onClick={(e) => { e.preventDefault(); navigate('departments', 'surgical-icu'); }}>
            10-Bed Surgical ICU
          </a>
          <a href="#doctors" onClick={(e) => { e.preventDefault(); navigate('doctors'); }}>
            Meet Specialist Doctors
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); onBookClick(); }}>
            Book Consultation
          </a>
        </div>

        <div className="contact-col">
          <h4>Hospital Contact</h4>
          <p>
            <MapPin size={17} />
            <span>
              <strong>Bhopale Lane, Maliwada</strong>
              <br />
              Ahilyanagar, Maharashtra 414001
            </span>
          </p>
          <p>
            <Phone size={17} />
            <span>
              <strong>0241-2414747</strong>
              <br />
              Emergency & Reception Desk
            </span>
          </p>
          <p>
            <Mail size={17} />
            <span>{hospitalInfo.name}</span>
          </p>
          <p>
            <Clock3 size={17} />
            <span>
              Emergency & ICU: <strong>24 Hours</strong>
              <br />
              OPD: 10:00 AM – 2:00 PM & 6:00 PM – 9:00 PM
            </span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="wrap">
          <span>© 2026 Saraswati Superspeciality Hospital, Ahilyanagar. All rights reserved.</span>
          <span>
            <a href={hospitalInfo.socials.instagram} target="_blank" rel="noreferrer">Instagram</a> &nbsp;|&nbsp;{' '}
            <a href={hospitalInfo.socials.youtube} target="_blank" rel="noreferrer">YouTube</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
