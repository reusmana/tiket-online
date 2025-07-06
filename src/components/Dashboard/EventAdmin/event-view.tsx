import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import type { EventList } from "../../../interfaces/event-admin";
import fetchApi from "../../../lib/fetch-api";
import Editor, { type ContentEditableEvent } from "react-simple-wysiwyg";

type EventCreateProps = {
  id: number;
  close: () => void;
};

const EventView: React.FC<EventCreateProps> = ({ id, close }) => {
  const [dataEvent, setDataEvent] = useState<EventList>();
  const [desctiption, setDesctiption] = useState<string>("");

  const handleInput = (e: ContentEditableEvent) => {
    setDesctiption(e.target.value);
  };

  useEffect(() => {
    const fetchListEvent = async () => {
      const url = `events/${id}`;
      const response = (await fetchApi.get(url)) as any;
      setDesctiption(response.data.description);
      setDataEvent(response.data);
    };
    fetchListEvent();
  }, []);
  return (
    <div
      onClick={close}
      className={`absolute inset-0 flex overflow-y-scroll bg-black bg-opacity-30 z-[99999999] py-20 justify-center items-start px-2 `}
    >
      <div
        className="w-full max-w-2xl p-6 bg-white rounded-lg min-h-20"
        onClick={(event) => event.stopPropagation()}
      >
        <form action="" className="flex flex-col w-full gap-5">
          <label
            htmlFor="file"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Image</span>
            <Input
              name="image"
              id="file"
              type="file"
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="name"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Name</span>
            <Input
              name="name"
              id="name"
              type="text"
              value={dataEvent?.name}
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
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>

          <label
            htmlFor="session"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Session</span>
            <div className="grid w-full grid-cols-2 gap-2">
              <Input
                name="session"
                id="session"
                type="date"
                className="px-4 py-3 border-2 bg-[#F5F5F5]"
              />
              <Input
                name="session"
                id="session"
                type="time"
                className="px-4 py-3 border-2 bg-[#F5F5F5]"
              />
            </div>
          </label>
          <label
            htmlFor="pricing"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Price</span>
            <Input
              name="pricing"
              id="pricing"
              type="number"
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

export default EventView;
