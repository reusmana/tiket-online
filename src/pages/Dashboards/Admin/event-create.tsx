import React, { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import fetchApi from "../../../lib/fetch-api";
import type { EventCreated } from "../../../interfaces/event-admin";
import Editor, { type ContentEditableEvent } from "react-simple-wysiwyg";

type EventCreateProps = {
  create: boolean;
  setCreate: (create: boolean) => void;
};

const EventCreate: React.FC<EventCreateProps> = ({ create, setCreate }) => {
  const [desctiption, setDesctiption] = useState<string>("");

  const handleInput = (e: ContentEditableEvent) => {
    setDesctiption(e.target.value);
  };
  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const request: EventCreated = {
        image: (event.currentTarget.image as HTMLInputElement).files![0],
        name: (event.currentTarget.names as HTMLInputElement).value,
        description: desctiption,
        city: (event.currentTarget.city as HTMLInputElement).value,
        venue: (event.currentTarget.venue as HTMLInputElement).value,
        address: (event.currentTarget.address as HTMLInputElement).value,
        sessions: [
          {
            date: (event.currentTarget.date as HTMLInputElement).value,
            time: (event.currentTarget.time as HTMLInputElement).value,
          },
        ],
        pricing: Number(
          (event.currentTarget.pricing as HTMLInputElement).value
        ),
      };

      const formData = new FormData();
      Object.keys(request).forEach((key) => {
        const value = request[key as keyof EventCreated];
        if (value instanceof File) {
          formData.append(key, value);
        } else if (Array.isArray(value)) {
          // Handle array values (e.g., sessions)
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
      console.log(data);
      const response = await fetchApi.post("/events", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        setCreate(false);
      } else {
        console.log(response);
        alert("Gagal menambahkan event");
      }
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan event");
    }
  };
  return (
    <div
      onClick={() => {
        setCreate(!create);
      }}
      className={`absolute inset-0 overflow-y-scroll bg-black bg-opacity-30 z-[99999999] py-20 justify-center items-start px-2 ${
        create ? "flex" : "hidden"
      }`}
    >
      <div
        className="w-full max-w-2xl p-6 bg-white rounded-lg min-h-20"
        onClick={(event) => event.stopPropagation()}
      >
        <form
          action=""
          onSubmit={handleForm}
          className="flex flex-col w-full gap-5"
        >
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
            htmlFor="names"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Name</span>
            <Input
              name="names"
              id="names"
              type="text"
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
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EventCreate;
