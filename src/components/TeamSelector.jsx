import React from 'react';
import ashishPhoto from '../assets/team-ashish.png';
import tanishqPhoto from '../assets/team-tanishq.png';
import tanmayPhoto from '../assets/team-tanmay.png';
import saikatPhoto from '../assets/team-saikat.png';
import ayushPhoto from '../assets/team-ayush.png';

/* TEAM DATA
   Every portrait is supplied pre-cropped to a 200px circle with transparent
   corners, so no crop anchor or zoom is needed per member.
   Members with no photograph fall back to an initials circle automatically.

   TODO(PHOTO-RES): the supplied files are 200x200 and the circle renders at
   ~199px, so they are exactly 1x — slightly soft on retina screens. 400px
   versions would render crisply.
   TODO(ROLE): these roles are the functional areas the previous build showed as
   tags. If anyone carries a real job title, put it here.
   TODO(LINKEDIN): unsupplied, so no profile links are rendered. */
const TEAM = [
  {
    name: 'Ashish Kumar Roule',
    initials: 'AK',
    role: 'Tech Engineer',
    photo: ashishPhoto,
  },
  {
    name: 'Tanishq',
    initials: 'T',
    role: 'AI & Technology',
    photo: tanishqPhoto,
  },
  {
    name: 'Tanmay Bhaat',
    initials: 'TB',
    role: 'Sales & Marketing',
    photo: tanmayPhoto,
  },
  {
    name: 'Saikat Maiti',
    initials: 'SM',
    role: 'Product Design',
    photo: saikatPhoto,
  },
  {
    name: 'Ayush Singhal',
    initials: 'AS',
    role: 'Tech Engineer',
    photo: ayushPhoto,
  },
];

export default function TeamSelector() {
  return (
    <ul className="tm-people">
      {TEAM.map((m) => (
        <li className="tm-person reveal" key={m.name}>
          <div className="tm-circle">
            {m.photo ? (
              <img
                src={m.photo}
                alt={`Portrait of ${m.name}`}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="tm-initials" aria-hidden="true">{m.initials}</span>
            )}
          </div>
          <h3>{m.name}</h3>
          <p>{m.role}</p>
        </li>
      ))}
    </ul>
  );
}

export { TEAM };
