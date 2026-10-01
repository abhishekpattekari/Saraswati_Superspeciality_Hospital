import React from 'react';
import {
  Stethoscope,
  Phone,
  MapPin,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Award,
  Heart,
  Baby,
  Activity,
  ArrowRight
} from 'lucide-react';
import { doctors, hospitalInfo } from '../data/hospitalData';

export default function DoctorsPage({ onBookClick }) {
  return (
    <div className="page-wrap">
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="wrap">
          <span className="eyebrow">OUR SPECIALIST PHYSICIANS</span>
          <h1>Expert Doctors Committed to Your Care</h1>
          <p>
            Meet the experienced medical leadership driving compassionate women's healthcare, maternity services, and advanced surgery at Saraswati Hospital, Ahilyanagar.
          </p>
        </div>
      </section>

      {/* DOCTOR PROFILES */}
      <section className="section">
        <div className="wrap">
          <div className="doctors-detailed-list">
            {doctors.map((doc, idx) => (
              <div className="doctor-card-full" key={doc.id}>
                <div className="doctor-header-row">
                  <div className="doc-avatar-large">
                    <img src={doc.avatar} alt={doc.name} />
                  </div>

                  <div className="doc-info-block">
                    <span className="doctor-role">{doc.role}</span>
                    <h2>{doc.name}</h2>
                    <span className="doc-qual-badge">{doc.qualification}</span>
                    <p className="doc-hospital-affiliation">{doc.hospital}</p>

                    <div className="doc-contact-snippet">
                      <span>
                        <MapPin size={15} /> {doc.address}
                      </span>
                      <span>
                        <Phone size={15} /> Tel: <strong>{doc.phone}</strong>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="doc-body-grid">
                  <div className="doc-bio-col">
                    <h4>About the Doctor</h4>
                    <p>{doc.bio}</p>

                    <div className="doc-timing-box">
                      <Clock size={16} />
                      <div>
                        <strong>Consultation Schedule:</strong>
                        <span>{doc.consultationHours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="doc-specialties-col">
                    <h4>Clinical Focus & Specializations</h4>
                    <ul className="doc-spec-list">
                      {doc.specialties.map((spec, i) => (
                        <li key={i}>
                          <CheckCircle2 size={15} className="bullet-check" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="doc-cta-row">
                      <button
                        className="button"
                        onClick={() => onBookClick(doc.name)}
                      >
                        <CalendarCheck size={16} /> Book with {doc.name.split(' ')[1]}
                      </button>
                      <a
                        href={`tel:${doc.phone}`}
                        className="button blue"
                      >
                        <Phone size={16} /> Call Clinic ({doc.phone})
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL STANDARDS & CONSULTATION GUIDE */}
      <section className="section" style={{ background: '#f6faf9' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="kicker">PATIENT INFORMATION</span>
              <h2>What to Expect During Your Consultation</h2>
            </div>
            <p>We believe in transparent, reassuring, and unhurried medical consultations.</p>
          </div>

          <div className="consultation-steps-grid">
            <div className="consult-step-card">
              <span className="step-num">01</span>
              <h4>Listening & History</h4>
              <p>
                Our doctors take the time to listen to your health history, symptoms, past medical records, and lifestyle context.
              </p>
            </div>

            <div className="consult-step-card">
              <span className="step-num">02</span>
              <h4>Comprehensive Evaluation</h4>
              <p>
                Precise physical examinations, on-site 3D/4D ultrasound imaging, or laboratory diagnostic evaluation as indicated.
              </p>
            </div>

            <div className="consult-step-card">
              <span className="step-num">03</span>
              <h4>Clear Treatment Plan</h4>
              <p>
                Detailed counseling explaining medical options, lifestyle advice, or minimally invasive surgical alternatives without jargon.
              </p>
            </div>

            <div className="consult-step-card">
              <span className="step-num">04</span>
              <h4>Dedicated Follow-up</h4>
              <p>
                Continuous post-consultation assistance, emergency accessibility 24/7, and scheduled recovery monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK APPOINTMENT CTA STRIP */}
      <section className="surgery">
        <div className="wrap surgery-in">
          <div>
            <span className="kicker light">NEED AN IN-PERSON CONSULTATION?</span>
            <h2>Book with Dr. Amol Jadhav or Dr. Prajakta Jadhav</h2>
            <p>
              Consultations available Monday through Saturday. Emergency obstetrics and surgical triage attended 24 hours daily.
            </p>
          </div>
          <div>
            <button
              className="button"
              style={{ background: '#fff', color: '#07516c', fontWeight: 700 }}
              onClick={() => onBookClick()}
            >
              <CalendarCheck size={17} /> Request Consultation Slot
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
