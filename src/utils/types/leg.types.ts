interface Leg {
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  transferPoints?: string[];
}

export type { Leg };
