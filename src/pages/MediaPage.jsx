import React, { useState } from 'react';
import {
  Play,
  ExternalLink,
  Image as ImageIcon,
  FolderOpen,
  X,
  Eye,
  CheckCircle2
} from 'lucide-react';
import {
  instagramReels,
  youtubeVideos,
  hospitalPhotos,
  hospitalInfo
} from '../data/hospitalData';
import { InstagramIcon, YouTubeIcon } from '../components/SocialIcons';
import VideoPlayerModal from '../components/VideoPlayerModal';

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'youtube' | 'instagram' | 'photos'
  const [activePlayingVideo, setActivePlayingVideo] = useState(null);
  const [activePhotoModal, setActivePhotoModal] = useState(null);

  return (
    <div className="page-wrap">
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="wrap">
          <span className="eyebrow">PATIENT STORIES & VISUAL TOUR</span>
          <h1>Media, Reels & Hospital Gallery</h1>
          <p>
            Explore real patient stories, modular surgical rooms, maternity delivery suites, and care updates from our official channels.
          </p>
        </div>
      </section>

      {/* MEDIA FILTER CONTROLS */}
      <section className="section" style={{ paddingTop: '35px', paddingBottom: '25px' }}>
        <div className="wrap">
          <div className="dept-controls">
            <div className="dept-tabs">
              <button
                className={`dept-tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Media
              </button>
              <button
                className={`dept-tab ${activeTab === 'youtube' ? 'active' : ''}`}
                onClick={() => setActiveTab('youtube')}
              >
                ▶ YouTube Videos (4)
              </button>
              <button
                className={`dept-tab ${activeTab === 'instagram' ? 'active' : ''}`}
                onClick={() => setActiveTab('instagram')}
              >
                📸 Instagram Reels (4)
              </button>
              <button
                className={`dept-tab ${activeTab === 'photos' ? 'active' : ''}`}
                onClick={() => setActiveTab('photos')}
              >
                🏥 Hospital Photos ({hospitalPhotos.length})
              </button>
            </div>

            {/* Icon-only social links (no text label) */}
            <div className="media-external-links" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <a
                href={hospitalInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="channel-badge-icon"
                title="Follow on Instagram (@saraswati_hospitals)"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={hospitalInfo.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="channel-badge-icon"
                title="Subscribe on YouTube (@saraswatihospital898)"
                aria-label="YouTube"
              >
                <YouTubeIcon size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEOS SECTION */}
      {(activeTab === 'all' || activeTab === 'youtube') && (
        <section className="section" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="kicker">YOUTUBE VIDEO STORIES</span>
                <h2>Official Hospital Channel Videos</h2>
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

            <div className="yt-video-grid">
              {youtubeVideos.map((vid) => (
                <div
                  className="yt-video-card in-site-clickable"
                  key={vid.id}
                  onClick={() => setActivePlayingVideo({ type: 'youtube', ...vid })}
                  title={`Click to play ${vid.title} inside website`}
                >
                  <div className="yt-thumb-wrapper">
                    <img
                      src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                      alt={vid.title}
                      className="yt-thumb-img"
                    />
                    <div className="yt-play-overlay">
                      <div className="yt-play-btn">
                        <Play size={22} fill="currentColor" />
                      </div>
                    </div>
                    <span className="yt-category-tag">{vid.category}</span>
                  </div>

                  <div className="yt-card-content">
                    <h4>{vid.title}</h4>
                    <p>{vid.desc}</p>
                    <div className="yt-card-links">
                      <button
                        type="button"
                        className="watch-in-site-btn"
                        style={{ marginTop: 0 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePlayingVideo({ type: 'youtube', ...vid });
                        }}
                      >
                        <Play size={13} fill="currentColor" /> Play in Website
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INSTAGRAM REELS SECTION */}
      {(activeTab === 'all' || activeTab === 'instagram') && (
        <section className="section" style={{ background: '#f5faf9', paddingTop: '50px', paddingBottom: '60px' }}>
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="kicker">INSTAGRAM REELS & HIGHLIGHTS</span>
                <h2>Short Videos from @saraswati_hospitals</h2>
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
              {instagramReels.map((reel, idx) => (
                <div
                  className="reel-card detailed in-site-clickable"
                  key={reel.id}
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
                        <Play size={22} fill="#b3297a" />
                      </div>
                    </div>
                    <div className="reel-thumb-top-bar">
                      <span className="reel-num-tag">Reel 0{idx + 1}</span>
                      <span className="reel-pill-tag">{reel.tag}</span>
                    </div>
                  </div>

                  <div className="reel-content-box">
                    <h4>{reel.title}</h4>
                    <p>{reel.desc}</p>

                    <button
                      type="button"
                      className="watch-in-site-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePlayingVideo({ type: 'instagram', ...reel });
                      }}
                    >
                      <Play size={13} fill="currentColor" /> Watch Reel in Website
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HOSPITAL PHOTO GALLERY */}
      {(activeTab === 'all' || activeTab === 'photos') && (
        <section className="section" style={{ paddingTop: '50px', paddingBottom: '70px' }}>
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="kicker">HOSPITAL INFRASTRUCTURE & INTERIORS</span>
                <h2>Hospital Campus Gallery</h2>
              </div>
              <a
                className="outline"
                href={hospitalInfo.socials.driveGallery}
                target="_blank"
                rel="noreferrer"
              >
                <FolderOpen size={16} /> Open Google Drive Folder <ExternalLink size={14} />
              </a>
            </div>

            <p style={{ color: '#68818b', fontSize: '13px', marginTop: '-15px', marginBottom: '25px' }}>
              High-resolution photographs of our reception, ICU, operation theatres, labour rooms, and patient wards in Ahilyanagar.
            </p>

            <div className="hospital-photos-grid">
              {hospitalPhotos.map((photo, index) => (
                <div
                  className="photo-card"
                  key={index}
                  onClick={() => setActivePhotoModal(photo)}
                >
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                  <div className="photo-card-caption">
                    <span>{photo.title}</span>
                    <Eye size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 1-CLICK IN-WEBSITE VIDEO PLAYER MODAL (YOUTUBE & INSTAGRAM REELS) */}
      <VideoPlayerModal
        video={activePlayingVideo}
        onClose={() => setActivePlayingVideo(null)}
      />

      {/* PHOTO LIGHTBOX MODAL */}
      {activePhotoModal && (
        <div className="modal-backdrop" onClick={() => setActivePhotoModal(null)}>
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActivePhotoModal(null)}
              aria-label="Close photo"
            >
              <X size={22} />
            </button>
            <img src={activePhotoModal.src} alt={activePhotoModal.title} />
            <div className="lightbox-caption">
              <strong>{activePhotoModal.title}</strong>
              <small>Saraswati Superspeciality Hospital, Ahilyanagar</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
