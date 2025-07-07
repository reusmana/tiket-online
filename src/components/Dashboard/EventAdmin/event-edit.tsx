import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import type { EventList, EventUpdate } from "../../../interfaces/event-admin";
import fetchApi from "../../../lib/fetch-api";
import Editor, { type ContentEditableEvent } from "react-simple-wysiwyg";
import Loading from "../../Loading";

type EventCreateProps = {
  id: number;
  close: () => void;
};

const EventEdit: React.FC<EventCreateProps> = ({ id, close }) => {
  const [dataEvent, setDataEvent] = useState<EventList>();
  const [desctiption, setDesctiption] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeValue = (key: string, value: any) => {
    setDataEvent((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleInput = (e: ContentEditableEvent) => {
    setDesctiption(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchListEvent = async () => {
      const url = `events/${id}`;
      const response = (await fetchApi.get(url)) as any;
      setDesctiption(response.data.description);
      setDataEvent(response.data);
      setIsLoading(false);
    };
    fetchListEvent();
  }, []);

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const request: any = {
        poster: (event.currentTarget.image as HTMLInputElement).files![0],
        name: (event.currentTarget.names as HTMLInputElement).value,
        event_date: (event.currentTarget.event_date as HTMLInputElement).value,
        description: desctiption,
        city: (event.currentTarget.city as HTMLInputElement).value,
        venue: (event.currentTarget.venue as HTMLInputElement).value,
        address: (event.currentTarget.address as HTMLInputElement).value,
        regular_price: parseInt(
          (event.currentTarget.regular_price as HTMLInputElement).value
        ),
        vip_price: parseInt(
          (event.currentTarget.vip_price as HTMLInputElement).value
        ),
      };

      const formData = new FormData();
      Object.keys(request).forEach((key) => {
        const value = request[key as keyof EventUpdate];
        if (value instanceof File) {
          formData.append(key, value);
        } else if (Array.isArray(value)) {
          value.forEach((item: any) => {
            Object.keys(item).forEach((subKey) => {
              formData.append(`${key}[${subKey}]`, item[subKey]);
            });
          });
        } else {
          formData.append(key, String(value));
        }
      });
      const data = Object.fromEntries(formData);

      const response = await fetchApi.put(`/events/${dataEvent?.id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        setIsLoading(false);
        close();
      } else {
        setIsLoading(false);
        alert("Gagal menambahkan event");
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      alert("Gagal menambahkan event");
    }
  };
  return (
    <div
      onClick={close}
      className={`absolute inset-0 flex overflow-y-scroll bg-black bg-opacity-30 z-[99999999] py-20 justify-center items-start px-2 `}
    >
      {isLoading && <Loading />}
      <div
        className="w-full max-w-2xl p-6 bg-white rounded-lg min-h-20"
        onClick={(event) => event.stopPropagation()}
      >
        <form
          action=""
          onSubmit={handleForm}
          className="flex flex-col w-full gap-5"
        >
          <Input
            id="ids"
            name="ids"
            value={dataEvent?.id}
            className="hidden"
          ></Input>
          <label
            htmlFor="image"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Image</span>
            <Input
              name="image"
              id="image"
              type="file"
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="names"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Name</span>
            <Input
              name="names"
              id="names"
              type="text"
              value={dataEvent?.name}
              onChange={(e) => handleChangeValue("name", e.target.value)}
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="description"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Desription</span>
            <Editor
              value={desctiption}
              onChange={handleInput}
              className="px-4 py-3 border-2 bg-[#F5F5F5] min-h-32"
            />
          </label>
          <label
            htmlFor="city"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">City</span>
            <Input
              name="city"
              id="city"
              type="text"
              value={dataEvent?.city}
              onChange={(e) => handleChangeValue("city", e.target.value)}
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="venue"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Venue</span>
            <Input
              name="venue"
              id="venue"
              type="text"
              value={dataEvent?.venue}
              onChange={(e) => handleChangeValue("venue", e.target.value)}
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="address"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Address</span>
            <Input
              name="address"
              id="address"
              type="text"
              value={dataEvent?.address}
              onChange={(e) => handleChangeValue("address", e.target.value)}
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="regular_price"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">
              Regular Price
            </span>
            <Input
              name="regular_price"
              id="regular_price"
              type="number"
              value={dataEvent?.regular_price.toLocaleString()}
              onChange={(e) =>
                handleChangeValue("regular_price", e.target.value)
              }
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="vip_price"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Vip Price</span>
            <Input
              name="vip_price"
              id="vip_price"
              type="number"
              value={dataEvent?.vip_price.toLocaleString()}
              onChange={(e) => handleChangeValue("vip_price", e.target.value)}
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="event_date"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Event Date</span>
            <Input
              name="event_date"
              id="event_date"
              type="date"
              value={
                dataEvent?.event_date
                  ? new Date(dataEvent?.event_date).toISOString().slice(0, 10)
                  : ""
              }
              onChange={(e) => handleChangeValue("event_date", e.target.value)}
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>

          <Button type="submit" className="py-3 bg-primary">
            Edit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EventEdit;
