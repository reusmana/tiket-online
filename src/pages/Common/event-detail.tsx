import CeramahPoster from "../../assets/posters/Poster 1 1.png";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import fetchApi from "../../lib/fetch-api";
import { useParams } from "react-router-dom";
import type { EventList } from "../../interfaces/event-admin";
import { urlPath } from "../../lib/url-path";

const EventDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [dataDetail, setDataDetail] = useState<EventList>();
  const [isVIP, setIsVIP] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApi.get(`/events/${slug}`);
        setDataDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = () => {
    let currentPriceSelect: number = 0;
    let typeTicket: string = "";
    if (isVIP) {
      const vip = dataDetail?.vip_price;
      typeTicket = "vip";
      currentPriceSelect = Number(vip);
    } else {
      const reg = dataDetail?.regular_price;
      typeTicket = "regular";
      currentPriceSelect = Number(reg);
    }

    const appendEventDetails = {
      ...dataDetail,
      type: typeTicket,
      price: currentPriceSelect,
    };
    localStorage.setItem("event", JSON.stringify(appendEventDetails));
    navigate("/payment");
  };

  if (dataDetail === undefined) {
    return;
  }

  return (
    <div className="flex flex-col w-full">
      <section className="relative flex w-full mt-20 overflow-hidden lg:h-[32rem] h-screen bg-slate-400">
        <img
          src={urlPath(dataDetail!.poster_url) ?? CeramahPoster}
          alt=""
          className="object-cover object-center w-full"
        />
        <div className="absolute inset-0 flex items-center w-full px-2 bg-black bg-opacity-70">
          <div className="flex flex-col-reverse items-center justify-between w-full max-w-screen-lg mx-auto lg:gap-5 lg:flex-row">
            <div className="flex flex-col items-center justify-start w-full ">
              <h1 className="text-3xl font-bold lg:text-4xl md:text-2xl text-slate-100">
                {dataDetail?.name}
              </h1>
              <div className="flex flex-col items-start justify-start w-full gap-2 mt-4 text-lg text-slate-100">
                <ul className="flex items-start justify-start w-full gap-2">
                  <li className="font-bold">Tanggal</li>
                  <li>:</li>
                  <li>{new Date(dataDetail!.event_date).toDateString()}</li>
                </ul>
                <ul className="flex items-start justify-start w-full gap-2">
                  <li className="font-bold">Lokasi</li>
                  <li>:</li>
                  <li>Pekanbaru</li>
                </ul>
                <ul className="flex items-start justify-start w-full gap-2">
                  <li className="font-bold">Harga Tiket Regular</li>
                  <li>:</li>
                  <li>
                    Rp
                    {parseInt(dataDetail?.regular_price).toLocaleString(
                      "en-US"
                    )}
                  </li>
                </ul>
                <ul className="flex items-start justify-start w-full gap-2">
                  <li className="font-bold">Harga Tiket VIP</li>
                  <li>:</li>
                  <li>
                    Rp {parseInt(dataDetail?.vip_price).toLocaleString("en-US")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-5 lg:h-[32rem] h-[20rem]  w-full flex lg:justify-end justify-center">
              <img
                src={urlPath(dataDetail!.poster_url)}
                alt=""
                className="h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="grid w-full max-w-screen-lg gap-10 px-2 py-32 mx-auto lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: dataDetail?.description }}
          ></p>
        </div>
        <div className="grid grid-cols-2 gap-4 h-fit">
          <Button
            onClick={() => setIsVIP(false)}
            className={cn(
              "py-3 text-white rounded-md bg-secondary border border-secondary",
              isVIP && "bg-transparent text-secondary "
            )}
          >
            Reguler
          </Button>
          <Button
            onClick={() => setIsVIP(true)}
            className={cn(
              "py-3 text-orange-300 bg-transparent border border-orange-300 rounded-md",
              isVIP && "bg-orange-300 text-white"
            )}
          >
            VIP
          </Button>
          <button
            onClick={() => handleSubmit()}
            className="col-span-2 py-3 text-center text-white rounded-md bg-primary"
          >
            Daftar Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
