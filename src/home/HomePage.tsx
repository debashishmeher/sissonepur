import { Helmet } from "react-helmet-async";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import EventsSection from "./EventsSection";
import GallerySection from "./GallerySection";
// import TeachersSection from "./TeachersSection";
import Footer from "./Footer";
import Map from "../components/Map";
// import Banner from "../photos/banner1.jpg";
import VideoSection from "./VideoSection";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sukanti International School</title>
        <meta
          name="description"
          content="Welcome to SUKANTI, where education meets excellence. Discover our programs, facilities, and achievements designed to inspire and nurture young minds."
        />
        <meta
          name="keywords"
          content="SUKANTI, quality education, school in [Location], student success, modern facilities, nurturing excellence"
        />
        <link rel="canonical" href="https://sissonepur.com/" />
        <meta property="og:title" content="Welcome to SUKANTI" />
        <meta
          property="og:description"
          content="SUKANTI offers a holistic education experience, fostering creativity, knowledge, and excellence in every student."
        />
        <meta property="og:url" content="https://sissonepur.com/" />
        <meta
          property="og:image"
          content="https://sissonepur.com/assets/images/home-banner.jpg"
        />
      </Helmet>
      <TopBar />
      <Navigation />

      <HeroSection />
      <AboutSection />
      
      <EventsSection />
      {/* <TeachersSection /> */}
      <GallerySection />
      <VideoSection />
      <Map />
      <Footer />
    </div>
  );
}

export default HomePage;
