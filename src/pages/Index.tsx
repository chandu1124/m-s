import React from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50 overflow-x-hidden w-full">
      <Navigation />
      <Hero />
      <OurStory />
      <EventDetails />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
