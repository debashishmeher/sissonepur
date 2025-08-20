import { Helmet } from "react-helmet-async";
import TopBar from "../home/TopBar";
import Navigation from "../home/Navigation";
import HeroBanner from "./HeroBanner";
import MissionVision from "./MissionVision";
import Footer from "../home/Footer";
import IntroPage from "./IntroPage";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>
          About Sukanti International School Sonepur - History, Vision & CBSE
          Excellence
        </title>
        <meta
          name="description"
          content="Discover Sukanti International School in Sonepur, Odisha - our history, mission, and vision for CBSE education excellence. Learn about our achievements, dedicated faculty, and modern campus facilities."
        />
        <meta
          name="keywords"
          content="Sukanti International School about, history of Sukanti School, school mission vision, CBSE school Sonepur, best schools in Odisha, school faculty, academic achievements, school facilities Sonepur"
        />
        <link rel="canonical" href="https://sissonepur.com/about" />
        <meta
          property="og:title"
          content="About Sukanti International School - Premier CBSE Education in Sonepur"
        />
        <meta
          property="og:description"
          content="Learn about Sukanti International School's journey, educational philosophy, and commitment to excellence in CBSE education in Sonepur, Odisha."
        />
        <meta property="og:url" content="https://sissonepur.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sukanti International School" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Sukanti International School - Excellence in Education"
        />
        <meta
          name="twitter:description"
          content="Discover the history, mission and vision of Sukanti International School, a premier CBSE institution in Sonepur, Odisha."
        />
      </Helmet>
      <TopBar />
      <Navigation />
      <HeroBanner />
      <IntroPage />
      {/* <History /> */}
      <MissionVision />
      {/* <Achievements />
      <Leadership />
      <Facilities /> */}
      <Footer />
    </div>
  );
}
