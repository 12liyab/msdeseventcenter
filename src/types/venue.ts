
export interface VenueSpecifications {
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

export interface VenuePricing {
  weekday?: string;
  weekend?: string;
  fullDay?: string;
  halfDay?: string;
  hourlyRate: string;
  deposit: string;
  service?: string;
}

export interface Venue {
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
