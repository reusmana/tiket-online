interface EventCreated {
  image: File;
  name: string;
  description: string;
  city: string;
  venue: string;
  address: string;
  sessions: [
    {
      date: string;
      time: string;
    }
  ];
  pricing: number;
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

interface EventPut {
  description: string;
  pricing: [
    {
      type: string;
      price: number;
    }
  ];
}

export type { EventCreated, EventGetAll, EventPut };
