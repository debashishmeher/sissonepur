

// Home page images
import homeBanner from './banner1.jpg';
import homeAbout1 from './about1.png';
import homeAbout2 from './about2.jpg';
import homeAbout3 from './about3.jpg';
import homeAbout4 from './about4.jpg';
// import homeAchievement from '../assets/images/home-achievement.jpg';

// Gallery images
import gallery1 from './g1.png';
import gallery2 from './g2.png';
import gallery3 from './g3.png';
import gallery4 from './g4.png';
import gallery5 from './g5.png';
import gallery6 from './g6.png';
import gallery7 from './g7.png';
import gallery8 from './g8.png';


// Logo and icons
import logo from './logo.jpg';


// Export all images as a single object
export const images = {
  home: {
    banner: homeBanner,
    about1: homeAbout1,
    about2: homeAbout2,
    about3: homeAbout3,
    about4: homeAbout4,
  },
  gallery: {
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  },
  
  branding: {
    logo,

  },
};

// Export individual images for direct importing
export {
  homeBanner,
  homeAbout1,
  homeAbout2,
  homeAbout3,
  homeAbout4,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
};

// Export type for TypeScript support
export type ImageKeys = keyof typeof images;
export type HomeImages = keyof typeof images.home;
export type GalleryImages = keyof typeof images.gallery;
export type BrandingImages = keyof typeof images.branding;

export default images;