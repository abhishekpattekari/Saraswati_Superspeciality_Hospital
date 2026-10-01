import React from 'react';
import { X, ExternalLink, Play } from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from './SocialIcons';

export default function VideoPlayerModal({ video, onClose }) {
  if (!video) return null;

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
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal-card in-site-video-modal ${isInstagram ? 'reel-modal-card' : 'yt-modal-card'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close video player">
          <X size={20} />
        </button>

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
            <a
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="text-link"
              style={{ fontSize: '11px' }}
            >
              Open externally <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
