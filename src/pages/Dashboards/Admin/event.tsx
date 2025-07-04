import { useState } from "react";
import image from "../../../assets/img.png";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const EventAdmin = () => {
  const [create, setCreate] = useState<boolean>(false);
  return (
    <div className="flex flex-col w-full min-h-screen pr-6 overflow-scroll">
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
              <span className="text-sm font-semibold uppercase">
                Desription
              </span>
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
          </tr>
        </thead>
        <tbody>
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
          </tr>
          <tr className="border">
            <td className="py-2 text-center border">2</td>
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
          </tr>
          <tr className="border">
            <td className="py-2 text-center border">3</td>
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
          </tr>
          <tr className="border">
            <td className="py-2 text-center border">3</td>
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
          </tr>
          <tr className="border">
            <td className="py-2 text-center border">3</td>
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
          </tr>
          <tr className="border">
            <td className="py-2 text-center border">3</td>
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
          </tr>
          <tr className="border">
            <td className="py-2 text-center border">3</td>
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
          </tr>
          <tr className="border">
            <td className="py-2 text-center border">3</td>
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
          </tr>
          <tr className="border">
            <td className="py-2 text-center border">3</td>
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
          </tr>
          <tr className="border">
            <td className="py-2 text-center border">3</td>
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
          </tr>
          <tr className="border">
            <td className="py-2 text-center border">3</td>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventAdmin;
