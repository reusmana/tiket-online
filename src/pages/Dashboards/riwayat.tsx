import image from "../../assets/posters/Poster 1 1.png";

const Riwayat = () => {
  return (
    <div className="flex flex-col pr-6">
      <h1 className="text-4xl font-bold">Riwayat </h1>
      <table className="w-full mt-10 table-fixed">
        <thead>
          <tr className="w-full border">
            <th className="w-10 py-4 text-lg border">No</th>
            <th className="w-32 py-4 text-lg border">Poster</th>
            <th className="w-64 py-4 text-lg border">Name</th>
            <th className="w-32 py-4 text-lg border">Date</th>
            <th className="w-32 py-4 text-lg border">Time</th>
            <th className="w-32 py-4 text-lg border">Location</th>
            <th className="w-32 py-4 text-lg border">HTM</th>
            <th className="w-32 py-4 text-lg border">Tipe Ticket</th>
            <th className="w-32 py-4 text-lg border">Status</th>
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
            <td className="py-2 text-center border">Rp. 350.000</td>
            <td className="py-2 text-center border">VIP</td>
            <td className="py-2 text-center border">
              <span className="px-4 py-1 text-sm text-white bg-green-500 rounded-full ">
                Selesai
              </span>
            </td>
          </tr>
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
            <td className="py-2 text-center border">Rp. 350.000</td>
            <td className="py-2 text-center border">VIP</td>
            <td className="py-2 text-center border">
              <span className="px-4 py-1 text-sm text-white bg-blue-500 rounded-full ">
                Pending
              </span>
            </td>
          </tr>
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
            <td className="py-2 text-center border">Rp. 350.000</td>
            <td className="py-2 text-center border">VIP</td>
            <td className="py-2 text-center border">
              <span className="px-4 py-1 text-sm text-white bg-red-500 rounded-full ">
                Cancel
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Riwayat;
