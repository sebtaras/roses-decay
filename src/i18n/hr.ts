// Croatian strings. Must have exactly the same keys as en.ts (TypeScript checks this).
import type { Dictionary } from './en';

const hr: Dictionary = {
  meta: {
    description: 'Službena stranica benda Roses Decay, pop-punk / post-hardcore benda iz Zagreba. Glazba, spotovi, linkovi i booking.',
  },
  nav: {
    listen: 'Slušaj',
    about: 'O nama',
    links: 'Linkovi',
    contact: 'Kontakt',
    home: 'Roses Decay, natrag na vrh',
    language: 'Jezik',
    themeToDark: 'Uključi tamnu temu',
    themeToLight: 'Uključi svijetlu temu',
    openMenu: 'Otvori izbornik',
    closeMenu: 'Zatvori izbornik',
    menu: 'Izbornik',
  },
  hero: {
    tagline: 'Pop-punk i post-hardcore iz Zagreba.',
    listenNow: 'Poslušaj',
    bookUs: 'Booking',
    note: 'EP je u izradi!',
  },
  listen: {
    eyebrow: 'Slušaj',
    title: 'Pojačaj',
    spotifyTitle: 'Roses Decay na Spotifyju',
    youtubeTitle: 'Roses Decay na YouTubeu',
    watchNote: '← pogledaj ovo ↑',
  },
  about: {
    eyebrow: 'O nama',
    title: 'Tko smo mi',
    photoAlt: 'Roses Decay na betonskim stepenicama punim grafita',
    photoCaption: 'to smo mi',
    paragraphs: [
      'Roses Decay je pop-punk / post-hardcore bend iz Zagreba, osnovan 2022. godine.',
      'Bend vuče korijene iz glazbe ranih 2000-ih, žanrova koji su obilježili i underground i mainstream scenu tog vremena. Blink-182, Sum 41, Funeral for a Friend, Finch, Amber Pacific, Adept, Underoath i mnogi drugi ostavili su snažan trag na njihov zvuk.',
      'Ideja benda je osvježiti pop-punk scenu novim pjesmama na engleskom jeziku i ponovno oživjeti post-hardcore. Bend je trenutno u fazi snimanja prvog EP-a.',
    ],
  },
  links: {
    eyebrow: 'Linkovi',
    title: 'Pronađi nas',
    platformCta: {
      spotify: 'Slušaj na Spotifyju',
      applemusic: 'Slušaj na Apple Musicu',
      bandcamp: 'Kupi glazbu',
      tiktok: 'Prati nas',
      instagram: 'Prati nas',
      youtube: 'Pogledaj spotove',
    },
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Javi se',
    intro: 'Booking, mediji ili samo želiš reći bok? Pošalji nam poruku i javit ćemo se.',
    form: {
      name: 'Ime',
      namePlaceholder: 'Tvoje ime',
      email: 'Email',
      emailPlaceholder: 'ti@primjer.com',
      topic: 'O čemu se radi?',
      topics: [
        { value: 'Booking', label: 'Booking' },
        { value: 'Press', label: 'Mediji' },
        { value: 'Collaboration', label: 'Suradnja' },
        { value: 'Just saying hi', label: 'Samo bok' },
      ],
      message: 'Poruka',
      messagePlaceholder: 'Napiši nam nešto više…',
      send: 'Pošalji',
      sending: 'Šaljem…',
      thanksTitle: 'Hvala!',
      thanksBody: 'Primili smo tvoju poruku i javit ćemo se uskoro.',
      errorBefore: 'Nešto je pošlo po krivu. Piši nam na',
      errorAfter: '.',
      honeypot: 'Ne ispunjavaj ovo:',
    },
  },
  footer: {
    thanks: 'hvala što si skrolao/la do kraja ♥',
    rights: 'Sva prava pridržana.',
    backToTop: 'Natrag na vrh ↑',
  },
};

export default hr;
