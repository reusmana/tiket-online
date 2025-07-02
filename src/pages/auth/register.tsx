import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-200">
      <Navbar />
      <section className="flex flex-col min-h-[calc(100vh-(256px))]">
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex flex-col items-center justify-center w-full max-w-xs gap-4 px-4 py-6 my-32 bg-white rounded-lg lg:max-w-sm lg:my-0 min-h-32 drop-shadow-xl">
            <h1 className="text-2xl font-semibold uppercase">Register</h1>
            <form action="" className="flex flex-col w-full gap-6">
              <label htmlFor="username" className="flex flex-col w-full gap-1">
                <span className="text-sm font-semibold uppercase">
                  Username
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:border-slate-400"
                />
              </label>
              <label htmlFor="password" className="flex flex-col w-full gap-1">
                <span className="text-sm font-semibold uppercase">
                  password
                </span>
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:border-slate-400"
                />
              </label>
              <label htmlFor="password" className="flex flex-col w-full gap-1">
                <span className="text-sm font-semibold uppercase">
                  Confirm password
                </span>
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:border-slate-400"
                />
              </label>
              <button className="w-full py-2 text-white rounded-lg bg-slate-400">
                Register
              </button>
            </form>
            <button className="flex items-center flex-1 gap-2 text-xl uppercase w-full py-1.5 rounded-lg justify-center  bg-blue-400">
              Login With google
              <FcGoogle />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
