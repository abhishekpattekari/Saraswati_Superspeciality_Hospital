import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, Clock, User, Phone, Stethoscope, MessageSquare } from 'lucide-react';
import { doctors, obstetricsGynecologyUnits, surgicalDepartments, hospitalInfo } from '../data/hospitalData';

export default function AppointmentModal({ isOpen, onClose, preselectedDoctor = '', preselectedDept = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    doctor: preselectedDoctor || '',
    department: preselectedDept || '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedDoctor) {
      setFormData(prev => ({ ...prev, doctor: preselectedDoctor }));
    }
    if (preselectedDept) {
      setFormData(prev => ({ ...prev, department: preselectedDept }));
    }
  }, [preselectedDoctor, preselectedDept]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      doctor: '',
      department: '',
      date: '',
      timeSlot: 'Morning (10:00 AM - 1:00 PM)',
      message: ''
    });
    onClose();
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card appointment-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close appointment modal" title="Close (Esc)">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <span className="kicker">ONLINE CONSULTATION REQUEST</span>
              <h3>Book an Appointment</h3>
              <p>Schedule a visit with Dr. Amol Jadhav, Dr. Prajakta Jadhav or our specialist clinical teams.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label><User size={14} /> Patient Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anjali Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label><Phone size={14} /> Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9823000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label><Stethoscope size={14} /> Select Doctor</label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  >
                    <option value="">Any Available Specialist</option>
                    {doctors.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.role})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Department / Specialty</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                >
                  <option value="">Select Specialty</option>
                  <optgroup label="Obstetrics & Gynecology">
                    {obstetricsGynecologyUnits.map((u) => (
                      <option key={u.id} value={u.title}>{u.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Surgical Departments (10-Bed ICU)">
                    {surgicalDepartments.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label><Calendar size={14} /> Preferred Date</label>
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label><Clock size={14} /> Preferred Time</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 3:00 PM)">Afternoon (1:00 PM - 3:00 PM)</option>
                    <option value="Evening (6:00 PM - 9:00 PM)">Evening (6:00 PM - 9:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label><MessageSquare size={14} /> Symptoms / Brief Reason</label>
                <textarea
                  rows="2"
                  placeholder="Describe consultation reason or health concerns..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="button modal-submit">
                Confirm Appointment Request
              </button>

              <div className="modal-emergency-note">
                For urgent emergencies, call directly: <strong>{hospitalInfo.phone}</strong> (24/7 Available)
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success">
            <CheckCircle size={56} className="success-icon" />
            <h3>Request Received Successfully!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. Our hospital coordinator will contact you at <strong>{formData.phone}</strong> to confirm your slot.
            </p>
            {formData.doctor && (
              <div className="success-detail">
                <span>Requested Doctor:</span> <strong>{formData.doctor}</strong>
              </div>
            )}
            <div className="success-actions">
              <a href={`tel:${hospitalInfo.phone}`} className="button blue">
                Call Hospital ({hospitalInfo.phone})
              </a>
              <button className="button" onClick={handleReset}>
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
