
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FeaturedVenues = () => {
  const featuredVenues = [
    {
      id: 1,
      name: 'Grand Ballroom',
      capacity: '200-300 guests',
      description: 'Our largest and most elegant space, perfect for weddings and galas.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Conference Center',
      capacity: '50-100 guests',
      description: 'Modern space equipped with the latest technology for business events.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Pavilion',
      capacity: '80-150 guests',
      description: 'Beautiful outdoor covered space surrounded by landscaped areas.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <section className="py-16 bg-cream-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our <span className="text-gold-500">Featured Venues</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our beautiful event spaces, each designed to create the perfect atmosphere for your special occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVenues.map((venue) => (
            <div key={venue.id} className="overflow-hidden rounded-lg shadow-md bg-white group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={venue.image} 
                  alt={venue.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">{venue.name}</h3>
                <p className="text-sm text-gold-700 mb-3">Capacity: {venue.capacity}</p>
                <p className="text-gray-600 mb-4">{venue.description}</p>
                <Button asChild variant="outline" className="w-full border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white">
                  <Link to={`/venues/${venue.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-gold-500 hover:bg-gold-600">
            <Link to="/venues">View All Venues</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenues;
