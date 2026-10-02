import React, { useState, useEffect } from 'react';
import {
  Baby,
  HeartPulse,
  ShieldCheck,
  Activity,
  Stethoscope,
  Scissors,
  CheckCircle2,
  CalendarCheck,
  Search,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import { obstetricsGynecologyUnits, surgicalDepartments } from '../data/hospitalData';

export default function DepartmentsPage({ selectedDeptId, onBookClick }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'obgyn' | 'surgical'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDetail, setActiveDetail] = useState(null);

  useEffect(() => {
    if (selectedDeptId) {
      const matchOb = obstetricsGynecologyUnits.find((u) => u.id === selectedDeptId);
      if (matchOb) {
        setActiveTab('obgyn');
        setActiveDetail(matchOb);
        return;
      }
      const matchSurg = surgicalDepartments.find((s) => s.id === selectedDeptId);
      if (matchSurg) {
        setActiveTab('surgical');
        setActiveDetail(matchSurg);
      }
    }
  }, [selectedDeptId]);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Baby': return <Baby />;
      case 'HeartPulse': return <HeartPulse />;
      case 'ShieldCheck': return <ShieldCheck />;
      case 'Activity': return <Activity />;
      default: return <Stethoscope />;
    }
  };

  const filteredObGyn = obstetricsGynecologyUnits.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSurgical = surgicalDepartments.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-wrap">
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="wrap">
          <span className="eyebrow">CLINICAL EXCELLENCE & SPECIALTIES</span>
          <h1>Our Medical & Surgical Departments</h1>
          <p>
            From specialized maternity suites and high-risk pregnancy management to a modern 10-bed ICU and multi-specialty surgery in Ahilyanagar.
          </p>
        </div>
      </section>

      {/* FILTER TABS & SEARCH */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '30px' }}>
        <div className="wrap">
          <div className="dept-controls">
            <div className="dept-tabs">
              <button
                className={`dept-tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Specialties (15)
              </button>
              <button
                className={`dept-tab ${activeTab === 'obgyn' ? 'active' : ''}`}
                onClick={() => setActiveTab('obgyn')}
              >
                Obstetrics & Gynecology (7)
              </button>
              <button
                className={`dept-tab ${activeTab === 'surgical' ? 'active' : ''}`}
                onClick={() => setActiveTab('surgical')}
              >
                Surgical Departments & 10-Bed ICU (8)
              </button>
            </div>

            <div className="dept-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search departments (e.g. Laparoscopy, Urology, Sonography)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* OBSTETRICS & GYNECOLOGY UNITS */}
      {(activeTab === 'all' || activeTab === 'obgyn') && (
        <section className="section" style={{ paddingTop: '20px' }}>
          <div className="wrap">
            <div className="dept-section-title">
              <div>
                <span className="kicker">WOMEN'S HEALTH & MATERNITY</span>
                <h2>Obstetrics & Gynecology Units</h2>
              </div>
              <p>Specialized maternal, neonatal, and reproductive clinical divisions.</p>
            </div>

            <div className="department-grid">
              {filteredObGyn.map((unit) => (
                <article
                  className={`department with-image ${activeDetail?.id === unit.id ? 'highlighted-dept' : ''}`}
                  key={unit.id}
                >
                  <div className="dept-image-frame">
                    <img
                      src={unit.image}
                      alt={unit.title}
                      className="dept-img"
                      loading="lazy"
                    />
                    <div className="dept-image-overlay" />
                    <span className="dept-category-overlay-badge">{unit.category}</span>
                    <div className="dept-icon-floating">{getIcon(unit.icon)}</div>
                  </div>

                  <div className="dept-content">
                    <h3>{unit.title}</h3>
                    <p>{unit.shortDesc}</p>

                    <ul className="dept-highlights-list">
                      {unit.highlights.slice(0, 3).map((h, i) => (
                        <li key={i}>
                          <CheckCircle2 size={13} className="bullet-check" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="dept-card-actions">
                      <button
                        className="dept-action-link"
                        onClick={() => setActiveDetail(unit)}
                      >
                        <Info size={14} /> Full Details
                      </button>
                      <button
                        className="button"
                        style={{ padding: '7px 12px', fontSize: '11px' }}
                        onClick={() => onBookClick('', unit.title)}
                      >
                        Book Visit
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SURGICAL DEPARTMENTS (10-BED ICU) */}
      {(activeTab === 'all' || activeTab === 'surgical') && (
        <section className="section" style={{ background: '#f5faf9', paddingTop: '50px' }}>
          <div className="wrap">
            <div className="dept-section-title">
              <div>
                <span className="kicker">ADVANCED SURGERY & CRITICAL CARE</span>
                <h2>Surgical Departments (10-Bed ICU)</h2>
              </div>
              <p>
                Backed by a modern 10-bed Intensive Care Unit, advanced modular operating theatres, and 24/7 post-operative surveillance.
              </p>
            </div>

            {/* ICU HIGHLIGHT BANNER */}
            <div className="icu-highlight-box">
              <div className="icu-icon-box">
                <HeartPulse size={36} />
              </div>
              <div>
                <h3>Dedicated 10-Bed Intensive Care Unit (ICU)</h3>
                <p>
                  Our 10-bed multi-specialty ICU provides high-dependency hemodynamic monitoring, ventilator support, and 24/7 intensivist and critical care nursing vigilance for all surgical departments, trauma cases, and acute medical emergencies.
                </p>
              </div>
            </div>

            <div className="department-grid">
              {filteredSurgical.map((dept) => (
                <article
                  className={`department ${activeDetail?.id === dept.id ? 'highlighted-dept' : ''}`}
                  key={dept.id}
                >
                  <div className="dept-icon" style={{ background: '#e1f4f6', color: '#07516c' }}>
                    <Scissors size={20} />
                  </div>
                  <span className="dept-badge" style={{ background: '#e8f3f6', color: '#07516c' }}>
                    10-Bed ICU Supported
                  </span>
                  <h3>{dept.title}</h3>
                  <p>{dept.desc}</p>

                  <ul className="dept-highlights-list">
                    {dept.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="bullet-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="dept-card-actions">
                    <button
                      className="dept-action-link"
                      onClick={() => setActiveDetail(dept)}
                    >
                      <Info size={14} /> Full Details
                    </button>
                    <button
                      className="button"
                      style={{ padding: '7px 12px', fontSize: '11px' }}
                      onClick={() => onBookClick('', dept.title)}
                    >
                      Book Visit
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DETAIL MODAL FOR DEPARTMENTS */}
      {activeDetail && (
        <div className="modal-backdrop" onClick={() => setActiveDetail(null)}>
          <div className="modal-card detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveDetail(null)}>✕</button>
            {activeDetail.image && (
              <div style={{ width: '100%', height: '210px', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
                <img src={activeDetail.image} alt={activeDetail.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            <span className="kicker">DEPARTMENT OVERVIEW</span>
            <h2>{activeDetail.title}</h2>
            <p className="detail-modal-desc">
              {activeDetail.fullDesc || activeDetail.desc}
            </p>

            <div className="detail-modal-features">
              <h4>Key Clinical Features & Capabilities:</h4>
              <ul>
                {activeDetail.highlights?.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={15} style={{ color: '#079ca8', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-modal-footer">
              <button
                className="button blue"
                onClick={() => {
                  const deptTitle = activeDetail.title;
                  setActiveDetail(null);
                  onBookClick('', deptTitle);
                }}
              >
                <CalendarCheck size={16} /> Book Appointment for {activeDetail.title}
              </button>
              <button className="outline" onClick={() => setActiveDetail(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
