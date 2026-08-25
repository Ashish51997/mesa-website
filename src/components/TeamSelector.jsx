import React, { useEffect, useRef, useState } from 'react';
import saikatCard from '../assets/team-saikat-card.png';
import saikatPhoto from '../assets/team-saikat-photo.jpg';
import ashishCard from '../assets/team-ashish-card.png';
import ashishPhoto from '../assets/team-ashish-photo.jpg';
import tanmayCard from '../assets/team-tanmay-card.png';
import tanmayPhoto from '../assets/team-tanmay-photo.jpg';
import taniaCard from '../assets/team-tania-card.png';
import taniaPhoto from '../assets/team-tania-photo.jpg';
import ayushCard from '../assets/team-ayush-card.png';
import ayushPhoto from '../assets/team-ayush-photo.png';

/* Placeholder biography, supplied as demo copy and applied to every member.
   TODO(BIO): this is NOT true of everyone — it describes one person's history
   with Aone Plastic Machinery, and it uses "his" throughout. Shipping it as-is
   publishes four incorrect biographies of real, named people. Replace with a
   per-member bio (or drop the field) before this page goes live. */
const DEMO_BIO = [
  '{name} brings over 5 years of hands-on experience in running and managing a manufacturing business through his involvement with Aone Plastic Machinery.',
  'Having worked closely with day-to-day manufacturing operations, customers, processes, and business challenges, he has developed a practical understanding of the gaps and inefficiencies that businesses face in their operations.',
  'His experience at the intersection of *manufacturing, business management, and technology* drives his approach to building practical digital solutions that solve real business problems.',
];

/* TEAM DATA
   card:  3:4 artwork for the detail panel (left).
   thumb: photograph for the selector tile (right).
   focus: object-position for the thumb crop; full-length shots need a high
          value so the face survives the square crop.
   Members with no artwork fall back to an initials tile automatically.

   TODO(CARD-NAME): every supplied card is printed "Saikat Maiti / UI UX
   Designer" — the template was never re-rendered per person, so four members
   currently display Saikat's name and job title on their card.
   TODO(LINKEDIN): unsupplied; the button is omitted rather than linking to "#". */
const TEAM = [
  {
    name: 'Ashish Kumar Roule',
    initials: 'AK',
    tags: ['Technology'],
    linkedin: null,
    card: ashishCard,
    thumb: ashishPhoto,
    focus: '50% 22%',
  },
  {
    name: 'Saikat Maiti',
    initials: 'SM',
    tags: ['Product Design'],
    linkedin: null,
    card: saikatCard,
    thumb: saikatPhoto,
    focus: '50% 28%',
  },
  {
    name: 'Tanmay Bhaat',
    initials: 'TB',
    tags: ['Sales & Marketing'],
    linkedin: null,
    card: tanmayCard,
    thumb: tanmayPhoto,
    focus: '50% 22%',
  },
  {
    name: 'Tania',
    initials: 'T',
    tags: ['AI & Technology'],
    linkedin: null,
    card: taniaCard,
    thumb: taniaPhoto,
    focus: '50% 30%',
  },
  {
    name: 'Ayush Singhal',
    initials: 'AS',
    tags: ['Technology'],
    linkedin: null,
    card: ayushCard,
    thumb: ayushPhoto,
    focus: '50% 20%',
  },
];

/* Renders *emphasis* spans and substitutes the member's name. */
function bioParagraph(text, name) {
  return text.replace('{name}', name).split(/(\*[^*]+\*)/).map((chunk, i) =>
    chunk.startsWith('*') && chunk.endsWith('*')
      ? <em key={i}>{chunk.slice(1, -1)}</em>
      : chunk
  );
}

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
      {/* Selector sits above the detail so the card artwork can run full width. */}
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
          <div className="tm-detail-bio tm-fade">
            {DEMO_BIO.map((para, i) => (
              <p key={i}>{bioParagraph(para, member.name)}</p>
            ))}
          </div>
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
    </div>
  );
}

export { TEAM };
