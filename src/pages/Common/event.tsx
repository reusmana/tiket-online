import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import CardsEvent from "../../components/CardEvents/Index";
const Event = () => {
  const loc = useLocation();
  useEffect(() => {
    const q = loc.search.split("=")[1];
    console.log(q);
  }, []);
  return (
    <section className="flex flex-col w-full max-w-screen-xl gap-10 px-2 py-32 mx-auto overflow-scroll">
      <div className="flex flex-col items-center justify-center w-full gap-1">
        <h1 className="text-3xl font-bold text-slate-700">Event Kami</h1>
        <p className="text-lg text-center text-slate-700">
          Semua event yang diselenggarakan oleh Menata Hati!
        </p>
        <form className="relative flex items-center justify-center w-full max-w-xl mt-4">
          <input
            type="text"
            name="search"
            placeholder="Cari Event..."
            className="w-full px-2 py-2 mx-auto text-xl border rounded-md focus:outline-slate-600"
          />
          <span className="absolute text-lg right-2 text-slate-600">
            <FaSearch />
          </span>
        </form>
      </div>
      <div className="flex items-center justify-start w-full gap-4 overflow-scroll lg:justify-center">
        {["Yogyakarta", "Jakarta", "Bandung", "Bogor", "Lainnya"].map(
          (item, index) => (
            <button
              key={index}
              className="px-6 py-1 text-sm rounded-md bg-slate-100 hover:bg-slate-400 text-slate-700 hover:text-white bg-none"
            >
              <h1>{item}</h1>
            </button>
          )
        )}
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 card">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <div key={index} className="w-full">
            <CardsEvent />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Event;
