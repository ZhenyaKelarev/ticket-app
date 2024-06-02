import { Leg } from "./leg.types";

interface TicketType {
  id: string;
  price: number;
  currency: string;
  transfers: number;
  total_duration: number;
  legs: Leg[];
}

export type { TicketType };
