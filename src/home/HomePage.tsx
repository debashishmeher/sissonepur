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
        <title>Sukanti International School Sonepur</title>
        <meta
          name="description"
          content="Sukanti International School in Sonepur, Odisha offers premium CBSE curriculum education with modern facilities, experienced faculty, and holistic development programs for students."
        />
        <meta
          name="keywords"
          content="Sukanti International School, best CBSE school Sonepur, English medium school Odisha, top schools in Sonepur, quality education Sonepur, CBSE school Odisha, international standard school Sonepur"
        />
        <link rel="canonical" href="https://sissonepur.com/" />
        <meta
          property="og:title"
          content="Sukanti International School - Premier CBSE Education in Sonepur, Odisha"
        />
        <meta
          property="og:description"
          content="Discover excellence in education at Sukanti International School, offering CBSE curriculum with modern facilities and holistic development programs in Sonepur."
        />
        <meta property="og:url" content="https://sissonepur.com/" />
        <meta
          property="og:image"
          content="https://sissonepur.com/src/photos/banner1.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sukanti International School" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sukanti International School - Premier CBSE Education in Sonepur"
        />
        <meta
          name="twitter:description"
          content="Top-ranked English medium CBSE school in Sonepur, Odisha with modern facilities and experienced faculty."
        />
        <meta
          name="twitter:image"
          content="https://sissonepur.com/src/photos/banner1.jpg"
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
