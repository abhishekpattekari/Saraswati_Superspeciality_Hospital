import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CalendarCheck,
  Stethoscope,
  HeartPulse,
  Baby,
  Activity,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Phone,
  Play,
  CheckCircle2,
  Clock3,
  Navigation,
  Ambulance,
  X
} from 'lucide-react';
import {
  heroBanners,
  hospitalInfo,
  doctors,
  obstetricsGynecologyUnits,
  surgicalDepartments,
  instagramReels,
  youtubeVideos,
  hospitalPhotos
} from '../data/hospitalData';
import { InstagramIcon, YouTubeIcon } from '../components/SocialIcons';
import VideoPlayerModal from '../components/VideoPlayerModal';

export default function HomePage({ navigate, onBookClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [activePlayingVideo, setActivePlayingVideo] = useState(null);
  const [activePhotoModal, setActivePhotoModal] = useState(null);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    } else if (diff < -45) {
      setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
    }
    setTouchStartX(null);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Baby': return <Baby />;
      case 'HeartPulse': return <HeartPulse />;
      case 'ShieldCheck': return <ShieldCheck />;
      case 'Activity': return <Activity />;
      default: return <Stethoscope />;
    }
  };

  return (
    <main id="home">
      {/* RESPONSIVE BANNER CAROUSEL */}
      <section
        className="hero-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="hero-banner-track">
          {heroBanners.map((banner, i) => (
            <div
              key={banner.id}
              className={`hero-banner-slide${i === currentSlide ? ' active' : ''}`}
              onClick={() => onBookClick()}
              title={`Click to book appointment - ${banner.title}`}
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="hero-banner-img"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}

          {/* Quick Floating CTA on Desktop */}
          <div className="hero-floating-cta">
            <button
              className="button hero-cta-btn"
              onClick={(e) => {
                e.stopPropagation();
                onBookClick();
              }}
            >
              <CalendarCheck size={16} /> Book an Appointment <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <button
          className="arrow left"
          onClick={() => setCurrentSlide((currentSlide - 1 + heroBanners.length) % heroBanners.length)}
          aria-label="Previous banner slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          className="arrow right"
          onClick={() => setCurrentSlide((currentSlide + 1) % heroBanners.length)}
          aria-label="Next banner slide"
        >
          <ChevronRight size={22} />
        </button>

        <div className="dots">
          {heroBanners.map((banner, i) => (
            <button
              key={banner.id}
              className={`dot${i === currentSlide ? ' active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}: ${banner.title}`}
            />
          ))}
        </div>
      </section>

      {/* QUICK LINKS STRIP */}
      <section className="quick">
        <div className="wrap quick-grid">
          <a
            className="quick-card"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onBookClick();
            }}
          >
            <CalendarCheck />
            <span>
              <b>BOOK APPOINTMENT</b>
              <small>Talk to our care team</small>
            </span>
            <ArrowRight size={18} />
          </a>

          <a
            className="quick-card"
            href="#departments"
            onClick={(e) => {
              e.preventDefault();
              navigate('departments');
            }}
          >
            <Stethoscope />
            <span>
              <b>OUR DEPARTMENTS</b>
              <small>15+ Specialist services</small>
            </span>
            <ArrowRight size={18} />
          </a>

          <a
            className="quick-card"
            href="#doctors"
            onClick={(e) => {
              e.preventDefault();
              navigate('doctors');
            }}
          >
            <HeartPulse />
            <span>
              <b>MEET OUR DOCTORS</b>
              <small>Dr. Amol & Dr. Prajakta Jadhav</small>
            </span>
            <ArrowRight size={18} />
          </a>

          <a
            className="quick-card"
            href="#media"
            onClick={(e) => {
              e.preventDefault();
              navigate('media');
            }}
          >
            <ExternalLink />
            <span>
              <b>REELS & VIDEOS</b>
              <small>Watch care stories & ICU</small>
            </span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="about section">
        <div className="wrap about-grid">
          <div className="about-art">
            <img
              src="/assets/HOSPITAL PHOTO/RD6_4765.jpg"
              alt="Saraswati Superspeciality Hospital Lobby and Patient Reception"
              className="about-facility-photo"
            />
            <div className="art-note">
              <span>24/7</span>
              <small>emergency<br />& ICU care</small>
            </div>
          </div>
          <div className="about-copy">
            <span className="kicker">SARASWATI SUPERSPECIALITY HOSPITAL</span>
            <h2>Speciality care with a personal touch.</h2>
            <p>
              At Saraswati Superspeciality Hospital, Ahilyanagar, every patient is cared for with clinical expertise, clear communication, and genuine compassion.
            </p>
            <p>
              Led by Dr. Amol Jadhav and Dr. Prajakta Jadhav, our hospital integrates modern Obstetrics & Gynaecology, high-risk maternal delivery suites, advanced laparoscopy, and a dedicated 10-bed ICU for diverse surgical disciplines.
            </p>
            <div className="contact-line">
              <MapPin size={18} />
              <span>
                <b>Bhopale Lane, Maliwada</b>
                <small>Ahilyanagar, Maharashtra 414001 • Tel: 0241-2414747</small>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button className="button blue" onClick={() => navigate('about')}>
                Learn More About Us <ArrowRight size={17} />
              </button>
              <button className="button" onClick={() => onBookClick()}>
                Book Consultation <CalendarCheck size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OBSTETRICS & GYNECOLOGY DEPARTMENTS */}
      <section id="departments" className="section departments">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="kicker">MATERNITY & WOMEN'S HEALTH</span>
              <h2>Obstetrics & Gynecology Specialties</h2>
            </div>
            <p>Comprehensive clinical care for every stage of pregnancy, childbirth, and women's health.</p>
          </div>

          <div className="department-grid">
            {obstetricsGynecologyUnits.map((u) => (
              <article className="department with-image" key={u.id}>
                <div className="dept-image-frame">
                  <img
                    src={u.image}
                    alt={u.title}
                    className="dept-img"
                    loading="lazy"
                  />
                  <div className="dept-image-overlay" />
                  <span className="dept-category-overlay-badge">{u.category}</span>
                  <div className="dept-icon-floating">{getIcon(u.icon)}</div>
                </div>

                <div className="dept-content">
                  <h3>{u.title}</h3>
                  <p>{u.shortDesc}</p>
                  <a
                    href={`#departments`}
                    className="dept-explore-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('departments', u.id);
                    }}
                  >
                    Explore specialty <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SURGICAL DEPARTMENTS & 10-BED ICU */}
      <section className="surgery">
        <div className="wrap surgery-in">
          <div>
            <span className="kicker light">SURGICAL DEPARTMENTS (10-BED ICU)</span>
            <h2>One hospital, many specialist surgical teams.</h2>
            <p>
              Our surgical departments combine focused clinical expertise with a dedicated 10-bed Intensive Care Unit (ICU) and round-the-clock perioperative monitoring.
            </p>
            <div style={{ marginTop: '24px' }}>
              <button
                className="button"
                style={{ background: '#0b526b', border: '1px solid #79d9cd', color: '#fff' }}
                onClick={() => navigate('departments')}
              >
                View All 8 Surgical Specialties <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="surgery-list">
            {surgicalDepartments.map((s) => (
              <span
                key={s.id}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('departments', s.id)}
              >
                ✓ {s.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS SECTION */}
      <section id="doctors" className="section doctors">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="kicker">MEET THE CARE TEAM</span>
              <h2>Doctors who listen.</h2>
            </div>
            <button className="outline" onClick={() => navigate('doctors')}>
              View Full Doctor Profiles <ArrowRight size={17} />
            </button>
          </div>

          <div className="doctor-grid">
            {doctors.map((d) => (
              <article className="doctor" key={d.id}>
                <div className="doctor-avatar">
                  <Stethoscope />
                </div>
                <div>
                  <span className="doctor-role">{d.role}</span>
                  <h3>{d.name}</h3>
                  <p className="doctor-qual">{d.qualification}</p>
                  <p style={{ margin: '4px 0 8px', fontSize: '11px', color: '#07516c', fontWeight: 600 }}>
                    {d.hospital}
                  </p>
                  <p>{d.bio}</p>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                    <button
                      className="button"
                      style={{ padding: '8px 14px', fontSize: '12px' }}
                      onClick={() => onBookClick(d.name)}
                    >
                      Book with {d.name.split(' ')[1]} <ArrowRight size={14} />
                    </button>
                    <a
                      href="#doctors"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('doctors', d.id);
                      }}
                      style={{ fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#079ca8', fontWeight: 700 }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS & INFRASTRUCTURE */}
      <section className="section gallery-preview-sec" style={{ background: '#f8fbfb' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="kicker">CAMPUS & INFRASTRUCTURE</span>
              <h2>Inside Saraswati Superspeciality Hospital</h2>
            </div>
            <button
              className="outline"
              onClick={() => navigate('media')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              View Full Campus Gallery ({hospitalPhotos.length} Photos) <ArrowRight size={16} />
            </button>
          </div>

          <p style={{ color: '#68818b', fontSize: '13px', marginTop: '-18px', marginBottom: '28px', maxWidth: '660px', lineHeight: '1.7' }}>
            Take a visual tour inside our hospital in Maliwada, Ahilyanagar — featuring modern modular operation theatres, sterile labour suites, 10-bed ICU, and patient care rooms.
          </p>

          <div className="photo-grid-preview">
            {hospitalPhotos.slice(0, 6).map((photo, idx) => (
              <div
                key={idx}
                className="photo-preview-item"
                onClick={() => setActivePhotoModal(photo)}
                title={`Click to view ${photo.title}`}
              >
                <img src={photo.src} alt={photo.title} loading="lazy" decoding="async" />
                <span>{photo.title}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '35px' }}>
            <button className="button" onClick={() => navigate('media')}>
              View All Facilities, Reels & Videos <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / REELS & VIDEOS SECTION */}
      <section className="social-proof">
        <div className="wrap social-in">
          <div>
            <span className="kicker light">EXPLORE OUR CARE IN ACTION</span>
            <h2>Follow our journey online.</h2>
            <p>
              Watch our Instagram Reels and YouTube videos highlighting patient care, 10-bed ICU, and birth moments.
            </p>
          </div>
          <div className="social-icon-buttons">
            <a
              href={hospitalInfo.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="social-round-btn"
              title="Follow on Instagram (@saraswati_hospitals)"
              aria-label="Instagram"
            >
              <InstagramIcon size={26} />
            </a>
            <a
              href={hospitalInfo.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="social-round-btn"
              title="Subscribe on YouTube (@saraswatihospital898)"
              aria-label="YouTube"
            >
              <YouTubeIcon size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* INSTAGRAM REELS SPOTLIGHT */}
      <section className="section" style={{ background: '#fcfdfd', paddingBottom: '30px' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="kicker">INSTAGRAM REELS</span>
              <h2>Featured Reels from @saraswati_hospitals</h2>
            </div>
            <a
              className="outline"
              href={hospitalInfo.socials.instagram}
              target="_blank"
              rel="noreferrer"
              title="Instagram Profile"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <InstagramIcon size={18} /> @saraswati_hospitals
            </a>
          </div>

          <div className="reels-grid">
            {instagramReels.map((reel, index) => (
              <div
                key={reel.id}
                className="reel-card in-site-clickable"
                onClick={() => setActivePlayingVideo({ type: 'instagram', ...reel })}
                title={`Click to watch ${reel.title} inside website`}
              >
                <div className="reel-thumb-container">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="reel-thumb-img"
                    loading="lazy"
                  />
                  <div className="reel-thumb-overlay">
                    <div className="reel-play-circle">
                      <Play size={20} fill="#b3297a" />
                    </div>
                  </div>
                  <div className="reel-thumb-top-bar">
                    <span className="reel-num-tag">Reel #{index + 1}</span>
                    <span className="reel-pill-tag">{reel.tag}</span>
                  </div>
                </div>

                <div className="reel-content-box">
                  <h4>{reel.title}</h4>
                  <p>{reel.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEOS SPOTLIGHT */}
      <section className="videos section" style={{ paddingTop: '30px' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="kicker">FROM SARASWATI HOSPITAL</span>
              <h2>Stories of Care & Clinical Highlights</h2>
            </div>
            <a
              className="outline"
              href={hospitalInfo.socials.youtube}
              target="_blank"
              rel="noreferrer"
              title="YouTube Channel"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <YouTubeIcon size={20} /> @saraswatihospital898
            </a>
          </div>

          <div className="video-grid">
            {youtubeVideos.map((v) => (
              <div
                className="video in-site-video-card"
                onClick={() => setActivePlayingVideo({ type: 'youtube', ...v })}
                key={v.id}
                title={`Click to play ${v.title} inside website`}
              >
                <div className="video-thumb">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="yt-thumb-img"
                    loading="lazy"
                  />
                  <div className="yt-play-overlay">
                    <div className="yt-play-btn-small">
                      <Play size={18} fill="#fff" />
                    </div>
                  </div>
                </div>
                <div style={{ padding: '14px 15px 16px' }}>
                  <b style={{ margin: '0', display: 'block', color: 'var(--deep)', fontSize: '13px', lineHeight: 1.4 }}>
                    {v.title}
                  </b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 EMERGENCY & GOOGLE MAPS LOCATION SECTION */}
      <section className="emergency-location-section" id="emergency-desk">
        <div className="wrap">
          <div className="emergency-location-grid">
            {/* Left Column: Emergency Information & Fast Actions */}
            <div className="emergency-content-card">
              <span className="emergency-kicker">NEED IMMEDIATE MEDICAL ATTENTION?</span>
              <h2>24/7 Emergency & Critical ICU Care</h2>
              <p className="emergency-lead-desc">
                Dedicated obstetrics resuscitation, modular surgical suites, and 10-bed intensive care unit equipped to manage emergencies immediately at all hours.
              </p>

              <div className="emergency-address-box">
                <div className="address-header">
                  <MapPin size={20} className="address-pin-icon" />
                  <div>
                    <strong>Saraswati Superspeciality Hospital</strong>
                    <span>Bhopale Lane, Maliwada, Ahilyanagar (Ahmednagar), Maharashtra 414001</span>
                  </div>
                </div>
                <div className="address-meta-row">
                  <span className="address-badge">
                    <Clock3 size={13} /> Open 24 Hours
                  </span>
                  <span className="address-badge">
                    <Navigation size={13} /> 5 Mins from Maliwada Bus Stand
                  </span>
                  <span className="address-badge">
                    <Ambulance size={13} /> 24/7 Dedicated Ambulance Bay
                  </span>
                </div>
              </div>

              <div className="emergency-action-buttons">
                <a
                  href={`tel:${hospitalInfo.phone}`}
                  className="emergency-call-btn"
                  title="Call Emergency Hotline 0241-2414747"
                >
                  <Phone size={17} /> Call 0241-2414747
                </a>
                <button
                  type="button"
                  className="emergency-request-btn"
                  onClick={() => onBookClick()}
                >
                  <CalendarCheck size={17} /> Request Online
                </button>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Saraswati Superspeciality Hospital, Bhopale Lane, Maliwada, Ahilyanagar')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="emergency-map-link-btn"
                >
                  <ExternalLink size={15} /> Open in Google Maps
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Google Maps Embed with Hospital Location */}
            <div className="emergency-map-card">
              <div className="emergency-map-header">
                <div className="map-title-row">
                  <MapPin size={18} style={{ color: '#079ca8' }} />
                  <div>
                    <h4>Hospital Location on Google Maps</h4>
                    <small>Maliwada, Ahilyanagar • Interactive Directions</small>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Saraswati Superspeciality Hospital, Bhopale Lane, Maliwada, Ahilyanagar')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="map-fullscreen-btn"
                  title="Open full Google Maps directions"
                  aria-label="Open in Google Maps"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="emergency-iframe-wrapper">
                <iframe
                  title="Saraswati Superspeciality Hospital Google Maps Location"
                  src="https://maps.google.com/maps?q=Bhopale%20Lane,%20Maliwada,%20Ahilyanagar,%20Maharashtra%20414001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="310"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="emergency-map-footer">
                <span>📍 Bhopale Lane, Maliwada, Ahilyanagar 414001</span>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Saraswati Superspeciality Hospital, Bhopale Lane, Maliwada, Ahilyanagar')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="directions-link-action"
                >
                  <Navigation size={13} /> Start GPS Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1-CLICK IN-WEBSITE VIDEO PLAYER MODAL */}
      <VideoPlayerModal
        video={activePlayingVideo}
        onClose={() => setActivePlayingVideo(null)}
      />

      {/* PHOTO LIGHTBOX MODAL */}
      {activePhotoModal && (
        <div className="modal-backdrop" onClick={() => setActivePhotoModal(null)}>
          <div className="modal-card lightbox-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActivePhotoModal(null)}
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>
            <img src={activePhotoModal.src} alt={activePhotoModal.title} />
            <div className="lightbox-caption">
              <strong>{activePhotoModal.title}</strong>
              <small>Saraswati Superspeciality Hospital, Ahilyanagar</small>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
