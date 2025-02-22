import { Helmet } from "react-helmet-async";
import TopBar from "../home/TopBar";
import Navigation from "../home/Navigation";
import HeroBanner from "./HeroBanner";
// import Curriculum from "./Curriculum";
import Programs from "./Programs";
// import TeachingMethodology from "./TeachingMethodology";
// import Assessment from "./Assessment";
import Footer from "../home/Footer";
// import AchievementPage from "../achievement/AchievementPage";
import AcademicAchievements from "../achievement/AcademicAchievements";
// import SportsAchievements from "../achievement/SportsAchievements";
// import CulturalAchievements from "../achievement/CulturalAchievements";

export default function AcademicPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Academics - SUKANTI | Programs & Curriculum</title>
        <meta
          name="description"
          content="Explore our comprehensive academic programs, innovative curriculum, and teaching methodology. Discover how we prepare students for future success through quality education."
        />
        <meta
          name="keywords"
          content="academic programs, school curriculum, teaching methodology, CBSE curriculum, academic excellence, education quality"
        />
        <link rel="canonical" href="https://sissonepur.com/academic" />
        <meta property="og:title" content="Academic Programs at SUKANTI" />
        <meta
          property="og:description"
          content="Discover our comprehensive academic programs designed to nurture intellectual growth and prepare students for future success."
        />
        <meta property="og:url" content="https://sissonepur.com/academic" />
      </Helmet>
      <TopBar />
      <Navigation />
      <HeroBanner />
      <Programs />
      <AcademicAchievements />
      <Footer />
    </div>
  );
}
