
import Layout from '@/components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="bg-cream-50 py-12">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="mb-4">About <span className="text-gold-500">Ms Dee's</span> Event Center</h1>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Ms Dee's Event Center was founded with a vision to create a versatile and elegant venue that could host a wide range of events while providing exceptional service. What began as a small family business has grown into one of the most sought-after event venues in the area.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey started when our founder, Ms. Dee, recognized the need for an event space that could adapt to different occasions while maintaining the highest standards of quality and service. Drawing from her extensive experience in event planning and hospitality, she created a space where memories are made and celebrations come to life.
              </p>
              <p className="text-gray-700">
                Today, Ms Dee's Event Center continues to grow and evolve, but our commitment to excellence and customer satisfaction remains unchanged. We take pride in being part of our clients' special moments and creating unforgettable experiences for everyone who walks through our doors.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80" 
                alt="Our Story" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-500 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cream-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-gold-600">Our Mission</h3>
              <p className="text-gray-700">
                At Ms Dee's Event Center, our mission is to provide a world-class venue and exceptional service, exceeding our clients' expectations and making every event a memorable and joyous occasion. We strive to build long-lasting relationships with our clients, ensuring that every detail is meticulously taken care of to make their vision a reality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-gold-600">Our Vision</h3>
              <p className="text-gray-700">
                Our vision is to become the premier event destination, renowned for its elegance, versatility, and commitment to excellence. We aim to inspire and empower our clients to create unforgettable experiences, fostering a sense of community and connection among our guests. By continuously innovating and improving our services, we will solidify our position as the go-to venue for discerning event planners and hosts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to making your event perfect from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="/images/team/MsDee_Logo.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Dinah Haizel Awuku-Gordon</h3>
              <p className="text-gold-600 mb-3">CEO</p>
              <p className="text-gray-600 mx-auto max-w-xs">
                With over 15 years of experience in event planning and management, Ms. Dinah brings passion and expertise to every event.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="/images/team/MsDee_Logo.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Michael Roberts</h3>
              <p className="text-gold-600 mb-3">Event Manager</p>
              <p className="text-gray-600 mx-auto max-w-xs">
                Michael ensures that every event runs smoothly, coordinating with vendors and staff to create seamless experiences.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="/images/team/MsDee_Logo.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Jessica Williams</h3>
              <p className="text-gold-600 mb-3">Client Relations</p>
              <p className="text-gray-600 mx-auto max-w-xs">
                Jessica works closely with clients to understand their vision and helps them select the perfect venue and services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
