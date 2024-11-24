export interface IDetectedEvent {
  id: string;
  title: string;
  isAddedByAI: boolean;
  isApproved: boolean;
  drone: string;
  date: Date;
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
    drone: "DJI Mavic 3",
    date: new Date(),
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
    drone: "Hikvision DS-FWD-IZS",
    date: new Date(),
    coordinates: {
      lat: 52.28537,
      lng: 32.639261,
    },
    confidence: 0.9265857601165771,
    videoUrl: "",
  },
];
