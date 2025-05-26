
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const Bookings = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    venue: '',
    time: '',
    duration: '',
    additionalInfo: '',
  });

  // Removed whatsappNumber state as manual input is no longer needed
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        title: "Date Required",
        description: "Please select a date for your event.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    // Construct WhatsApp message
    const message = `Booking Request Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Number of Guests: ${formData.guests}
Preferred Venue: ${formData.venue}
Event Date: ${date ? format(date, 'MMMM d, yyyy') : ''}
Event Start Time: ${formData.time}
Duration: ${formData.duration}
Additional Info: ${formData.additionalInfo}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Fixed WhatsApp contact number
    const whatsappNumber = '+15716608569';

    // Open WhatsApp URL in new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Booking Request Sent!",
        description: "We'll review your request and get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        guests: '',
        venue: '',
        time: '',
        duration: '',
        additionalInfo: '',
      });
      setDate(undefined);
      setIsSubmitting(false);
    }, 1500);
  };

  // Mock busy dates for the calendar
  const busyDates = [
    new Date(2023, 5, 10),
    new Date(2023, 5, 15),
    new Date(2023, 5, 20),
    new Date(2023, 5, 25),
  ];

  return (
    <Layout>
      <div className="bg-cream-50 py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="mb-4">Book Your <span className="text-gold-500">Event</span></h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to host your event at Ms Dee's Event Center? Fill out the form below to check availability and request a booking.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Calendar Section */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif font-semibold mb-6">Select a Date</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border pointer-events-auto"
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    
                    // Disable past dates
                    if (date < today) return true;
                    
                    // Disable dates that are already booked
                    return busyDates.some(busyDate => 
                      busyDate.getDate() === date.getDate() && 
                      busyDate.getMonth() === date.getMonth() && 
                      busyDate.getFullYear() === date.getFullYear()
                    );
                  }}
                />
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">Key Information</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-red-400 mr-2"></div>
                      <span className="text-sm text-gray-600">Booked Dates</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-gold-500 mr-2"></div>
                      <span className="text-sm text-gray-600">Selected Date</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 p-4 bg-cream-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">Selected Date</h3>
                  {date ? (
                    <p>{format(date, 'MMMM d, yyyy')}</p>
                  ) : (
                    <p className="text-gray-500">Please select a date</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif font-semibold mb-6">Event Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type *</label>
                      <Select 
                        value={formData.eventType} 
                        onValueChange={(value) => handleSelectChange('eventType', value)}
                        required
                      >
                        <SelectTrigger id="eventType">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="conference">Conference</SelectItem>
                          <SelectItem value="birthday">Birthday Party</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="funeral">Funeral Service</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests *</label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-1">Preferred Venue *</label>
                      <Select 
                        value={formData.venue} 
                        onValueChange={(value) => handleSelectChange('venue', value)}
                        required
                      >
                        <SelectTrigger id="venue">
                          <SelectValue placeholder="Select venue" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ballroom">Grand Ballroom</SelectItem>
                          <SelectItem value="conference">Conference Center</SelectItem>
                          <SelectItem value="pavilion">Pavilion</SelectItem>
                          <SelectItem value="boardroom">Executive Boardroom</SelectItem>
                          <SelectItem value="celebration">Celebration Hall</SelectItem>
                          <SelectItem value="memorial">Memorial Room</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Event Start Time *</label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration (hours) *</label>
                      <Select 
                        value={formData.duration} 
                        onValueChange={(value) => handleSelectChange('duration', value)}
                        required
                      >
                        <SelectTrigger id="duration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2 hours</SelectItem>
                          <SelectItem value="4">4 hours</SelectItem>
                          <SelectItem value="6">6 hours</SelectItem>
                          <SelectItem value="8">8 hours</SelectItem>
                          <SelectItem value="full">Full day (10+ hours)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Please provide any additional information about your event, special requests, or questions."
                      className="w-full"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-gold-500 hover:bg-gold-600"
                      disabled={isSubmitting || !date}
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Booking'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about booking events at Ms Dee's Event Center.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">How far in advance should I book?</h3>
              <p className="text-gray-600">
                We recommend booking at least 2-3 months in advance for small to medium events, and 6-12 months for large events like weddings to ensure availability of your preferred date and venue.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">What is included in the venue rental?</h3>
              <p className="text-gray-600">
                Our standard venue rental includes the space, tables, chairs, basic setup and cleanup, parking, and on-site staff. Additional services like catering, decor, and A/V equipment can be added to your package.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Can I bring my own caterer?</h3>
              <p className="text-gray-600">
                Yes, we allow outside catering for most events. However, we do have preferred catering partners that we recommend for their quality and familiarity with our facilities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">What is the payment policy?</h3>
              <p className="text-gray-600">
                A 50% deposit is required to confirm your booking, with the remaining balance due 7 days before the event. We accept credit cards, checks, and bank transfers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bookings;
