import { Helmet } from 'react-helmet-async';
import TopBar from '../home/TopBar';
import Navigation from '../home/Navigation';
import HeroBanner from './HeroBanner';
import PhotoGallery from './PhotoGallery';
// import VideoGallery from './VideoGallery';
import Footer from '../home/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Gallery - SUKANTI | Photos & Videos</title>
        <meta name="description" content="Browse through our collection of photos and videos showcasing school life, events, achievements, and facilities at SUKANTI." />
        <meta name="keywords" content="school gallery, photo gallery, video gallery, school events photos, campus photos, student activities" />
        <link rel="canonical" href="https://sukantiacademy.com/gallery" />
        <meta property="og:title" content="Photo & Video Gallery - SUKANTI" />
        <meta property="og:description" content="Explore our vibrant school life through a collection of memorable moments and achievements." />
        <meta property="og:url" content="https://sukantiacademy.com/gallery" />
      </Helmet>
      <TopBar />
      <Navigation />
      <HeroBanner />
      <PhotoGallery />
      {/* <VideoGallery /> */}
      <Footer />
    </div>
  );
}