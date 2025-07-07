import { useEffect, useState } from "react";
import Button from "../../../components/ui/Button";
import fetchApi from "../../../lib/fetch-api";
import EventCreate from "../../../components/Dashboard/EventAdmin/event-create";
import type { EventList } from "../../../interfaces/event-admin";
import EventEdit from "../../../components/Dashboard/EventAdmin/event-edit";
import Loading from "../../../components/Loading";
import { urlPath } from "../../../lib/url-path";

const EventAdmin = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<EventList[]>([]);
  const [edit, setEdit] = useState<{
    id: number;
    open: boolean;
  }>({
    id: 0,
    open: false,
  });

  const fetchListEvent = async () => {
    setIsLoading(true);
    const url = `events`;
    const response = (await fetchApi.get(url)) as any;
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchListEvent();
  }, []);

  const handleClose = () => {
    fetchListEvent();
    setEdit({
      id: 0,
      open: false,
    });
  };

  const handleDelete = async (id: number) => {
    const confirm = window.confirm("Are you sure you want to delete this?");
    if (!confirm) return;
    setIsLoading(true);
    const url = `events/${id}`;
    await fetchApi.delete(url);
    fetchListEvent();
  };

  const handleSuccessCreated = () => {
    fetchListEvent();
    setCreate(false);
  };

  return (
    <div className="flex flex-col w-full min-h-screen pr-6 overflow-scroll ">
      {isLoading && <Loading />}
      <EventCreate create={create} setCreate={handleSuccessCreated} />
      {edit.open && <EventEdit id={edit.id} close={handleClose} />}
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
            <th className="w-32 py-4 text-lg border">City</th>
            <th className="w-48 py-4 text-lg border">Venue</th>
            <th className="w-64 py-4 text-lg border">Location</th>
            <th className="w-64 py-4 text-lg border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: EventList, index: number) => (
            <tr className="border" key={index}>
              <td className="py-2 text-center border">{index + 1}</td>
              <td className="py-2 text-center border ">
                <div className="flex justify-center">
                  <img src={urlPath(item.poster_url)} alt="" className="h-24" />
                </div>
              </td>
              <td className="py-2 text-center border">{item.name}</td>
              <td className="py-2 text-center border">{item.city}</td>
              <td className="py-2 text-center border">{item.venue}</td>
              <td className="py-2 text-center border">{item.address}</td>
              <td className="py-2 text-center border">
                <div className="flex items-center justify-center gap-2">
                  <Button
                    className="px-4 py-2 text-white bg-yellow-500 rounded-md w-fit"
                    onClick={() => {
                      setEdit({ id: item.id, open: true });
                    }}
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
        </tbody>
      </table>
    </div>
  );
};

export default EventAdmin;
