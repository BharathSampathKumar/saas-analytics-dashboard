export interface EventsOverTimeResponse {
  _id: string;   // date string
  count: number;
}

export interface EventsOverTimeFormatted {
  date: string;
  count: number;
}