import React, { useEffect, useRef, useState } from 'react';

/* TEAM DATA
   photo:    null renders an initials card. Drop in an imported image to use a
             real portrait.
   tags:     short parenthesised lines under the name.
   bio:      TODO(BIO) — no bios supplied yet. The paragraph is omitted rather
             than filled with invented copy; add a string here and it renders.
   linkedin: TODO(LINKEDIN) — the button is omitted while this is null, rather
             than shipping a link to "#". */
const TEAM = [
  {
    name: 'Ashish Kumar Roule',
    initials: 'AK',
    tags: ['Technology'],
    bio: null,
    linkedin: null,
    photo: null,
  },
  {
    name: 'Saikat Maiti',
    initials: 'SM',
    tags: ['Product Design'],
    bio: null,
    linkedin: null,
    photo: null,
  },
  {
    name: 'Tanmay Bhaat',
    initials: 'TB',
    tags: ['Sales & Marketing'],
    bio: null,
    linkedin: null,
    photo: null,
  },
  {
    name: 'Tania',
    initials: 'T',
    tags: ['AI & Technology'],
    bio: null,
    linkedin: null,
    photo: null,
  },
  {
    name: 'Ayush Singhal',
    initials: 'AS',
    tags: ['Technology'],
    bio: null,
    linkedin: null,
    photo: null,
  },
];

const SWITCH_MS = 220;

function Portrait({ member, className }) {
  if (member.photo) {
    return <img src={member.photo} alt={`Portrait of ${member.name}`} className={className} />;
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
          <Portrait member={member} className="tm-photo" />
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
            <Portrait member={m} className="tm-photo" />
            <span className="tm-thumb-name">{m.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export { TEAM };
