import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  CheckCircle2,
  CalendarCheck,
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { hospitalInfo, doctors } from '../data/hospitalData';

export default function ContactPage({ onBookClick }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry / Appointment',
    doctor: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrap">
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="wrap">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1>Contact Saraswati Hospital</h1>
          <p>
            We are here to assist you with outpatient consultations, maternity bookings, surgical queries, and 24/7 emergency care in Ahilyanagar.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM GRID */}
      <section className="section">
        <div className="wrap">
          <div className="contact-page-grid">
            {/* LEFT CONTACT DETAILS */}
            <div className="contact-info-panel">
              <span className="kicker">HOSPITAL ADDRESS & HELPLINE</span>
              <h2>Visit or Call Us</h2>
              <p>
                Our hospital is located in the central Maliwada area of Ahilyanagar, easily accessible from all parts of the city.
              </p>

              <div className="contact-cards-stack">
                <div className="contact-detail-card">
                  <div className="contact-icon-bubble">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong>Hospital Location</strong>
                    <p>
                      Bhopale Lane, Maliwada,
                      <br />
                      Ahilyanagar, Maharashtra 414001
                    </p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="contact-icon-bubble">
                    <Phone size={22} />
                  </div>
                  <div>
                    <strong>Hospital Helpline</strong>
                    <p>
                      Telephone: <a href="tel:02412414747">0241-2414747</a>
                      <br />
                      <small style={{ color: '#079ca8' }}>Emergency & ICU line active 24 hours</small>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="contact-icon-bubble">
                    <Clock size={22} />
                  </div>
                  <div>
                    <strong>Consultation & OPD Timings</strong>
                    <p>
                      <strong>Emergency & ICU:</strong> 24/7 Everyday
                      <br />
                      <strong>Doctor OPD:</strong> Mon – Sat: 10:00 AM – 2:00 PM & 6:00 PM – 9:00 PM
                    </p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="contact-icon-bubble">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <strong>Consultant Doctors</strong>
                    <p>
                      Dr. Amol Jadhav [MS (Gyn & Obs)]
                      <br />
                      Dr. Prajakta Jadhav [Consultant Obstetrician & Gynaecologist]
                    </p>
                  </div>
                </div>
              </div>

              {/* EMERGENCY BOX */}
              <div className="emergency-alert-card">
                <AlertCircle size={22} />
                <div>
                  <strong>Medical Emergency?</strong>
                  <p>Call our rapid desk immediately at <strong>0241-2414747</strong> or proceed directly to our Emergency casualty desk.</p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM PANEL */}
            <div className="contact-form-panel">
              {!submitted ? (
                <div>
                  <span className="kicker">ONLINE INQUIRY & APPOINTMENT</span>
                  <h3>Send a Message to Our Care Team</h3>
                  <p style={{ color: '#68818b', fontSize: '13px', margin: '8px 0 20px' }}>
                    Fill out the form below and our medical coordinator will contact you promptly.
                  </p>

                  <form onSubmit={handleSubmit} className="contact-page-form">
                    <div className="form-group">
                      <label>Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kulkarni"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Contact Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9823000000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Preferred Doctor</label>
                        <select
                          value={formData.doctor}
                          onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        >
                          <option value="">Any Specialist</option>
                          {doctors.map((d) => (
                            <option key={d.id} value={d.name}>
                              {d.name} ({d.role})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Subject</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Maternity Consultation">Maternity & Delivery Consultation</option>
                          <option value="Gynaecology / Laparoscopy">Gynaecology / Laparoscopic Surgery</option>
                          <option value="Surgical / 10-Bed ICU">Surgical Care & 10-Bed ICU Query</option>
                          <option value="3D/4D Sonography">3D/4D Sonography Booking</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Your Message / Health Query</label>
                      <textarea
                        rows="4"
                        placeholder="Please describe what you are looking for..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="button" style={{ width: '100%', justifyContent: 'center' }}>
                      <Send size={16} /> Submit Message
                    </button>
                  </form>
                </div>
              ) : (
                <div className="contact-success-state">
                  <CheckCircle2 size={56} style={{ color: '#079ca8', marginBottom: '14px' }} />
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our staff at Saraswati Superspeciality Hospital has received your note. We will call you back at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <div style={{ marginTop: '22px', display: 'flex', gap: '12px' }}>
                    <a href={`tel:${hospitalInfo.phone}`} className="button blue">
                      Call 0241-2414747
                    </a>
                    <button
                      className="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          subject: 'General Inquiry / Appointment',
                          doctor: '',
                          message: ''
                        });
                      }}
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP & DIRECTIONS HELPER */}
      <section className="section" style={{ background: '#f5faf9', paddingTop: '40px', paddingBottom: '70px' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="kicker">HOW TO REACH US</span>
              <h2>Location & Directions</h2>
            </div>
            <a
              className="outline"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Saraswati Superspeciality Hospital, Bhopale Lane, Maliwada, Ahilyanagar')}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps <ExternalLink size={15} />
            </a>
          </div>

          <div className="map-card-wrapper">
            <div className="map-directions-info">
              <h4>Directions to Bhopale Lane, Maliwada</h4>
              <p>
                Saraswati Superspeciality Hospital is located on Bhopale Lane in Maliwada, Ahilyanagar (Ahmednagar), Maharashtra 414001.
              </p>
              <ul className="directions-list">
                <li>• <strong>Central Ahilyanagar:</strong> Located within 5–10 minutes from Maliwada Bus Stand and Swastik Chowk.</li>
                <li>• <strong>Railway Station:</strong> Approximately 15 minutes drive from Ahmednagar / Ahilyanagar Railway Station.</li>
                <li>• <strong>Ambulance Access:</strong> 24/7 dedicated entrance for emergency ambulances and patient drop-off.</li>
                <li>• <strong>Parking:</strong> Two-wheeler and car parking area available for visiting families.</li>
              </ul>
            </div>

            <div className="map-iframe-container">
              <iframe
                title="Saraswati Superspeciality Hospital Location Map"
                src="https://maps.google.com/maps?q=Bhopale%20Lane,%20Maliwada,%20Ahilyanagar,%20Maharashtra%20414001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, borderRadius: '4px' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
