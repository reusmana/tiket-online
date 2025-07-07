import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import type { OrderList } from "../../../interfaces/order";
import fetchApi from "../../../lib/fetch-api";
import type { EventList } from "../../../interfaces/event-admin";

type ViewTiketProps = {
  id: number;
  closed: () => void;
};

const ViewTiket: React.FC<ViewTiketProps> = ({ id, closed }) => {
  const [data, setData] = useState<OrderList>();
  const [dataEvent, setDataEvent] = useState<EventList>();
  useEffect(() => {
    const getDetails = async () => {
      try {
        const url = `orders/${id}`;
        const response = (await fetchApi.get(url)) as any;

        const event = await fetchApi.get(`/events/${response.data.event_id}`);
        setDataEvent(event.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getDetails();
  }, []);
  return (
    <div
      className="absolute inset-0 flex lg:items-center items-start justify-center bg-black/50 z-[999999] px-2 py-10 overflow-scroll"
      onClick={closed}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="max-w-md p-6 my-10 bg-white w-fit rounded-xl"
      >
        <h1 className="text-4xl font-bold text-center ">{dataEvent?.name}</h1>
        <table className="w-full mt-5 table-fixed">
          <tbody>
            <tr>
              <td>Quantity</td>
              <td className="w-5">:</td>
              <td>{data?.quantity} </td>
            </tr>
            <tr>
              <td>Total Price</td>
              <td className="w-5">:</td>
              <td>{(data?.total_price ?? 0).toLocaleString("id-ID")} </td>
            </tr>
            <tr>
              <td>Tanggal</td>
              <td className="w-5">:</td>
              <td>{dataEvent?.event_date.slice(0, 10)}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td className="w-5">:</td>
              <td>
                {data?.status === "pending" && (
                  <span className="px-4 py-1 text-sm text-white bg-yellow-500 rounded-full">
                    Pending
                  </span>
                )}
                {data?.status === "approved" && (
                  <span className="px-4 py-1 text-sm text-white bg-green-500 rounded-full">
                    Approved
                  </span>
                )}
                {data?.status === "rejected" && (
                  <span className="px-4 py-1 text-sm text-white bg-red-500 rounded-full">
                    Rejected
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col items-center w-full py-5">
          <QRCodeCanvas value={id.toString()} size={256} />
          <p>Tiket ID : {id}</p>
          <p className="text-xs">
            Harap perlihatkan QR Code ini kepada penitia
          </p>
        </div>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-1.5 rounded-full mx-auto"
          onClick={closed}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewTiket;
