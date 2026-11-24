// All band content lives here. Swap placeholders for the real thing.

export const site = {
  name: 'Band Name',
  tagline: 'Loud songs for quiet rooms.',
  description: 'Official website of Band Name. New music, links, and booking.',
  location: 'Somewhere, Earth',
  email: 'hello@example.com',

  // Placeholder photos from picsum.photos. Replace with files in /public, e.g. '/images/hero.jpg'.
  images: {
    hero: 'https://picsum.photos/seed/band-hero/1920/1280?grayscale',
    about: 'https://picsum.photos/seed/band-about/1000/1250?grayscale',
  },

  about: [
    'Band Name is a four-piece from Somewhere, making music that sits between late-night radio and a basement show.',
    'Placeholder bio: replace this with a couple of sentences about who you are, how you started, and what you sound like.',
  ],

  // Spotify embed URL. In Spotify: Share → Embed → copy the src from the iframe.
  // Works with artist, album, track or playlist URLs, e.g. https://open.spotify.com/embed/artist/<id>
  spotifyEmbed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0',

  links: [
    { label: 'Spotify', handle: 'Listen on Spotify', href: 'https://open.spotify.com/' },
    { label: 'Apple Music', handle: 'Listen on Apple Music', href: 'https://music.apple.com/' },
    { label: 'Bandcamp', handle: 'Buy the music', href: 'https://bandcamp.com/' },
    { label: 'YouTube', handle: 'Watch videos', href: 'https://youtube.com/' },
    { label: 'Instagram', handle: '@bandname', href: 'https://instagram.com/' },
    { label: 'TikTok', handle: '@bandname', href: 'https://tiktok.com/' },
  ],
};
