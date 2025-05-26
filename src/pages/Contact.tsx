
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-cream-50 py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="mb-4">Contact <span className="text-gold-500">Us</span></h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to book your event? Get in touch with us and our team will be happy to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gold-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Our Location</h3>
                    <p className="text-gray-700">
                      3928 Lansing Ct<br />
                      Dumfries, VA 22026
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gold-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Phone Numbers</h3>
                    <p className="text-gray-700">
                      Main: 571-660-8569<br />
                      Alternative: 571-331-8837
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gold-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <a href="mailto:info@msdeeseventcenter.com" className="text-gray-700 hover:text-gold-600 transition-colors">
                      info@msdeeseventcenter.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Hours */}
              <div className="mt-10">
                <h3 className="text-xl font-medium mb-4">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-medium">10:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-medium">11:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-semibold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gold-500 hover:bg-gold-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-8 bg-cream-50">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Find Us</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.7761263959396!2d-77.34547492392779!3d38.58393997172334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6567fa4f295c7%3A0x50a1761b11fa4e0a!2s3928%20Lansing%20Ct%2C%20Dumfries%2C%20VA%2022026!5e0!3m2!1sen!2sus!4v1716411153203!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ms Dee's Event Center Location"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
