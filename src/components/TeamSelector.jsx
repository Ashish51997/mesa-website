import React, { useEffect, useRef, useState } from 'react';
import saikatCard from '../assets/team-saikat-card.png';
import saikatPhoto from '../assets/team-saikat-photo.jpg';
import ashishCard from '../assets/team-ashish-card.png';
import ashishPhoto from '../assets/team-ashish-photo.jpg';
import tanmayCard from '../assets/team-tanmay-card.png';
import tanmayPhoto from '../assets/team-tanmay-photo.jpg';

/* TEAM DATA
   card:     large 3:4 artwork for the detail panel (left).
   thumb:    real photograph for the selector tile (right).
   focus:    object-position for the thumb crop; full-body shots need a high
             value so the face survives the square crop.
   Members without artwork fall back to an initials tile automatically.

   TODO(CARD-NAME): all three supplied cards are printed "Saikat Maiti / UI UX
   Designer" — the template was not re-rendered per person, so Ashish's and
   Tanmay's cards currently carry Saikat's name and job title.
   TODO(BIO) / TODO(LINKEDIN): still unsupplied; both fields degrade to nothing
   rather than being invented. */
const TEAM = [
  {
    name: 'Ashish Kumar Roule',
    initials: 'AK',
    tags: ['Technology'],
    bio: null,
    linkedin: null,
    card: ashishCard,
    thumb: ashishPhoto,
    focus: '50% 22%',
  },
  {
    name: 'Saikat Maiti',
    initials: 'SM',
    tags: ['Product Design'],
    bio: null,
    linkedin: null,
    card: saikatCard,
    thumb: saikatPhoto,
    focus: '50% 28%',
  },
  {
    name: 'Tanmay Bhaat',
    initials: 'TB',
    tags: ['Sales & Marketing'],
    bio: null,
    linkedin: null,
    card: tanmayCard,
    thumb: tanmayPhoto,
    focus: '50% 30%',
  },
  {
    name: 'Tania',
    initials: 'T',
    tags: ['AI & Technology'],
    bio: null,
    linkedin: null,
    card: null,
    thumb: null,
  },
  {
    name: 'Ayush Singhal',
    initials: 'AS',
    tags: ['Technology'],
    bio: null,
    linkedin: null,
    card: null,
    thumb: null,
  },
];

const SWITCH_MS = 220;

function Portrait({ member, variant }) {
  const src = variant === 'card' ? member.card : member.thumb;
  if (src) {
    return (
      <img
        src={src}
        alt={`Portrait of ${member.name}`}
        className="tm-photo"
        loading="lazy"
        decoding="async"
        style={variant === 'thumb' && member.focus ? { objectPosition: member.focus } : undefined}
      />
    );
  }
  return (
    <div className="tm-initials" aria-hidden="true">
      {member.initials}
    </div>
  );
}

export default function TeamSelector() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const [switching, setSwitching] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const select = (i) => {
    if (i === active) return;
    setActive(i);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(i);
      return;
    }

    // Fade the current detail out, swap contents, fade back in.
    setSwitching(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setShown(i);
      setSwitching(false);
    }, SWITCH_MS);
  };

  const member = TEAM[shown];

  return (
    <div className="tm-grid">
      <article className={`tm-detail${switching ? ' is-switching' : ''}`} aria-live="polite">
        <div className="tm-detail-portrait tm-fade">
          <Portrait member={member} variant="card" />
        </div>
        <div className="tm-detail-body">
          <h3 className="tm-detail-name tm-fade">{member.name}</h3>
          <div className="tm-detail-tags tm-fade">
            {member.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {member.bio && <p className="tm-detail-bio tm-fade">{member.bio}</p>}
          <div className="tm-detail-actions tm-fade">
            {member.linkedin && (
              <a
                className="tm-btn tm-btn-primary"
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
            <a className="tm-btn tm-btn-ghost" href="#/contact">Let&rsquo;s talk</a>
          </div>
        </div>
      </article>

      <div className="tm-selector" role="group" aria-label="Select a team member">
        {TEAM.map((m, i) => (
          <button
            key={m.name}
            type="button"
            className="tm-thumb"
            aria-pressed={i === active}
            aria-label={`Show details for ${m.name}`}
            onClick={() => select(i)}
          >
            <Portrait member={m} variant="thumb" />
            <span className="tm-thumb-name">{m.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export { TEAM };
