import { Helmet } from 'react-helmet-async';
import TopBar from '../home/TopBar';
import Navigation from '../home/Navigation';
import HeroBanner from './HeroBanner';
import UpcomingEvents from './UpcomingEvents';
// import PastEvents from './PastEvents';
// import Calendar from './Calendar';
// import Registration from './Registration';
import Footer from '../home/Footer';

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Events - SUKANTI | School Activities & Celebrations</title>
        <meta name="description" content="Stay updated with SUKANTI's upcoming events, celebrations, and activities. Join us for academic competitions, cultural festivals, and sports tournaments." />
        <meta name="keywords" content="school events, cultural activities, sports events, academic competitions, annual day, school calendar" />
        <link rel="canonical" href="https://sissonepur.com/events" />
        <meta property="og:title" content="Events & Activities at SUKANTI" />
        <meta property="og:description" content="Stay updated with our upcoming events, celebrations, and activities that enrich our school community." />
        <meta property="og:url" content="https://sissonepur.com/events" />
      </Helmet>
      <TopBar />
      <Navigation />
      <HeroBanner />
      <UpcomingEvents />
      {/* <PastEvents />
      <Calendar />
      <Registration /> */}
      <Footer />
    </div>
  );
}