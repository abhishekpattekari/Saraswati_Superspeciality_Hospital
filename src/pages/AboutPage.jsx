import React from 'react';
import {
  ShieldCheck,
  HeartPulse,
  Award,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  ExternalLink,
  Users,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import { hospitalInfo, hospitalPhotos } from '../data/hospitalData';

export default function AboutPage({ navigate, onBookClick }) {
  return (
    <div className="page-wrap">
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="wrap">
          <span className="eyebrow">ABOUT SARASWATI HOSPITAL</span>
          <h1>Santvana • Safety • Speciality</h1>
          <p>
            Providing trusted, compassionate obstetrics, gynaecology, and multi-speciality surgical care to the families of Ahilyanagar and surrounding regions.
          </p>
        </div>
      </section>

      {/* CORE PHILOSOPHY */}
      <section className="section about-detail">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-art">
              <img
                src="/assets/HOSPITAL PHOTO/RD6_4449.jpg"
                alt="Saraswati Superspeciality Hospital Doctor Consultation Suite"
                className="about-facility-photo"
              />
              <div className="art-note">
                <span>15+</span>
                <small>Years of Clinical<br />Dedication</small>
              </div>
            </div>

            <div className="about-copy">
              <span className="kicker">OUR COMMITMENT</span>
              <h2>Healthcare that puts the patient at the center.</h2>
              <p>
                Saraswati Superspeciality Hospital was founded with a singular conviction: to bring state-of-the-art medical technology, compassionate obstetric care, and advanced surgical excellence under one roof in Ahilyanagar.
              </p>
              <p>
                Led by <strong>Dr. Amol Jadhav</strong> and <strong>Dr. Prajakta Jadhav</strong>, our hospital is designed around modern standards of patient safety, clinical ethics, and holistic patient well-being.
              </p>

              <div className="values-grid">
                <div className="value-pill">
                  <ShieldCheck size={20} className="pill-icon" />
                  <div>
                    <strong>Santvana (Compassion)</strong>
                    <small>Empathy and gentle communication in every consultation.</small>
                  </div>
                </div>

                <div className="value-pill">
                  <HeartPulse size={20} className="pill-icon" />
                  <div>
                    <strong>Safety (Clinical Rigour)</strong>
                    <small>Strict sterilization, 10-bed ICU, and neonatal protocols.</small>
                  </div>
                </div>

                <div className="value-pill">
                  <Award size={20} className="pill-icon" />
                  <div>
                    <strong>Speciality (Excellence)</strong>
                    <small>Continuous adoption of advanced laparoscopy and diagnostics.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE & AMENITIES */}
      <section className="section" style={{ background: '#f6faf9' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="kicker">HOSPITAL INFRASTRUCTURE</span>
              <h2>Modern Facilities Built for Comfort & Precision</h2>
            </div>
            <p>Every corner of Saraswati Hospital is optimized for patient recovery, hygiene, and clinical readiness.</p>
          </div>

          <div className="amenities-grid">
            <div className="amenity-card">
              <span className="amenity-badge">Critical Care</span>
              <h4>10-Bed Intensive Care Unit (ICU)</h4>
              <p>
                Equipped with multipara bedside monitors, invasive pressure lines, ventilators, and 24/7 dedicated nursing vigilance for post-surgical and acute patients.
              </p>
            </div>

            <div className="amenity-card">
              <span className="amenity-badge">Birthing</span>
              <h4>Advanced Labour & Delivery Suites</h4>
              <p>
                Ergonomic birthing beds, continuous fetal-maternal heart telemetry, companion seating, and attached neonatal resuscitation station.
              </p>
            </div>

            <div className="amenity-card">
              <span className="amenity-badge">Surgical</span>
              <h4>Modular Operation Theatres</h4>
              <p>
                HEPA-filtered laminar airflow OTs equipped with high-definition laparoscopic towers, precision electrosurgical units, and sterile airlocks.
              </p>
            </div>

            <div className="amenity-card">
              <span className="amenity-badge">Imaging</span>
              <h4>3D / 4D Sonography & Diagnostics</h4>
              <p>
                Advanced ultrasound machine for detailed anomaly scans, fetal Doppler, early viability scans, and high-resolution pelvic imaging.
              </p>
            </div>

            <div className="amenity-card">
              <span className="amenity-badge">Certified</span>
              <h4>Authorized MTP & Family Planning</h4>
              <p>
                Government-recognized center offering safe, strictly confidential medical termination and personalized contraceptive guidance.
              </p>
            </div>

            <div className="amenity-card">
              <span className="amenity-badge">24/7 Readiness</span>
              <h4>Emergency Triage & Inpatient Care</h4>
              <p>
                Round-the-clock emergency casualty desk, oxygen infrastructure, pharmacy liaison, and deluxe and general recovery rooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOSPITAL PHOTO GALLERY PREVIEW */}
      <section className="section gallery-preview-sec">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="kicker">CAMPUS & INFRASTRUCTURE</span>
              <h2>Inside Saraswati Superspeciality Hospital</h2>
            </div>
            <button
              className="outline"
              onClick={() => navigate('media')}
            >
              Hospital Photo Gallery <ArrowRight size={15} />
            </button>
          </div>

          <div className="photo-grid-preview">
            {hospitalPhotos.slice(0, 6).map((photo, idx) => (
              <div key={idx} className="photo-preview-item">
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <span>{photo.title}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '35px' }}>
            <button className="button" onClick={() => navigate('media')}>
              View All Photos, Reels & YouTube Videos <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* DOCTORS OVERVIEW STRIP */}
      <section className="surgery" style={{ padding: '60px 0' }}>
        <div className="wrap surgery-in">
          <div>
            <span className="kicker light">CLINICAL LEADERSHIP</span>
            <h2>Guided by dedicated medical leaders.</h2>
            <p>
              Dr. Amol Jadhav [MS (Gyn & Obs)] and Dr. Prajakta Jadhav bring decades of cumulative clinical insight and patient-first care to every consultation.
            </p>
            <div style={{ marginTop: '20px' }}>
              <button
                className="button"
                style={{ background: '#0b526b', border: '1px solid #79d9cd', color: '#fff' }}
                onClick={() => navigate('doctors')}
              >
                Read Doctors' Full Profiles <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="surgery-list">
            <span>✓ Dr. Amol Jadhav — Gynaecologist & Obstetrician</span>
            <span>✓ Dr. Prajakta Jadhav — Consultant Obstetrician & Gynaecologist</span>
            <span>✓ 24/7 Critical Care & Surgical Nursing Staff</span>
            <span>✓ Dedicated Anaesthesia & Intensive Care Team</span>
          </div>
        </div>
      </section>

      {/* LOCATION & CALLOUT */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap about-location-box">
          <div>
            <span className="kicker">VISIT US TODAY</span>
            <h3>Conveniently located in Maliwada, Ahilyanagar</h3>
            <p style={{ color: '#68818b', marginTop: '8px' }}>
              Bhopale Lane, Maliwada, Ahilyanagar, Maharashtra 414001
            </p>
            <p style={{ color: '#079ca8', fontWeight: 600 }}>
              Phone: 0241-2414747 (24/7 Emergency Line)
            </p>
          </div>
          <div>
            <button className="button blue" onClick={() => onBookClick()}>
              <CalendarCheck size={16} /> Schedule an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
