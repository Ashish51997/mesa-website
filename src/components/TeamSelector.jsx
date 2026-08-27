import React from 'react';
import groupPhoto from '../assets/team-group.png';
import snbhattPhoto from '../assets/team-snbhatt.jpg';
import syedPhoto from '../assets/team-syed.jpg';
import ashishPhoto from '../assets/team-ashish.png';
import tanishqPhoto from '../assets/team-tanishq.png';
import tanmayPhoto from '../assets/team-tanmay.png';
import saikatPhoto from '../assets/team-saikat.png';
import ayushPhoto from '../assets/team-ayush.png';

/* TEAM DATA — the roster below the group photograph.

   TODO(LINKEDIN): unsupplied, so no profile links are rendered. */
const TEAM = [
  {
    /* Seated centre in the group photograph. */
    name: 'S N Bhatt',
    role: 'Principal Advisor, Manufacturing Operations',
    experience: '50+ years',
    photo: snbhattPhoto,
  },
  {
    name: 'Ashish Kumar Roule',
    role: 'Co-Founder & Head of Engineering',
    experience: '10 years',
    photo: ashishPhoto,
  },
  {
    name: 'Tanishq',
    role: 'Co-Founder, AI & Automation',
    experience: '4 years',
    photo: tanishqPhoto,
  },
  {
    name: 'Tanmay Bhatt',
    role: 'Co-Founder & Business Transformation Lead',
    experience: '5 years',
    photo: tanmayPhoto,
  },
  {
    name: 'Saikat Maiti',
    role: 'Co-Founder & Chief Product Officer',
    experience: '10 years',
    photo: saikatPhoto,
  },
  {
    name: 'Ayush Singhal',
    role: 'Co-Founder & Founding Engineer',
    experience: '10 years',
    photo: ayushPhoto,
  },
  {
    name: 'Syed Shabib Ahamed',
    role: 'AI Engineer',
    experience: '3 years',
    photo: syedPhoto,
  },
];

export default function TeamSelector() {
  return (
    <>
      <img
        className="tm-group-img"
        src={groupPhoto}
        alt="The MesaOrigins team"
        width="1600"
        height="1066"
        decoding="async"
      />

      {/* Who's who, rather than hover targets over the faces. */}
      <ul className="tm-roster">
        {TEAM.map((m) => (
          <li className="tm-card reveal" key={m.name}>
            <img
              className="tm-card-photo"
              src={m.photo}
              alt={`Portrait of ${m.name}`}
              loading="lazy"
              decoding="async"
            />
            <div className="tm-card-body">
              <b>{m.name}</b>
              <span className="tm-card-role">{m.role}</span>
              <dl className="tm-card-meta">
                <dt>Experience</dt>
                <dd>{m.experience || '—'}</dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export { TEAM };
