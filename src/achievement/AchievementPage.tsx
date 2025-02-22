import { Helmet } from 'react-helmet-async';
import TopBar from '../home/TopBar';
import Navigation from '../home/Navigation';
import HeroBanner from './HeroBanner';
import AcademicAchievements from './AcademicAchievements';
import SportsAchievements from './SportsAchievements';
import CulturalAchievements from './CulturalAchievements';
import Footer from '../home/Footer';

export default function AchievementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Achievements - SUKANTI | Our Success Stories</title>
        <meta name="description" content="Celebrate our students' achievements in academics, sports, and cultural activities. Discover how SUKANTI nurtures talent and excellence." />
        <meta name="keywords" content="school achievements, academic excellence, sports achievements, cultural achievements, student success, awards" />
        <link rel="canonical" href="https://sissonepur.com/achievement" />
        <meta property="og:title" content="Achievements & Success Stories - SUKANTI" />
        <meta property="og:description" content="Celebrating excellence in academics, sports, and cultural activities. Our students' achievements reflect our commitment to holistic education." />
        <meta property="og:url" content="https://sissonepur.com/achievement" />
      </Helmet>
      <TopBar />
      <Navigation />
      <HeroBanner />
      <AcademicAchievements />
      <SportsAchievements />
      <CulturalAchievements />
      <Footer />
    </div>
  );
}