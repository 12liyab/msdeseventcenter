
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [openImage, setOpenImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Grand Ballroom Wedding",
      category: "weddings"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Corporate Conference",
      category: "conferences"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding",
      category: "weddings"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Birthday Celebration",
      category: "celebrations"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Gala Dinner",
      category: "celebrations"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Award Ceremony",
      category: "ceremonies"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding Reception",
      category: "weddings"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Business Meeting",
      category: "conferences"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Memorial Service",
      category: "memorials"
    },
  ];

  // Filter images based on active tab
  const filteredImages = activeTab === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeTab);

  return (
    <Layout>
      <div className="bg-cream-50 py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="mb-4">Our <span className="text-gold-500">Gallery</span></h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of past events to get inspired for your own special occasion.
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
                  All Events
                </TabsTrigger>
                <TabsTrigger value="weddings" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Weddings
                </TabsTrigger>
                <TabsTrigger value="conferences" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Conferences
                </TabsTrigger>
                <TabsTrigger value="celebrations" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Celebrations
                </TabsTrigger>
                <TabsTrigger value="ceremonies" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Ceremonies
                </TabsTrigger>
                <TabsTrigger value="memorials" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                  Memorials
                </TabsTrigger>
              </TabsList>
            </div>

            {["all", "weddings", "conferences", "celebrations", "ceremonies", "memorials"].map(tab => (
              <TabsContent key={tab} value={tab}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredImages.map(image => (
                    <Dialog key={image.id} open={openImage === image.src} onOpenChange={() => setOpenImage(null)}>
                      <DialogTrigger asChild>
                        <div 
                          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                          onClick={() => setOpenImage(image.src)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-lg font-medium">{image.alt}</p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                        <div className="relative">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto max-h-[80vh] object-contain"
                          />
                          <button
                            onClick={() => setOpenImage(null)}
                            className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4">Event Videos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch highlights from some of our memorable events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-100 mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Event Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <h3 className="text-xl font-medium mb-2">Johnson-Smith Wedding</h3>
              <p className="text-gray-600">A beautiful summer wedding celebration in our Grand Ballroom</p>
            </div>
            
            {/* Video 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-100 mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/E9de-cmycx8?si=8P9rTdxnril-eh35"
                  title="Event Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <h3 className="text-xl font-medium mb-2">Tech Conference 2023</h3>
              <p className="text-gray-600">A successful tech industry gathering with keynote speakers and networking</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
