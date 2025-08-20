import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import LoadingSpinner from "./components/LoadingSpinner";
// import SchoolInfo from "./mandatory/Mandatory";
import MandatoryPage from "./mandatory/MandatoryPage";

// Lazy load all pages
const HomePage = React.lazy(() => import("./home/HomePage"));
const AboutPage = React.lazy(() => import("./about/AboutPage"));
const AchievementPage = React.lazy(
  () => import("./achievement/AchievementPage")
);
const ContactPage = React.lazy(() => import("./contact/ContactPage"));
const InfrastructurePage = React.lazy(
  () => import("./infrastructure/InfrastructurePage")
);
const AcademicPage = React.lazy(() => import("./academic/AcademicPage"));
const EventsPage = React.lazy(() => import("./events/EventsPage"));
const GalleryPage = React.lazy(() => import("./gallery/GalleryPage"));

// Scroll to top component
function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/achievement" element={<AchievementPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/academic" element={<AcademicPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/mandatory" element={<MandatoryPage />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}
