// English strings. This file defines the shape every other language must match (see hr.ts).
const en = {
  meta: {
    description: 'Official website of Roses Decay, a pop-punk / post-hardcore band from Zagreb. Music, videos, links and booking.',
  },
  nav: {
    listen: 'Listen',
    about: 'About',
    links: 'Links',
    contact: 'Contact',
    home: 'Roses Decay, back to top',
    language: 'Language',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
  },
  hero: {
    tagline: 'Pop-punk & post-hardcore from Zagreb.',
    listenNow: 'Listen now',
    bookUs: 'Book us',
    note: 'EP in the works!',
  },
  listen: {
    eyebrow: 'Listen',
    title: 'Hear it loud',
    spotifyTitle: 'Roses Decay on Spotify',
    youtubeTitle: 'Roses Decay on YouTube',
    watchNote: '← watch this one ↑',
  },
  about: {
    eyebrow: 'About',
    title: 'Who we are',
    photoAlt: 'Roses Decay posing on graffiti-covered concrete stairs',
    photoCaption: "that's us",
    paragraphs: [
      'Roses Decay is a pop-punk / post-hardcore band from Zagreb, Croatia, formed in 2022.',
      'The band takes its roots from the music of the early 2000s, the genres that defined both the underground and the mainstream of that era. Blink-182, Sum 41, Funeral for a Friend, Finch, Amber Pacific, Adept, Underoath and many others left a big mark on their sound.',
      'The idea is to bring new life to the pop-punk scene with fresh songs in English, and to revive post-hardcore along the way. The band is currently recording its first EP.',
    ],
    basedIn: 'Based in',
    location: 'Zagreb, Croatia',
  },
  links: {
    eyebrow: 'Links',
    title: 'Find us everywhere',
    // Shown under a link when it has no @handle of its own
    platformCta: {
      spotify: 'Listen on Spotify',
      applemusic: 'Listen on Apple Music',
      bandcamp: 'Buy the music',
      tiktok: 'Follow us',
      instagram: 'Follow us',
      youtube: 'Watch our videos',
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    intro: 'Booking, press, or just want to say hi? Drop us a line and we’ll get back to you.',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      topic: 'What’s it about?',
      // value is what lands in your inbox (kept in English so emails are consistent); label is shown
      topics: [
        { value: 'Booking', label: 'Booking' },
        { value: 'Press', label: 'Press' },
        { value: 'Collaboration', label: 'Collaboration' },
        { value: 'Just saying hi', label: 'Just saying hi' },
      ],
      message: 'Message',
      messagePlaceholder: 'Tell us more…',
      send: 'Send message',
      sending: 'Sending…',
      thanksTitle: 'Thanks!',
      thanksBody: 'We got your message and will get back to you soon.',
      errorBefore: 'Something went wrong. Email us at',
      errorAfter: '.',
      honeypot: 'Don’t fill this out:',
    },
  },
  footer: {
    thanks: 'thanks for scrolling all the way down ♥',
    rights: 'All rights reserved.',
    backToTop: 'Back to top ↑',
  },
};

export default en;

/** Deep shape of the English dictionary, with string literals widened to string. */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };
export type Dictionary = Widen<typeof en>;
