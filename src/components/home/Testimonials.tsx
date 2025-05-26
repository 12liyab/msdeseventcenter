
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Ms Dee's Event Center was the perfect venue for our wedding. The staff was incredibly helpful and made our special day truly unforgettable.",
      name: "Sarah & David Thompson",
      event: "Wedding"
    },
    {
      id: 2,
      quote: "We held our annual company conference here and were blown away by the professional service and high-quality facilities. Highly recommended!",
      name: "Mark Johnson",
      event: "Corporate Conference"
    },
    {
      id: 3,
      quote: "The memorial service for my father was handled with such care and respect. The venue provided a peaceful and dignified atmosphere for our family and friends.",
      name: "Emily Wilson",
      event: "Memorial Service"
    },
    {
      id: 4,
      quote: "My daughter's sweet sixteen party was a huge success thanks to the amazing team at Ms Dee's. They took care of everything and allowed us to focus on celebrating.",
      name: "Jennifer Martinez",
      event: "Birthday Celebration"
    }
  ];

  return (
    <section className="py-16 bg-brown-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What Our <span className="text-gold-400">Clients Say</span>
          </h2>
          <p className="text-cream-200 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with Ms Dee's Event Center.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="bg-brown-800 border-gold-700">
                  <CardContent className="p-8 text-center">
                    <div className="mb-4">
                      <svg className="w-10 h-10 text-gold-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-lg mb-6 text-cream-100 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-gold-400">{testimonial.name}</p>
                      <p className="text-cream-300 text-sm">{testimonial.event}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-white" />
          <CarouselNext className="text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
