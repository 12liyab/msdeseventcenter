
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface MemorialRoomGalleryProps {
  images: string[];
}

const MemorialRoomGallery = ({ images }: MemorialRoomGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-serif font-semibold mb-4">Memorial Room Gallery</h2>
      <div className="space-y-4">
        <div className="bg-black rounded-lg overflow-hidden">
          <img 
            src={mainImage} 
            alt="Memorial Room Main View" 
            className="w-full h-[400px] object-cover object-center"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`cursor-pointer overflow-hidden rounded-md border-2 ${
                mainImage === image ? 'border-gold-500' : 'border-transparent'
              }`}
              onClick={() => setMainImage(image)}
            >
              <img 
                src={image} 
                alt={`Memorial Room View ${index + 1}`} 
                className="h-24 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-cream-50 p-4 rounded-lg">
        <h3 className="font-medium text-lg mb-2">About the Memorial Room</h3>
        <p className="text-gray-700">
          Our Memorial Room offers a serene and dignified space designed specifically for memorial services and celebrations of life. 
          The thoughtfully designed environment provides comfort to families and guests during difficult times.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">Key Features</h4>
              <ul className="space-y-1 text-sm">
                <li>• Soft, adjustable lighting</li>
                <li>• Comfortable seating for up to 60 guests</li>
                <li>• Privacy screens available</li>
                <li>• Memorial display areas</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">Included Services</h4>
              <ul className="space-y-1 text-sm">
                <li>• Setup and arrangement</li>
                <li>• Audio/visual support</li>
                <li>• Hospitality services</li>
                <li>• Access to reflection garden</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MemorialRoomGallery;
