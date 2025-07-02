import { useState } from "react";
import ImagePoster from "../../assets/img.png";
import QRIS from "../../assets/qris.png";
import MANDIRI from "../../assets/mandiri.png";
import BRI from "../../assets/bri.png";

const Payment = () => {
  const [amountTicket, setAmountTicket] = useState(1);

  const increment = () => {
    setAmountTicket(amountTicket + 1);
  };

  const decrement = () => {
    setAmountTicket(amountTicket - 1);
  };
  return (
    <div className="flex flex-col w-full lg:mt-20">
      <section className="relative flex flex-col items-start justify-start w-full max-w-screen-xl gap-1 px-2 pt-20 pb-5 mx-auto text-slate-700">
        <h1 className="text-3xl font-bold">Pembayaran</h1>
        <p className="text-lg">
          Atur metode pembayaran dan jumlah tiket yang Anda inginkan.
        </p>
        <div className="flex items-start justify-start w-full gap-5 mt-5">
          <img src={ImagePoster} alt="" className="h-64 rounded-lg" />
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-xl font-bold">MH Pekanbaru | Sesi Jam 9</h1>
            <p className="font-normal text-md">19</p>
            <p className="font-normal text-md">10 August 2025</p>
            <p className="font-normal text-md">VIP</p>
          </div>
        </div>
        <span className="w-full h-0.5 divide-x bg-slate-200 mt-4"></span>
      </section>
      <section className="flex flex-col items-start justify-start w-full max-w-screen-xl gap-6 px-2 pb-20 mx-auto">
        <h1 className="text-xl font-semibold">Pilih metode pembayaran</h1>
        <div className="grid w-full gap-6 lg:grid-cols-3">
          <div className="flex flex-col col-span-2 gap-6">
            <button className="flex items-center justify-start gap-3 px-5 py-5 border rounded-lg shadow-lg qr-code border-slate-300 drop-shadow-xl">
              <img src={QRIS} alt="" className="h-5" />
              <span className="text-lg font-semibold uppercase ">QRIS</span>
            </button>
            <button className="flex items-center justify-start gap-3 px-5 py-5 border rounded-lg shadow-lg qr-code border-slate-300 drop-shadow-xl">
              <img src={MANDIRI} alt="" className="h-5" />
              <span className="text-lg font-semibold uppercase ">Mandiri</span>
            </button>
            <button className="flex items-center justify-start gap-3 px-5 py-5 border rounded-lg shadow-lg qr-code border-slate-300 drop-shadow-xl">
              <img src={BRI} alt="" className="h-5" />
              <span className="text-lg font-semibold uppercase ">BRI</span>
            </button>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="px-4 py-4 border rounded-lg border-slate-200 drop-shadow-lg">
              <div className="flex items-center justify-between">
                <h3>Jumlah Tiket</h3>
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={decrement}
                    className="flex items-center justify-center w-8 h-8 text-xl text-white bg-blue-400 border rounded-full"
                  >
                    -
                  </button>
                  <span>{amountTicket}</span>
                  <button
                    onClick={increment}
                    className="flex items-center justify-center w-8 h-8 text-xl text-white bg-blue-400 border rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-10 text-xs">
                <h3>Harga</h3>
                <div className="flex items-center justify-center gap-2">
                  <span>Rp 350.000 x {amountTicket}</span>
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
                  <span>Rp 352.205</span>
                </div>
              </div>
            </div>

            <input
              type="text"
              placeholder="Masukan Kode Unik"
              className="w-full px-4 py-2 mt-5 border rounded-lg"
            />
            <button className="w-full px-4 py-2 mt-5 text-white bg-blue-400 rounded-lg">
              Lanjutkan Pembayaran
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
