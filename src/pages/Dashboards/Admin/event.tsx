import { useEffect, useState } from "react";
import image from "../../../assets/img.png";
import Button from "../../../components/ui/Button";
import Pagination from "../../../components/Pagination";
import fetchApi from "../../../lib/fetch-api";
import type { EventList } from "../../../interfaces/users";
import EventCreate from "./event-create";

type EventListMeta = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};
const EventAdmin = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [action, setAction] = useState(1);
  const [data, setData] = useState<EventList[]>([]);
  const [meta, setMeta] = useState<EventListMeta | undefined>();
  const [edit, setEdit] = useState(false);

  const fetchListEvent = async () => {
    const url = `events?page=${action}&limit=10`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = (await fetchApi.get(url)) as any;

    setData(response.data);
    setMeta(response.meta);
    setAction(response.meta.page);
  };

  useEffect(() => {
    fetchListEvent();
  }, []);

  useEffect(() => {
    fetchListEvent();
  }, [action]);

  const handleDelete = async (id: number) => {
    const confirm = window.confirm("Are you sure you want to delete this?");
    if (!confirm) return;
    const url = `events/${id}`;
    await fetchApi.delete(url);
    fetchListEvent();
  };

  return (
    <div className="flex flex-col w-full min-h-screen pr-6 overflow-scroll">
      <EventCreate create={create} setCreate={setCreate} />
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Event </h1>
        <Button
          onClick={() => setCreate(true)}
          className="px-4 py-2 text-white rounded-md bg-primary w-fit"
        >
          Create
        </Button>
      </div>
      <table className="w-full mt-10 table-fixed">
        <thead>
          <tr className="w-full border">
            <th className="w-10 py-4 text-lg border">No</th>
            <th className="w-32 py-4 text-lg border">Poster</th>
            <th className="w-64 py-4 text-lg border">Name</th>
            <th className="w-32 py-4 text-lg border">Date</th>
            <th className="w-32 py-4 text-lg border">Time</th>
            <th className="w-32 py-4 text-lg border">Location</th>
            <th className="w-32 py-4 text-lg border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="border" key={index}>
              <td className="py-2 text-center border">1</td>
              <td className="py-2 text-center border ">
                <div className="flex justify-center">
                  <img src={item.thumbnail} alt="" className="h-24" />
                </div>
              </td>
              <td className="py-2 text-center border">{item.name}</td>
              <td className="py-2 text-center border">
                {new Date().toISOString().split("T")[0]}
              </td>
              <td className="py-2 text-center border">
                {item.startDate} - {item.endDate}
              </td>
              <td className="py-2 text-center border">{item.city}</td>
              <td className="py-2 text-center border">
                <div className="flex items-center justify-center gap-2">
                  <Button
                    className="px-4 py-2 text-white bg-yellow-500 rounded-md w-fit"
                    onClick={() => setEdit(true)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="px-4 py-2 text-white bg-red-500 rounded-md w-fit"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
          <tr className="border">
            <td className="py-2 text-center border">1</td>
            <td className="py-2 text-center border ">
              <div className="flex justify-center">
                <img src={image} alt="" className="h-24" />
              </div>
            </td>
            <td className="py-2 text-center border">Ustadz Hilman Fauzi</td>
            <td className="py-2 text-center border">
              {new Date().toISOString().split("T")[0]}
            </td>
            <td className="py-2 text-center border">09:00</td>
            <td className="py-2 text-center border">Jakarta</td>
            <td className="py-2 text-center border">
              <div className="flex items-center justify-center gap-2">
                <Button
                  className="px-4 py-2 text-white bg-yellow-500 rounded-md w-fit"
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  className="px-4 py-2 text-white bg-red-500 rounded-md w-fit"
                  onClick={() => {
                    handleDelete(1);
                  }}
                >
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-center w-full py-5">
        <Pagination count={meta?.totalItems ?? 10} setAction={setAction} />
      </div>
    </div>
  );
};

export default EventAdmin;
