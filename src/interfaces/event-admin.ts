interface EventCreated {
  poster: File;
  name: string;
  description: string;
  city: string;
  venue: string;
  address: string;
  regular_price: number;
  vip_price: number;
  event_date: string;
}

interface EventUpdate {
  poster?: File;
  name: string;
  description: string;
  city: string;
  venue: string;
  address: string;
  regular_price: number;
  vip_price: number;
  event_date: string;
}

interface EventGetAll {
  meta: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
  };
  data: [
    {
      id: number;
      name: string;
      city: string;
      startDate: string;
      endDate: string;
      thumbnail: string;
    }
  ];
}

interface SessionsList {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
}

interface EventList {
  id: number;
  poster_url: string;
  name: string;
  city: string;
  address: string;
  description: string;
  venue: string;
  regular_price: string;
  vip_price: string;
  event_date: string;
}

interface EventPut {
  description: string;
  pricing: [
    {
      type: string;
      price: number;
    }
  ];
}

export type {
  EventCreated,
  EventGetAll,
  EventPut,
  EventList,
  SessionsList,
  EventUpdate,
};
