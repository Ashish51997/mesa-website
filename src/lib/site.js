/*
  Details that appear in more than one place — the footer, the contact page and
  both legal pages. Kept here so the address can't be right in three of them and
  stale in the fourth.
*/

/* Broken for display; the footer and the contact chip render these as lines. */
export const ADDRESS_LINES = [
  'No. 70, 1, Yashika Building',
  'Manapakkam Main Rd, Manapakkam',
  'Chennai, Tamil Nadu 600125',
];

/* The same address on one line, for running prose in the legal pages. */
export const ADDRESS = ADDRESS_LINES.join(', ');
