// Band data that doesn't change between languages. All visible text lives in src/i18n/.
import logoWhite from '../assets/logo-white.png';
import logoBlack from '../assets/logo-black.png';
import underpass from '../../assets/band_photos/underpass.jpg';
import fisheye1 from '../../assets/band_photos/fisheye1.jpg';
import fisheye2 from '../../assets/band_photos/fisheye2.jpg';
import fisheye3 from '../../assets/band_photos/fisheye3.jpg';
import stairs from '../../assets/band_photos/stairs.jpg';
import bw from '../../assets/band_photos/b&w.jpg';

export type LinkIcon = 'instagram' | 'youtube' | 'spotify' | 'applemusic' | 'bandcamp' | 'tiktok';

export const site = {
  name: 'Roses Decay',
  email: 'rosesdecayofficial@gmail.com',

  // Contact form delivery via https://web3forms.com: enter the email above on their site, they email you
  // an access key, paste it here. It's designed to be public (it can only send mail to that address).
  web3formsKey: '', // TODO: paste access key

  // The logo files are trimmed copies of /assets/logo/*_nobg.png (see src/assets).
  logo: logoWhite, // for dark backgrounds
  logoDark: logoBlack, // for light paper backgrounds

  // Band photos live in /assets/band_photos. Astro resizes and converts them to WebP at build time.
  images: {
    // One of these is picked at random on every page load.
    heroPool: [underpass, fisheye2, stairs, bw, fisheye3],
    // Used for link previews when the site is shared (WhatsApp, Instagram DMs, etc.)
    share: underpass,
    about: fisheye1,
  },

  // Spotify embed URL. In Spotify: Share → Embed → copy the src from the iframe.
  // Works with artist, album, track or playlist URLs, e.g. https://open.spotify.com/embed/artist/<id>
  spotifyEmbed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0', // placeholder

  // Featured YouTube video: the ID is the part after "watch?v=" in the URL.
  youtubeId: 'NWbGoKahxLU',

  // `handle` is optional; without it the link shows a translated call to action (i18n: links.platformCta).
  links: [
    { label: 'Instagram', handle: '@rosesdecayband', href: 'https://www.instagram.com/rosesdecayband/', icon: 'instagram' },
    { label: 'YouTube', handle: '@RosesDecay', href: 'https://www.youtube.com/@RosesDecay', icon: 'youtube' },
    // Placeholders below: update or delete.
    { label: 'Spotify', href: 'https://open.spotify.com/', icon: 'spotify' },
    { label: 'Apple Music', href: 'https://music.apple.com/', icon: 'applemusic' },
    { label: 'Bandcamp', href: 'https://bandcamp.com/', icon: 'bandcamp' },
    { label: 'TikTok', href: 'https://tiktok.com/', icon: 'tiktok' },
  ] as { label: string; href: string; icon: LinkIcon; handle?: string }[],
};
