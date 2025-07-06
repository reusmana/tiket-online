import { useEffect, useState } from "react";
import fetchApi from "../../lib/fetch-api";
import Loading from "../../components/Loading";
import type { PaymentList } from "../../interfaces/payment";
import ViewPayment from "../../components/Dashboard/PaymentUsers/ViewPayment";

const PaymentAdmin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<PaymentList[]>([]);
  const [openView, setOpenView] = useState({
    id: 0,
    qUrls: "",
    open: false,
  });

  const fetchListEvent = async () => {
    try {
      setIsLoading(true);
      const url = `/admin/payments`;
      const response = (await fetchApi.get(url)) as any;
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchListEvent();
  }, []);

  const handleAfterReject = (open: boolean) => {
    setOpenView({
      id: 0,
      qUrls: "",
      open: open,
    });
    fetchListEvent();
  };

  return (
    <div className="flex flex-col pr-6">
      {isLoading && <Loading />}
      {openView.open && (
        <ViewPayment
          id={openView.id}
          qUrls={openView.qUrls}
          setOpenView={handleAfterReject}
        />
      )}
      <h1 className="text-4xl font-bold">Payment Users </h1>
      <table className="w-full mt-10 table-fixed">
        <thead>
          <tr className="w-full border">
            <th className="w-10 py-4 text-lg border">No</th>
            <th className="w-64 py-4 text-lg border">Order ID</th>
            <th className="w-32 py-4 text-lg border">Method</th>
            <th className="w-32 py-4 text-lg border">Amount</th>
            <th className="w-32 py-4 text-lg border">Status</th>
            <th className="w-32 py-4 text-lg border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="border" key={index}>
              <td className="py-2 text-center border">{index + 1}</td>
              <td className="py-2 text-center border">{item.order_id}</td>
              <td className="py-2 text-center border">{item.method}</td>
              <td className="py-2 text-center border">
                Rp. {parseInt(item.amount).toLocaleString("en-US")}
              </td>
              <td className="py-2 text-center border">
                {item.status === "pending" && (
                  <span className="px-4 py-1 text-sm text-white bg-yellow-500 rounded-full">
                    Pending
                  </span>
                )}
                {item.status === "approved" && (
                  <span className="px-4 py-1 text-sm text-white bg-green-500 rounded-full">
                    Approved
                  </span>
                )}
                {item.status === "rejected" && (
                  <span className="px-4 py-1 text-sm text-white bg-red-500 rounded-full">
                    Rejected
                  </span>
                )}
              </td>
              <td className="py-2 text-center border">
                <span
                  className="px-4 py-1 text-sm text-white bg-green-500 rounded-full cursor-pointer"
                  onClick={() =>
                    setOpenView({ id: item.id, qUrls: item.qr_url, open: true })
                  }
                >
                  View
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentAdmin;
