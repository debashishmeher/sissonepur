// import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBar from '../home/TopBar';
import Navigation from '../home/Navigation';
import HeroBanner from './HeroBanner';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';
import FAQ from './FAQ';
import Footer from '../home/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us - SUKANTI | Get in Touch</title>
        <meta name="description" content="Contact SUKANTI for admissions, inquiries, or feedback. Find our location, contact numbers, email addresses, and working hours." />
        <meta name="keywords" content="contact school, school address, admission inquiry, school contact number, school email, visit campus" />
        <link rel="canonical" href="https://sissonepur.com/contact" />
        <meta property="og:title" content="Contact SUKANTI" />
        <meta property="og:description" content="Get in touch with us. We're here to help with any questions or inquiries about admissions and our programs." />
        <meta property="og:url" content="https://sissonepur.com/contact" />
      </Helmet>
      <TopBar />
      <Navigation />
      <HeroBanner />
      <ContactInfo />
      <FAQ />
      <ContactForm />
      <LocationMap />
      <Footer />
    </div>
    // create by wees 
  );
}