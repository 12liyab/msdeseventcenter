import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Venue } from '@/types/venue';
import MemorialRoomGallery from './MemorialRoomGallery';
import VenueOverviewTab from './VenueOverviewTab';
import VenueAmenitiesTab from './VenueAmenitiesTab';
import VenuePricingTab from './VenuePricingTab';
import VenueAvailabilityTab from './VenueAvailabilityTab';

interface VenueDetailTabsProps {
  venue: Venue;
}

const VenueDetailTabs = ({ venue }: VenueDetailTabsProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
      <div className="flex justify-center mb-8 overflow-x-auto">
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
          {venue.name === "Memorial Room" && (
            <TabsTrigger value="memorial-gallery" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
              Memorial Gallery
            </TabsTrigger>
          )}
        </TabsList>
      </div>

      <TabsContent value="overview">
        <VenueOverviewTab venue={venue} />
      </TabsContent>

      <TabsContent value="amenities">
        <VenueAmenitiesTab venue={venue} />
      </TabsContent>

      <TabsContent value="pricing">
        <VenuePricingTab venue={venue} />
      </TabsContent>

      <TabsContent value="availability">
        <VenueAvailabilityTab venue={venue} />
      </TabsContent>

      {venue.name === "Memorial Room" && (
        <TabsContent value="memorial-gallery">
          <MemorialRoomGallery images={venue.images} />
        </TabsContent>
      )}

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
    </Tabs>
  );
};

export default VenueDetailTabs;
