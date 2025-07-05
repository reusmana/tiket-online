import React, { useEffect } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

type EventCreateProps = {
  create: boolean;
  setCreate: (create: boolean) => void;
};

const EventCreate: React.FC<EventCreateProps> = ({ create, setCreate }) => {
  useEffect(() => {}, []);
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
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="description"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Desription</span>
            <Input
              name="description"
              id="description"
              type="text"
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
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
