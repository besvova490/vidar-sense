export interface IDetectedEvent {
  id: string;
  title: string;
  isAddedByAI: boolean;
  isApproved: boolean;
  drone: string;
  date: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  confidence: number;
  videoUrl: string;
}

export const DEFAULT_EVENTS: IDetectedEvent[] = [
  {
    id: "15ARB-TA1931",
    title: "Tank Convoy",
    isAddedByAI: true,
    isApproved: false,
    drone: "DJI Mavic 3 Pro",
    date: "2022-03-09",
    coordinates: {
      lat: 50.535214,
      lng: 30.845922,
    },
    confidence: 0.8365857601165771,
    videoUrl: "/videos/Screen Recording 2024-11-24 at 13.41.46.mp4",
  },
  {
    id: "07FRB-TA2939",
    title: "Convoy",
    isAddedByAI: true,
    isApproved: false,
    drone: "DJI Mavic 3 Mini",
    date: "2022-01-09",
    coordinates: {
      lat: 47.788968,
      lng: 37.275219,
    },
    confidence: 0.9265857601165771,
    videoUrl: "/videos/Screen Recording 2024-11-24 at 14.05.52.mp4",
  },
];
