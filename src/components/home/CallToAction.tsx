
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
          Ready to <span className="text-gold-400">Host Your Event</span> With Us?
        </h2>
        <p className="text-cream-200 max-w-2xl mx-auto mb-8 text-lg">
          Contact us today to schedule a tour of our event spaces and discuss how we can make your next event truly special.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
            <Link to="/bookings">Book Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-500/10">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
