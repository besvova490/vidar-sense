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
    id: "1",
    title: "Tank Convoy",
    isAddedByAI: true,
    isApproved: false,
    drone: "DJI Mavic 3",
    date: new Date(),
    coordinates: {
      lat: 50.51108,
      lng: 30.7909,
    },
    confidence: 0.8365857601165771,
    videoUrl: "",
  },
];
