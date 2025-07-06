import { useContext, useEffect, useState } from "react";
import QRIS from "../../assets/qris.png";
import MANDIRI from "../../assets/mandiri.png";
import BRI from "../../assets/bri.png";
import Button from "../../components/ui/Button";
import { cn } from "../../lib/utils";
import fetchApi from "../../lib/fetch-api";
import { urlPath } from "../../lib/url-path";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";

const Payment = () => {
  const [amountTicket, setAmountTicket] = useState(1);
  const navigate = useNavigate();
  const [dataDetail, setDataDetail] = useState<any>();
  const [selectPayment, setSelectPayment] = useState<string>("");
  const [amountPrice, setAmountPrice] = useState(0);
  const [isAlreadyPaid, setIsAlreadyPaid] = useState(false);
  const [urlQR, setUrlQR] = useState({
    qris: "",
    open: false,
  });

  const context = useContext(UserContext);

  const increment = () => {
    setAmountTicket(amountTicket + 1);
    calculatePrice();
  };

  const decrement = () => {
    if (amountTicket === 1) return;
    setAmountTicket(amountTicket - 1);
    calculatePrice();
  };

  const selectThePayment = (payment: string) => {
    setSelectPayment(payment);
  };

  useEffect(() => {
    const detailEvent = localStorage.getItem("event");
    const data = JSON.parse(detailEvent!);
    setDataDetail(data);
    setTimeout(() => {
      calculatePrice();
    }, 2000);
  }, []);
  const handleOrder = async () => {
    try {
      const order = await fetchApi.post("/orders", {
        eventId: dataDetail.id,
        userId: context?.currentUser.id,
        quantity: amountTicket,
        ticketType: dataDetail.type,
      });

      // payments/initiate

      const payment = await fetchApi.post("/payments/initiate", {
        orderId: order.data.id,
        amount: 0,
        method: "qris",
      });

      setUrlQR({
        qris: payment.data.qrUrl,
        open: true,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleAlreadyPaid = async (e: any) => {
    setIsAlreadyPaid(e);
  };

  const calculatePrice = () => {
    const fax = 2500;
    const total = amountTicket * parseInt(dataDetail.price);

    setAmountPrice(total + fax);
  };

  if (dataDetail === undefined) {
    return;
  }

  return (
    <div className="flex flex-col w-full lg:mt-20">
      {urlQR.open && (
        <div className="fixed inset-0 w-full min-h-screen bg-white z-[99999999] flex justify-center items-center flex-col gap-5">
          {urlQR.qris}
          <img src={urlPath(urlQR.qris)} alt="" className="w-72 h-72" />
          <div className="flex items-center justify-center gap-2">
            <input
              id="oke"
              type="checkbox"
              className="w-6 h-6"
              onChange={(e) => handleAlreadyPaid(e.target.checked)}
            />
            <label htmlFor="oke" className="text-lg font-bold">
              Centang jika sudah membayar
            </label>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              localStorage.removeItem("event");
              navigate("/");
            }}
            disabled={isAlreadyPaid ? false : true}
            className="px-8 py-2 text-white rounded-lg w-fit bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Lanjutkan
          </button>
        </div>
      )}
      <section className="relative flex flex-col items-start justify-start w-full max-w-screen-xl gap-1 px-2 pt-20 pb-5 mx-auto text-slate-700">
        <h1 className="text-3xl font-bold">Pembayaran</h1>
        <p className="text-lg">
          Atur metode pembayaran dan jumlah tiket yang Anda inginkan.
        </p>
        <div className="flex items-start justify-start w-full gap-5 mt-5">
          <img
            src={urlPath(dataDetail?.poster_url)}
            alt=""
            className="h-64 rounded-lg"
          />
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-xl font-bold">{dataDetail?.name}</h1>
            <p className="font-normal text-md">
              {new Date(dataDetail?.event_date).toISOString().slice(0, 10)}
            </p>
            <p className="font-normal text-md">
              {dataDetail.type === "vip" ? "VIP" : "Regular"}
            </p>
          </div>
        </div>
        <span className="w-full h-0.5 divide-x bg-slate-200 mt-4"></span>
      </section>
      <section className="flex flex-col items-start justify-start w-full max-w-screen-xl gap-6 px-2 pb-20 mx-auto">
        <h1 className="text-xl font-semibold">Pilih metode pembayaran</h1>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          <div className="flex flex-col col-span-2 gap-6">
            <Button
              onClick={() => selectThePayment("qris")}
              className={cn(
                "flex items-center justify-start gap-3 px-5 py-5 bg-transparent border rounded-lg shadow-lg text-slate-700 qr-code border-slate-300 drop-shadow-xl",
                selectPayment === "qris" && "border-blue-800 border-2"
              )}
            >
              <img src={QRIS} alt="" className="h-5" />
              <span className="text-lg font-semibold uppercase ">QRIS</span>
            </Button>
            <Button
              onClick={() => selectThePayment("mandiri")}
              className={cn(
                "flex items-center justify-start gap-3 px-5 py-5 bg-transparent border rounded-lg shadow-lg text-slate-700 qr-code border-slate-300 drop-shadow-xl",
                selectPayment === "mandiri" && "border-blue-800 border-2"
              )}
            >
              <img src={MANDIRI} alt="" className="h-5" />
              <span className="text-lg font-semibold uppercase ">
                Bank Mandiri
              </span>
            </Button>
            <Button
              onClick={() => selectThePayment("bri")}
              className={cn(
                "flex items-center justify-start gap-3 px-5 py-5 bg-transparent border rounded-lg shadow-lg text-slate-700 qr-code border-slate-300 drop-shadow-xl",
                selectPayment === "bri" && "border-blue-800 border-2"
              )}
            >
              <img src={BRI} alt="" className="h-5" />
              <span className="text-lg font-semibold uppercase ">Bank BRI</span>
            </Button>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="px-4 py-4 border rounded-lg border-slate-200 drop-shadow-lg">
              <div className="flex items-center justify-between">
                <h3>Jumlah Tiket</h3>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    onClick={decrement}
                    className={cn(
                      "flex items-center justify-center w-8 h-8 text-xl text-white bg-primary border rounded-full",
                      amountTicket === 1 &&
                        "bg-primary opacity-30 cursor-not-allowed"
                    )}
                  >
                    -
                  </Button>
                  <span>{amountTicket}</span>
                  <Button
                    onClick={increment}
                    className="flex items-center justify-center w-8 h-8 text-xl text-white border rounded-full bg-primary"
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-10 text-xs">
                <h3>Harga</h3>
                <div className="flex items-center justify-center gap-2">
                  <span>
                    Rp {parseInt(dataDetail?.price).toLocaleString("id-ID")} x{" "}
                    {amountTicket}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <h3>Biaya Langganan</h3>
                <div className="flex items-center justify-center gap-2">
                  <span>Rp 2.205</span>
                </div>
              </div>
              <div className="flex items-center justify-between font-semibold">
                <h3>Total</h3>
                <div className="flex items-center justify-center gap-2">
                  <span>Rp {amountPrice}</span>
                </div>
              </div>
            </div>
            <Button
              disabled={selectPayment === ""}
              onClick={() => {
                handleOrder();
              }}
              className="w-full px-4 py-2 mt-2 text-white rounded-lg bg-primary disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Lanjutkan Pembayaran
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
