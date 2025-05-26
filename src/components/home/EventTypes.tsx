
import { HeartHandshake, Presentation, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const EventTypes = () => {
  const eventTypes = [
    {
      title: 'Weddings',
      description: 'Create your perfect wedding day in our elegant and romantic venues. We offer customizable packages to suit your needs.',
      icon: <HeartHandshake className="h-10 w-10 text-gold-500" />,
      link: '/services#weddings'
    },
    {
      title: 'Conferences',
      description: 'Professional spaces for your business needs, equipped with modern technology and amenities.',
      icon: <Presentation className="h-10 w-10 text-gold-500" />,
      link: '/services#conferences'
    },
    {
      title: 'Ceremonies',
      description: 'From birthdays to anniversaries, we provide the perfect setting for all your special celebrations.',
      icon: <Users className="h-10 w-10 text-gold-500" />,
      link: '/services#ceremonies'
    },
    {
      title: 'Funerals',
      description: 'A dignified and respectful space for memorial services, ensuring comfort during difficult times.',
      icon: <BookOpen className="h-10 w-10 text-gold-500" />,
      link: '/services#funerals'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our <span className="text-gold-500">Event Types</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ms Dee's Event Center is the perfect venue for a wide range of events. 
            Explore our different event types and find the perfect fit for your occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {eventTypes.map((event, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <Link to={event.link}>
                <CardHeader className="pb-2 pt-6">
                  <div className="mx-auto mb-4">{event.icon}</div>
                  <CardTitle className="text-xl text-center group-hover:text-gold-500 transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
