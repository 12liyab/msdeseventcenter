import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { HeartHandshake, Presentation, Users, BookOpen, Image, VideoIcon } from 'lucide-react';

const Services = () => {
  const eventTypes = [
    {
      id: 'weddings',
      title: 'Weddings',
      description: 'We understand the importance of your special day. Our elegant and romantic venue provides the perfect setting for your wedding celebration. Our experienced team will work with you to bring your vision to life, ensuring that every detail is meticulously taken care of.',
      icon: <HeartHandshake className="h-12 w-12 text-gold-500" />,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 'conferences',
      title: 'Conferences',
      description: 'Ms Dee\'s Event Center is the ideal venue for your conferences, seminars, and workshops. Our modern and versatile space can accommodate a wide range of events, from small meetings to large-scale conferences. Equipped with the latest technology and amenities, we ensure your business event runs smoothly.',
      icon: <Presentation className="h-12 w-12 text-gold-500" />,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 'ceremonies',
      title: 'Ceremonies',
      description: 'From birthdays to anniversaries, we provide the perfect setting for all your special celebrations. Our team works to create a joyful and celebratory atmosphere, providing a memorable experience for you and your guests. Our versatile spaces can be customized to match the theme of your celebration.',
      icon: <Users className="h-12 w-12 text-gold-500" />,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 'funerals',
      title: 'Funerals',
      description: 'We provide a dignified and respectful space for funeral services, ensuring that loved ones can pay their respects in a comfortable and serene environment. Our compassionate team will work with you to create a meaningful tribute, providing support and assistance during this difficult time.',
      icon: <BookOpen className="h-12 w-12 text-gold-500" />,
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    },
  ];

  const additionalServices = [
    {
      title: 'Event Planning',
      description: 'Our experienced team will work closely with you to bring your vision to life, providing expert advice and guidance every step of the way.',
      icon: <Image className="h-8 w-8 text-gold-500" />,
    },
    {
      title: 'Catering',
      description: 'We partner with top-notch catering services to provide delicious and customized cuisine for your guests.',
      icon: <Image className="h-8 w-8 text-gold-500" />,
    },
    {
      title: 'Audio-Visual Equipment',
      description: 'Our venue is equipped with the latest audio-visual equipment, ensuring that your event is visually stunning and engaging.',
      icon: <VideoIcon className="h-8 w-8 text-gold-500" />,
    },
    {
      title: 'Decor and Design',
      description: 'Our team will work with you to create a bespoke decor and design that reflects your unique style and theme.',
      icon: <Image className="h-8 w-8 text-gold-500" />,
    },
  ];

  return (
    <Layout>
      <div className="bg-cream-50 py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="mb-4">Our <span className="text-gold-500">Services</span></h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of services to ensure your event is seamless and stress-free.
            </p>
          </div>
        </div>
      </div>

      {/* Event Types Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center">Event Types</h2>
          
          <div className="space-y-16">
            {eventTypes.map((event, index) => (
              <div 
                key={event.id} 
                id={event.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-video"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center mb-4">
                    {event.icon}
                    <h3 className="text-2xl font-serif font-semibold ml-4">{event.title}</h3>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                  <Button asChild className="mt-4 bg-gold-500 hover:bg-gold-600">
                    <Link to="/bookings">Book This Event</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your event with our range of additional services, designed to make your occasion even more special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4">Our Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of customizable packages, designed to suit your specific needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="bg-cream-100 p-6 text-center">
                <h3 className="text-2xl font-serif font-semibold">Basic Package</h3>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold">$1,000</span>
                  <span className="text-gray-600">/day</span>
                </div>
                <p className="text-sm text-gray-600">Perfect for small gatherings</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Venue rental for 4 hours
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic setup and cleanup
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Tables and chairs
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic sound system
                  </li>
                </ul>
                <Button asChild className="w-full mt-6 bg-gold-500 hover:bg-gold-600">
                  <Link to="/bookings">Book Now</Link>
                </Button>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="border rounded-lg overflow-hidden shadow-xl transform scale-105 relative border-gold-400">
              <div className="absolute top-0 right-0 bg-gold-500 text-white px-4 py-1 text-sm font-medium">
                Popular
              </div>
              <div className="bg-gold-500 text-white p-6 text-center">
                <h3 className="text-2xl font-serif font-semibold">Premium Package</h3>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold">$2,500</span>
                  <span className="text-cream-100">/day</span>
                </div>
                <p className="text-sm text-cream-100">Ideal for weddings and conferences</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Venue rental for 8 hours
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Full setup and cleanup
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Premium tables and chairs
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Advanced A/V equipment
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Event coordinator
                  </li>
                </ul>
                <Button asChild className="w-full mt-6 bg-gold-500 hover:bg-gold-600">
                  <Link to="/bookings">Book Now</Link>
                </Button>
              </div>
            </div>
            
            {/* Luxury Package */}
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="bg-cream-100 p-6 text-center">
                <h3 className="text-2xl font-serif font-semibold">Luxury Package</h3>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold">$4,000</span>
                  <span className="text-gray-600">/day</span>
                </div>
                <p className="text-sm text-gray-600">The ultimate event experience</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Venue rental for 12 hours
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Full service planning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Custom decor and design
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Premium catering options
                  </li>
                </ul>
                <Button asChild className="w-full mt-6 bg-gold-500 hover:bg-gold-600">
                  <Link to="/bookings">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brown-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-semibold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-cream-200 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your event requirements and how we can help make your vision a reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-500/10">
              <Link to="/bookings">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
