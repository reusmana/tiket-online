import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import CardsEvent from "../../components/CardEvents/Index";
import Poster from "../../assets/posters/Poster 1 1.png";
import Badge from "../../components/ui/Badge";
import Input from "../../components/ui/Input";
import { cn } from "../../lib/utils";
const Event = () => {
  const loc = useLocation();
  const [selectedEvent, setSelectedEvent] = useState<string>("upcoming");

  const handleEventClick = (event: string) => {
    setSelectedEvent(event);
  };
  useEffect(() => {
    const q = loc.search.split("=")[1];
    console.log(q);
  }, []);
  return (
    <section className="flex flex-col w-full max-w-screen-xl gap-10 px-2 py-20 mx-auto overflow-scroll lg:py-32">
      <div className="flex flex-col items-center justify-center w-full gap-1">
        <h1 className="text-3xl font-bold text-slate-700">Event Kami</h1>
        <p className="text-lg text-center text-slate-700">
          Semua event yang diselenggarakan oleh Menata Hati!
        </p>
        <form className="relative flex items-center justify-center w-full max-w-xl mt-4">
          <Input
            type="text"
            name="search"
            placeholder="Cari Event..."
            id="search"
            className="w-full px-2 py-2 mx-auto text-xl border rounded-md focus:outline-slate-600"
          />
          <span className="absolute text-lg right-2 text-slate-600">
            <FaSearch />
          </span>
        </form>
        <div className="grid w-full max-w-xl grid-cols-2 gap-6 mt-2 ">
          <button
            onClick={() => handleEventClick("upcoming")}
            className={cn(
              "flex items-center justify-center w-full py-2 text-white rounded-lg bg-primary",
              selectedEvent === "upcoming" && "opacity-35"
            )}
          >
            Upcoming Event
          </button>
          <button
            onClick={() => handleEventClick("past")}
            className={cn(
              "flex items-center justify-center w-full py-2 text-white rounded-lg bg-primary",
              selectedEvent === "past" && "opacity-35"
            )}
          >
            Past Event
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start w-full gap-4 overflow-scroll lg:justify-center">
        {["Yogyakarta", "Jakarta", "Bandung", "Bogor", "Lainnya"].map(
          (item, index) => (
            <Badge
              key={index}
              onClick={() => alert(item)}
              className="cursor-pointer"
            >
              {item}
            </Badge>
          )
        )}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 card">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <div key={index} className="w-full">
            <CardsEvent image={Poster} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Event;
