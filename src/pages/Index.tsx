
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import EventTypes from '@/components/home/EventTypes';
import FeaturedVenues from '@/components/home/FeaturedVenues';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <EventTypes />
      <FeaturedVenues />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
