interface OrderList {
  id: number;
  event_id: number;
  user_id: number;
  quantity: number;
  total_price: string;
  status: string;
  createdAt: string;
}

export type { OrderList };
