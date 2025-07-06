interface PaymentList {
  amount: string;
  created_at: string;
  id: number;
  method: string;
  order_id: string;
  qr_url: string;
  status: string;
}

export type { PaymentList };
