import api from "./client";
import type { EventsOverTimeResponse } from "../types/analytics";

export const getEventsOverTime = async (
    projectId: string
) : Promise<EventsOverTimeResponse[]> => {
  const res = await api.get(
    `/analytics/events-over-time?projectId=${projectId}&range=7d`
  );
  return res.data;
};

export const getTopEvents = async (projectId: string) => {
  const res = await api.get(
    `/analytics/top-events?projectId=${projectId}`
  );
  return res.data;
};