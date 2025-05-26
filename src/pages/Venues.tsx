
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users } from 'lucide-react';

const Venues = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const venues = [
    {
      id: 1,
      name: 'Grand Ballroom',
      capacity: '200-300 guests',
      size: '5,000 sq ft',
      description: 'Our largest and most elegant space, perfect for weddings, galas, and large conferences. The Grand Ballroom features high ceilings with crystal chandeliers, a spacious dance floor, and state-of-the-art sound and lighting systems.',
      amenities: ['Stage', 'Dance floor', 'Premium sound system', 'Adjustable lighting', 'Private entrance'],
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
      category: 'large'
    },
    {
      id: 2,
      name: 'Conference Center',
      capacity: '50-100 guests',
      size: '2,000 sq ft',
      description: 'Modern space equipped with the latest technology for business events, training sessions, and seminars. The Conference Center offers flexible seating arrangements and comprehensive audio-visual facilities.',
      amenities: ['Projectors', 'Video conferencing', 'High-speed internet', 'Whiteboards', 'Breakout areas'],
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
      category: 'medium'
    },
    {
      id: 3,
      name: 'Pavilion',
      capacity: '80-150 guests',
      size: '3,000 sq ft',
      description: 'Beautiful outdoor covered space surrounded by landscaped areas, perfect for ceremonies, receptions, and social events. The Pavilion offers a blend of indoor comfort with an outdoor atmosphere.',
      amenities: ['Views', 'Natural lighting', 'Climate controlled', 'Patio access', 'Bridal suite'],
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
      category: 'medium'
    },
    {
      id: 4,
      name: 'Executive Boardroom',
      capacity: '10-20 guests',
      size: '500 sq ft',
      description: 'Intimate setting ideal for board meetings, small workshops, and business gatherings. The Executive Boardroom features a large conference table and comfortable seating for productive discussions.',
      amenities: ['Conference table', 'Leather chairs', 'Smart TV', 'Video conferencing', 'Catering service'],
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
      category: 'small'
    },
    {
      id: 5,
      name: 'Celebration Hall',
      capacity: '100-200 guests',
      size: '3,500 sq ft',
      description: 'Versatile space for mid-sized events including weddings, corporate functions, and social gatherings. The Celebration Hall can be customized to match your event theme and requirements.',
      amenities: ['Customizable layout', 'Bar area', 'Sound system', 'Ambient lighting', 'Adjoining patio'],
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
      category: 'large'
    },
    {
      id: 6,
      name: 'Memorial Room',
      capacity: '30-60 guests',
      size: '1,200 sq ft',
      description: 'A serene and dignified space designed specifically for memorial services and celebrations of life. The Memorial Room offers a peaceful atmosphere where families can honor their loved ones.',
      amenities: ['Privacy screens', 'Comfortable seating', 'Audio system', 'Display areas', 'Adjoining reflection garden'],
      image: 'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
      category: 'small'
    },
  ];

  // Filter venues based on active tab
  const filteredVenues = activeTab === "all" 
    ? venues 
    : venues.filter(venue => venue.category === activeTab);

  return (
    <Layout>
      <div className="bg-cream-50 py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="mb-4">Our <span className="text-gold-500">Venues</span></h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our beautiful event spaces, each designed to create the perfect atmosphere for your special occasion.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          {/* Filter Tabs */}
          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="all" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  All Venues
                </TabsTrigger>
                <TabsTrigger value="small" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Small (up to 60)
                </TabsTrigger>
                <TabsTrigger value="medium" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Medium (60-150)
                </TabsTrigger>
                <TabsTrigger value="large" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Large (150+)
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {filteredVenues.map(venue => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="small">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {filteredVenues.map(venue => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="medium">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {filteredVenues.map(venue => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="large">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {filteredVenues.map(venue => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">Venue Features</h2>
              <p className="text-gray-700 mb-6">
                All of our event spaces include the following amenities to ensure your event is a success:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Climate control for year-round comfort</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Complimentary Wi-Fi for guests and organizers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Accessible entrances and facilities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>On-site parking for guests</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Professional event staff</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Security services for your peace of mind</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">Booking Information</h2>
              <p className="text-gray-700 mb-4">
                Ready to book your event at Ms Dee's Event Center? Here's what you need to know:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Reservations should be made at least 2 weeks in advance for small events, and 1-3 months for larger events.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>A 50% deposit is required to confirm your booking, with the remaining balance due 7 days before the event.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>We recommend scheduling a venue tour before making your reservation.</span>
                </li>
              </ul>
              <div className="flex space-x-4">
                <Button asChild className="bg-gold-500 hover:bg-gold-600">
                  <Link to="/bookings">Book Now</Link>
                </Button>
                <Button asChild variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Venue Card Component
const VenueCard = ({ venue }: { venue: any }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={venue.image} 
          alt={venue.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">{venue.name}</h3>
        <div className="flex items-center text-sm text-gray-700 mb-3">
          <Users className="h-4 w-4 mr-2 text-gold-500" />
          <span>Capacity: {venue.capacity}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{venue.description}</p>
        <Button asChild variant="outline" className="w-full border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white">
          <Link to={`/venues/${venue.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
};

export default Venues;
