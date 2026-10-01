import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import FloatingActions from './components/FloatingActions';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DepartmentsPage from './pages/DepartmentsPage';
import DoctorsPage from './pages/DoctorsPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';

function App() {
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const path = window.location.pathname.replace('/', '').toLowerCase();
    const candidate = hash || path;

    if (candidate.startsWith('about')) return 'about';
    if (candidate.startsWith('department')) return 'departments';
    if (candidate.startsWith('doctor')) return 'doctors';
    if (candidate.startsWith('media') || candidate.startsWith('reels') || candidate.startsWith('video') || candidate.startsWith('gallery')) return 'media';
    if (candidate.startsWith('contact')) return 'contact';
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [selectedDeptParam, setSelectedDeptParam] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Appointment Modal State
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [preselectedDoctor, setPreselectedDoctor] = useState('');
  const [preselectedDept, setPreselectedDept] = useState('');

  const navigate = (pageId, extraParam = '') => {
    setActivePage(pageId);
    if (extraParam) {
      setSelectedDeptParam(extraParam);
    }
    window.location.hash = extraParam ? `${pageId}/${extraParam}` : pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookClick = (doctorName = '', deptName = '') => {
    setPreselectedDoctor(doctorName);
    setPreselectedDept(deptName);
    setIsBookModalOpen(true);
  };

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getInitialPage());
    };
    window.addEventListener('hashchange', handlePopState);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('hashchange', handlePopState);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutPage navigate={navigate} onBookClick={handleBookClick} />;
      case 'departments':
        return <DepartmentsPage selectedDeptId={selectedDeptParam} onBookClick={handleBookClick} />;
      case 'doctors':
        return <DoctorsPage onBookClick={handleBookClick} />;
      case 'media':
        return <MediaPage />;
      case 'contact':
        return <ContactPage onBookClick={handleBookClick} />;
      case 'home':
      default:
        return <HomePage navigate={navigate} onBookClick={handleBookClick} />;
    }
  };

  return (
    <div className="site">
      <Navbar
        activePage={activePage}
        navigate={navigate}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onBookClick={handleBookClick}
      />

      {renderCurrentPage()}

      <Footer navigate={navigate} onBookClick={handleBookClick} />

      <AppointmentModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        preselectedDoctor={preselectedDoctor}
        preselectedDept={preselectedDept}
      />

      <FloatingActions />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
