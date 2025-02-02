import { Helmet } from 'react-helmet-async';
import TopBar from '../home/TopBar';
import Navigation from '../home/Navigation';
import HeroBanner from './HeroBanner';
// import History from './History';
import MissionVision from './MissionVision';
// import Achievements from './Achievements';
// import Leadership from './Leadership';
// import Facilities from './Facilities';
import Footer from '../home/Footer';
import IntroPage from './IntroPage';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Us - SUKANTI | Our History & Vision</title>
        <meta name="description" content="Learn about SUKANTI's rich history, mission, vision, and commitment to educational excellence since 1990. Discover our achievements and dedicated faculty." />
        <meta name="keywords" content="SUKANTI history, school mission, vision, educational philosophy, school achievements, faculty, academic excellence" />
        <link rel="canonical" href="https://sukantiacademy.com/about" />
        <meta property="og:title" content="About SUKANTI - Excellence in Education Since 1990" />
        <meta property="og:description" content="Discover our journey of excellence in education, our values, and our commitment to nurturing the next generation of leaders." />
        <meta property="og:url" content="https://sukantiacademy.com/about" />
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