
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-[70vh] min-h-[500px] bg-cream-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom h-full flex flex-col justify-center items-start relative z-10 text-white">
        <h1 className="mb-2 text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl">
          <span className="text-gold-400">Welcome to</span> Ms Dee's Event Center
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-8">
          The ultimate destination for unforgettable events. Your perfect space for weddings, conferences, parties, and more.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
            <Link to="/bookings">Book Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-500/10">
            <Link to="/venues">Explore Venues</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
