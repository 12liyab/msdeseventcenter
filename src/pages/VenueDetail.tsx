import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, Map, Users } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Slider } from '@/components/ui/slider';

// Defining type for venue data to fix TypeScript errors
interface VenueSpecifications {
  maxCapacity: number;
  seatedDinner?: number;
  theaterStyle?: number;
  cocktailReception?: number;
  boardroomStyle?: number;
  uShapeStyle?: number;
  classroomStyle?: number;
  squareFootage: number;
  ceilingHeight: string;
  outdoorArea?: string;
  seatedService?: number;
  intimateGathering?: number;
  receptionStyle?: number;
  ceremonySeating?: number;
}

interface VenuePricing {
  weekday?: string;
  weekend?: string;
  fullDay?: string;
  halfDay?: string;
  hourlyRate: string;
  deposit: string;
  service?: string;
}

interface Venue {
  id: number;
  name: string;
  capacity: string;
  size: string;
  description: string;
  longDescription: string;
  amenities: string[];
  features: string[];
  specifications: VenueSpecifications;
  pricing: VenuePricing;
  availability: string;
  images: string[];
  category: 'small' | 'medium' | 'large';
}

// This data would normally come from a database
const venuesData: Venue[] = [
  {
    id: 1,
    name: 'Grand Ballroom',
    capacity: '200-300 guests',
    size: '5,000 sq ft',
    description: 'Our largest and most elegant space, perfect for weddings, galas, and large conferences. The Grand Ballroom features high ceilings with crystal chandeliers, a spacious dance floor, and state-of-the-art sound and lighting systems.',
    longDescription: 'The Grand Ballroom at Ms Dee\'s Event Center is our crown jewel, offering an unparalleled setting for your most prestigious events. This magnificent space combines timeless elegance with modern amenities to create the perfect backdrop for weddings, galas, corporate functions, and other large-scale celebrations.\n\nWith its soaring 20-foot ceilings adorned with crystal chandeliers, the Grand Ballroom creates an immediate sense of grandeur and sophistication. The space can be transformed to match any theme or color scheme, making it infinitely adaptable to your vision.\n\nThe ballroom features a premium hardwood dance floor, perfect for evening celebrations, and can be configured in multiple ways to accommodate different event styles and group sizes. Our professional lighting system can be customized to create the perfect ambiance, from soft romantic lighting for weddings to dynamic effects for corporate presentations.',
    amenities: ['Stage', 'Dance floor', 'Premium sound system', 'Adjustable lighting', 'Private entrance', 'Bridal suite', 'Full-service bar', 'Coat check', 'Dedicated staff'],
    features: ['High ceilings with chandeliers', 'Premium hardwood floors', 'State-of-the-art AV equipment', 'Customizable lighting schemes', 'Separate cocktail area', 'Private restrooms'],
    specifications: {
      maxCapacity: 300,
      seatedDinner: 220,
      theaterStyle: 280,
      cocktailReception: 300,
      squareFootage: 5000,
      ceilingHeight: '20 ft',
    },
    pricing: {
      weekday: '$3,500',
      weekend: '$5,000',
      hourlyRate: '$500/hr (min 4 hours)',
      deposit: '50% required to reserve',
    },
    availability: 'Available for booking 7 days a week, 8:00 AM - 12:00 AM',
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    ],
    category: 'large'
  },
  {
    id: 2,
    name: 'Conference Center',
    capacity: '50-100 guests',
    size: '2,000 sq ft',
    description: 'Modern space equipped with the latest technology for business events, training sessions, and seminars. The Conference Center offers flexible seating arrangements and comprehensive audio-visual facilities.',
    longDescription: 'The Conference Center at Ms Dee\'s Event Center is designed with business professionals in mind. This versatile and sophisticated space is ideal for corporate meetings, training sessions, seminars, workshops, and presentations.\n\nOur Conference Center is equipped with cutting-edge technology, including built-in projectors, teleconferencing capabilities, and high-speed internet access. The room features modular furniture that can be arranged in various configurations to suit your specific needs, whether you\'re hosting a boardroom meeting, classroom-style training, or an interactive workshop.\n\nThe space is designed to maximize productivity with excellent acoustics, adjustable lighting, and ergonomic seating. Our dedicated business center staff can assist with any technical needs during your event, ensuring a seamless and professional experience for you and your attendees.',
    amenities: ['Projectors', 'Video conferencing', 'High-speed internet', 'Whiteboards', 'Breakout areas', 'Coffee service', 'Business center services', 'Technical support'],
    features: ['Modular furniture', 'Presentation podium', 'Multiple display screens', 'Electronic room scheduling', 'Natural lighting with blackout capability', 'Sound masking system'],
    specifications: {
      maxCapacity: 100,
      boardroomStyle: 40,
      classroomStyle: 60,
      theaterStyle: 100,
      squareFootage: 2000,
      ceilingHeight: '12 ft',
    },
    pricing: {
      fullDay: '$1,500',
      halfDay: '$800',
      hourlyRate: '$250/hr (min 2 hours)',
      deposit: '50% required to reserve',
    },
    availability: 'Available for booking Monday-Friday, 7:00 AM - 9:00 PM; Saturday, 8:00 AM - 5:00 PM',
    images: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    ],
    category: 'medium'
  },
  {
    id: 3,
    name: 'Pavilion',
    capacity: '80-150 guests',
    size: '3,000 sq ft',
    description: 'Beautiful outdoor covered space surrounded by landscaped areas, perfect for ceremonies, receptions, and social events. The Pavilion offers a blend of indoor comfort with an outdoor atmosphere.',
    longDescription: 'The Pavilion at Ms Dee\'s Event Center offers an enchanting blend of indoor comfort and outdoor beauty. This stunning covered pavilion is surrounded by meticulously landscaped areas, creating a magical setting for weddings, celebrations, and special events.\n\nThe pavilion features a solid roof and optional side panels, offering protection from the elements while maintaining the feel of an outdoor venue. The space is complemented by our beautiful landscaped areas, which include a variety of seasonal flowers, ornamental trees, and charming water features that create a picturesque backdrop for photographs.\n\nThe pavilion can be decorated to match any theme, from rustic chic to classic elegance. String lights and lanterns can be added to create a warm and inviting atmosphere as evening approaches. The Pavilion is particularly popular for wedding ceremonies, cocktail hours, and summer celebrations.',
    amenities: ['Views', 'Natural lighting', 'Climate controlled', 'Patio access', 'Bridal suite', 'Bistro lighting', 'Outdoor heaters (seasonal)', 'Access'],
    features: ['Covered pavilion with open sides', 'Stone patio', 'Pathways', 'Water features', 'Outdoor sound system', 'Scenic photo locations'],
    specifications: {
      maxCapacity: 150,
      seatedDinner: 120,
      ceremonySeating: 150,
      cocktailReception: 150,
      squareFootage: 3000,
      ceilingHeight: '15 ft',
      outdoorArea: '5,000 sq ft of surrounding gardens',
    },
    pricing: {
      weekday: '$2,500',
      weekend: '$3,800',
      hourlyRate: '$400/hr (min 4 hours)',
      deposit: '50% required to reserve',
    },
    availability: 'Available for booking seasonally from April to October, 10:00 AM - 10:00 PM',
    images: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1601073307082-d840c6e3d5a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    ],
    category: 'medium'
  },
  {
    id: 4,
    name: 'Executive Boardroom',
    capacity: '10-20 guests',
    size: '500 sq ft',
    description: 'Intimate setting ideal for board meetings, small workshops, and business gatherings. The Executive Boardroom features a large conference table and comfortable seating for productive discussions.',
    longDescription: 'The Executive Boardroom at Ms Dee\'s Event Center offers a sophisticated and private environment for high-level meetings, interviews, and small professional gatherings. This elegantly appointed room is designed to facilitate productive discussions and decision-making in comfort and style.\n\nThe centerpiece of the room is a handcrafted conference table with comfortable executive chairs, creating an atmosphere of professionalism and prestige. The boardroom is equipped with integrated technology, including a smart TV for presentations, video conferencing capabilities, and high-speed internet access.\n\nAmbient lighting, soundproofing, and climate control create an optimal environment for focused discussions. The boardroom also includes a refreshment station for coffee, water, and catering service for working lunches or dinners.',
    amenities: ['Conference table', 'Leather chairs', 'Smart TV', 'Video conferencing', 'Catering service', 'Refreshment station', 'Notepads and pens', 'Water service'],
    features: ['Solid wood conference table', 'Executive seating', 'Integrated A/V system', 'Teleconferencing phone', 'Presentation capabilities', 'Adjustable lighting'],
    specifications: {
      maxCapacity: 20,
      boardroomStyle: 16,
      uShapeStyle: 12,
      squareFootage: 500,
      ceilingHeight: '10 ft',
    },
    pricing: {
      fullDay: '$800',
      halfDay: '$500',
      hourlyRate: '$150/hr (min 2 hours)',
      deposit: '50% required to reserve',
    },
    availability: 'Available for booking Monday-Friday, 7:00 AM - 9:00 PM; Saturday, 8:00 AM - 5:00 PM',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    ],
    category: 'small'
  },
  {
    id: 5,
    name: 'Celebration Hall',
    capacity: '100-200 guests',
    size: '3,500 sq ft',
    description: 'Versatile space for mid-sized events including weddings, corporate functions, and social gatherings. The Celebration Hall can be customized to match your event theme and requirements.',
    longDescription: 'The Celebration Hall at Ms Dee\'s Event Center is a versatile and elegant venue perfect for mid-sized events that require a touch of sophistication and style. This adaptable space can be transformed to accommodate a wide variety of functions, from wedding receptions and anniversary celebrations to corporate galas and fundraising events.\n\nThe hall features an open floor plan that can be arranged in numerous configurations to suit your specific event needs. The neutral décor provides a perfect canvas for customization, allowing you to create the exact atmosphere you envision for your special occasion.\n\nWith its dedicated bar area, ambient lighting options, and quality sound system, the Celebration Hall offers all the amenities needed for a successful and memorable event. The adjoining patio provides additional space for cocktail hours or simply a quiet area for guests to step outside and enjoy the fresh air.',
    amenities: ['Customizable layout', 'Bar area', 'Sound system', 'Ambient lighting', 'Adjoining patio', 'Private restrooms', 'Coat check', 'Catering prep area'],
    features: ['Flexible floor plan', 'Neutral décor', 'Mood lighting', 'Indoor/outdoor flow', 'Dance area', 'AV capabilities'],
    specifications: {
      maxCapacity: 200,
      seatedDinner: 160,
      theaterStyle: 180,
      cocktailReception: 200,
      squareFootage: 3500,
      ceilingHeight: '14 ft',
    },
    pricing: {
      weekday: '$2,800',
      weekend: '$4,200',
      hourlyRate: '$450/hr (min 4 hours)',
      deposit: '50% required to reserve',
    },
    availability: 'Available for booking 7 days a week, 9:00 AM - 11:00 PM',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    ],
    category: 'large'
  },
  {
    id: 6,
    name: 'Memorial Room',
    capacity: '30-60 guests',
    size: '1,200 sq ft',
    description: 'A serene and dignified space designed specifically for memorial services and celebrations of life. The Memorial Room offers a peaceful atmosphere where families can honor their loved ones.',
    longDescription: 'The Memorial Room at Ms Dee\'s Event Center provides a dignified and comforting environment for memorial services, celebrations of life, and gatherings of remembrance. This thoughtfully designed space offers families a serene setting to honor and celebrate the lives of their loved ones.\n\nThe room features soft, natural lighting, comfortable seating, and a warm, inviting atmosphere that helps put guests at ease during difficult times. Privacy screens can be arranged to create more intimate areas within the space, and display areas are available for photographs, memorabilia, and tributes.\n\nOur adjoining reflection garden provides a peaceful outdoor space for quiet contemplation or small gatherings. The Memorial Room can be arranged in various configurations to accommodate different types of services, from formal traditional ceremonies to more contemporary celebrations of life.',
    amenities: ['Privacy screens', 'Comfortable seating', 'Audio system', 'Display areas', 'Adjoining reflection garden', 'Separate entrance', 'Meditation area', 'Hospitality services'],
    features: ['Soft lighting options', 'Memorial display capabilities', 'Video tribute setup', 'Acoustic treatments', 'Arrangement flexibility', 'Faith-neutral design'],
    specifications: {
      maxCapacity: 60,
      seatedService: 60,
      intimateGathering: 30,
      receptionStyle: 50,
      squareFootage: 1200,
      ceilingHeight: '10 ft',
    },
    pricing: {
      service: '$1,200',
      halfDay: '$700',
      hourlyRate: '$200/hr (min 3 hours)',
      deposit: '50% required to reserve',
    },
    availability: 'Available for booking 7 days a week, 8:00 AM - 8:00 PM',
    images: [
      'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1526739178517-974794488284?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1561000866-97d45e930362?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1509826498975-1bf6bd724e1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    ],
    category: 'small'
  },
];

const VenueDetail = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState<Venue | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (id) {
      const venueId = parseInt(id);
      const foundVenue = venuesData.find(v => v.id === venueId);
      if (foundVenue) {
        setVenue(foundVenue);
      }
      // Reset image index when venue changes
      setCurrentImageIndex(0);
    }
  }, [id]);

  const nextImage = () => {
    if (venue) {
      setCurrentImageIndex((prev) => (prev + 1) % venue.images.length);
    }
  };

  const prevImage = () => {
    if (venue) {
      setCurrentImageIndex((prev) => (prev - 1 + venue.images.length) % venue.images.length);
    }
  };

  if (!venue) {
    return (
      <Layout>
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Venue Not Found</h1>
            <p className="mb-8">The venue you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/venues">Back to Venues</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-cream-50 py-12">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="mb-2">{venue.name}</h1>
            <p className="text-gold-600 flex items-center justify-center gap-2 mb-4">
              <Users className="h-5 w-5" />
              <span>Capacity: {venue.capacity}</span>
              <span className="mx-2">•</span>
              <span>{venue.size}</span>
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <Button 
                asChild 
                className="bg-gold-500 hover:bg-gold-600"
              >
                <Link to="/bookings">Book This Venue</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white"
              >
                <Link to="/contact">Ask a Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Slider */}
      <div className="relative bg-gray-900">
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
          {venue.images.map((image: string, index: number) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`${venue.name} - View ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Navigation arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Image counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {venue.images.length}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <section className="py-12">
        <div className="container-custom">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="overview" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="amenities" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Amenities & Features
                </TabsTrigger>
                <TabsTrigger value="pricing" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Pricing & Specs
                </TabsTrigger>
                <TabsTrigger value="availability" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Availability
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-semibold mb-4 font-serif">About {venue.name}</h2>
                  <div className="text-gray-700 space-y-4">
                    {venue.longDescription.split('\n\n').map((paragraph: string, idx: number) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-cream-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 font-serif">At a Glance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-gold-500 mt-1 mr-3" />
                      <div>
                        <span className="font-medium">Capacity:</span> {venue.capacity}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Map className="w-5 h-5 text-gold-500 mt-1 mr-3" />
                      <div>
                        <span className="font-medium">Size:</span> {venue.size}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-gold-500 mt-1 mr-3" />
                      <div>
                        <span className="font-medium">Availability:</span><br /> 
                        {venue.availability}
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {venue.category === 'large' && (
                        <>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Weddings</span>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Galas</span>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Large Conferences</span>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Corporate Events</span>
                        </>
                      )}
                      {venue.category === 'medium' && (
                        <>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Ceremonies</span>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Receptions</span>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Social Events</span>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Corporate Functions</span>
                        </>
                      )}
                      {venue.category === 'small' && (
                        <>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Meetings</span>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Workshops</span>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Intimate Gatherings</span>
                          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded">Small Celebrations</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="amenities">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 font-serif">Amenities</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {venue.amenities.map((amenity: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-gold-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-6 font-serif">Features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {venue.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-gold-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pricing">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 font-serif">Pricing</h2>
                  <div className="bg-cream-50 p-6 rounded-lg">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(venue.pricing).map(([key, value]) => (
                          <tr key={key} className="border-b border-cream-200 last:border-0">
                            <td className="py-3 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                            <td className="py-3 text-right">{value as React.ReactNode}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="mt-4 text-sm text-gray-600">
                      <p>* Pricing includes basic setup and cleanup.</p>
                      <p>* Additional services available for an extra charge.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-6 font-serif">Specifications</h2>
                  <div className="bg-cream-50 p-6 rounded-lg">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(venue.specifications).map(([key, value]) => (
                          <tr key={key} className="border-b border-cream-200 last:border-0">
                            <td className="py-3 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                            <td className="py-3 text-right">{value as React.ReactNode}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="availability">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-4 font-serif">Availability Calendar</h2>
                <p className="text-gray-600 mb-6">
                  {venue.availability}
                </p>
                <div className="bg-cream-50 p-6 rounded-lg mb-8">
                  <p className="mb-4">To check exact availability for your preferred dates, please use our booking system or contact us directly.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button 
                      asChild 
                      className="bg-gold-500 hover:bg-gold-600 px-8"
                    >
                      <Link to="/bookings">Check Availability</Link>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white"
                    >
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white">
              <Link to="/venues">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Venues
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VenueDetail;
