import { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { cn } from "../../lib/utils";

const faqs = [
  {
    question: "Apakah boleh membawa anak?",
    answer:
      "Mohon maaf kaa, anak dibawah 7 tahun tidak diperkenankan mengikuti acara. Anak usia 7 sampai 12 tahun dikenakan biaya setengah dari biaya normal senilai Rp.60.000",
  },
  {
    question: "Apakah disediakan kursi?",
    answer:
      "Kami menyediakan kursi untuk lansia, ibu hamil dan peserta yang memiliki masalah",
  },
  {
    question: "Apakah peserta mendapatkan sertifikat?",
    answer:
      "Kami tidak mengeluarkan sertifikat untuk peserta yang mengikuti event ini",
  },
  {
    question: "Kapan pendaftaran ditutup?",
    answer: "Pendaftaran akan ditutup setelah kuota yang kami  sediakan full",
  },
];
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div id="faq" className="max-w-[1087px] w-full mx-auto pt-32 pb-10 px-2">
      <div className="flex flex-col w-full">
        <h1 className="mb-20 text-4xl font-normal text-center lg:text-7xl">
          FAQ
        </h1>
        {faqs.map((faq, index) => (
          <div className="flex flex-col w-full group">
            <div
              className="flex items-center justify-between py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-xl font-semibold lg:text-4xl">
                {faq.question}
              </h2>
              <button className="text-4xl font-semibold">
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            <span
              className={cn(
                "border-b-4 border-slate-400  overflow-hidden transition-[max-height] ease-in-out  lg:text-2xl ",
                openIndex === index ? "max-h-[100em] pb-2" : "max-h-[0]"
              )}
            >
              {faq.answer}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
