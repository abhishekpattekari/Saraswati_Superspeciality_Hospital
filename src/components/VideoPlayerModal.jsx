import React, { useEffect } from 'react';
import { X, ExternalLink, Play } from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from './SocialIcons';

export default function VideoPlayerModal({ video, onClose }) {
  if (!video) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const isInstagram = video.type === 'instagram' || video.url?.includes('instagram.com');
  const isYouTube = video.type === 'youtube' || video.url?.includes('youtu');

  // Instagram embed URL
  const instagramEmbedUrl = isInstagram
    ? `https://www.instagram.com/reel/${video.id}/embed/`
    : null;

  // YouTube embed URL with autoplay
  const youtubeEmbedUrl = isYouTube
    ? `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`
    : null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={`modal-card in-site-video-modal ${isInstagram ? 'reel-modal-card' : 'yt-modal-card'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent Top Close Bar that is never covered by iframe */}
        <div className="video-modal-top-bar">
          <div className="video-modal-title-wrap">
            {isInstagram ? <InstagramIcon size={20} /> : <YouTubeIcon size={20} />}
            <span className="video-modal-platform-badge">
              {isInstagram ? 'Instagram Reel' : 'YouTube Video'}
            </span>
            <span className="video-modal-title-text">{video.title}</span>
          </div>
          <button
            type="button"
            className="video-header-close-btn"
            onClick={onClose}
            aria-label="Close Video Player"
            title="Close (Esc)"
          >
            <X size={18} />
            <span>Close</span>
          </button>
        </div>

        {isYouTube && (
          <div className="video-embed-container">
            <iframe
              src={youtubeEmbedUrl}
              title={video.title || "Saraswati Hospital Video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}

        {isInstagram && (
          <div className="reel-embed-container">
            <iframe
              src={instagramEmbedUrl}
              title={video.title || "Saraswati Hospital Instagram Reel"}
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
            />
          </div>
        )}

        <div className="in-site-video-info">
          <div className="video-info-header">
            {isInstagram ? <InstagramIcon size={24} /> : <YouTubeIcon size={24} />}
            <div>
              <h4>{video.title}</h4>
              {video.category && <span className="video-category-chip">{video.category}</span>}
              {video.tag && <span className="video-category-chip">{video.tag}</span>}
            </div>
          </div>

          {video.desc && <p>{video.desc}</p>}

          <div className="video-info-footer">
            <span className="playing-live-badge">
              <span className="live-dot" /> Playing in Saraswati Hospital website
            </span>

            <div className="video-footer-actions">
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="text-link"
                style={{ fontSize: '12px' }}
              >
                Open externally <ExternalLink size={13} />
              </a>
              <button
                type="button"
                className="video-footer-close-btn"
                onClick={onClose}
                aria-label="Close video player"
              >
                <X size={15} /> Close Video Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
