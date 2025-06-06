import { Helmet } from 'react-helmet-async'
import TopBar from '../home/TopBar'
import Navigation from '../home/Navigation'
import SchoolInfo from './Mandatory'
import Footer from '../home/Footer'

export default function MandatoryPage() {
  return (
    <div>
      <Helmet>
              <title>Infrastructure - SUKANTI | World-Class Facilities</title>
              <meta name="description" content="Experience our state-of-the-art infrastructure including modern classrooms, advanced laboratories, library, and sports facilities designed for optimal learning." />
              <meta name="keywords" content="school infrastructure, modern classrooms, science labs, library, sports facilities, digital learning, smart classrooms" />
              <link rel="canonical" href="https://sissonepur.com/infrastructure" />
              <meta property="og:title" content="World-Class Infrastructure at SUKANTI" />
              <meta property="og:description" content="Explore our state-of-the-art facilities designed to provide the perfect environment for learning and growth." />
              <meta property="og:url" content="https://sissonepur.com/infrastructure" />
            </Helmet>
            <TopBar />
            <Navigation />
            <SchoolInfo />
            <Footer />
    </div>
  )
}
