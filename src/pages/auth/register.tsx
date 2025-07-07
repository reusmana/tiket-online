import { FcGoogle } from "react-icons/fc";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import fetchApi from "../../lib/fetch-api";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";
import { GoEyeClosed, GoEye } from "react-icons/go";
import { getCookies } from "../../lib/cookie";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [handlePasswordView, setHandlePasswordView] = useState<boolean>(false);
  const [isGuestChecked, setIsGuestChecked] = useState(false);
  const authorization = getCookies("accessToken");

  useEffect(() => {
    if (authorization === undefined) {
      setIsGuestChecked(true);
    } else {
      navigate(-1);
    }
  }, []);

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetchApi.post("/register", {
        name: (e.currentTarget.username as HTMLInputElement).value,
        email: (e.currentTarget.email as HTMLInputElement).value,
        password: (e.currentTarget.password as HTMLInputElement).value,
      });
      localStorage.setItem("users", JSON.stringify(response.data));
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  if (!isGuestChecked) {
    return;
  }
  return (
    <section className="flex flex-col items-center justify-center w-full bg-[#F5F5F5] min-h-screen relative px-2">
      <div className="flex flex-col items-center justify-center flex-1 max-w-[400px] mx-auto w-full">
        <h1 className="text-3xl font-semibold uppercase">Sign Up</h1>
        <Button
          type="button"
          className="flex items-center justify-center gap-2 py-3 text-center bg-[#F5F5F5] border border-slate-400 my-10"
        >
          <FcGoogle className="text-xl" />
          <span className="text-base text-slate-700">
            Sign up with <span className="font-semibold">Google</span>
          </span>
        </Button>
        <div className="flex items-center justify-center w-full gap-2 mb-10">
          <span className="flex-1 h-px bg-secondary"></span>
          <span className="">or sign Up with your email</span>
          <span className="flex-1 h-px bg-secondary"></span>
        </div>
        <form
          action=""
          onSubmit={registerUser}
          className="grid w-full grid-cols-2 gap-4"
        >
          <label htmlFor="name" className="flex flex-col w-full gap-1">
            <span className="text-sm font-semibold uppercase">Name</span>
            <Input
              name="name"
              id="name"
              type="text"
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label htmlFor="username" className="flex flex-col w-full gap-1">
            <span className="text-sm font-semibold uppercase">Username</span>
            <Input
              name="username"
              id="username"
              type="text"
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="phone"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">
              Phone Number
            </span>
            <Input
              name="phone"
              id="phone"
              type="text"
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="email"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">
              Email Address
            </span>
            <Input
              name="email"
              id="email"
              type="email"
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="password"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase">password</span>
              <span className="text-sm font-normal underline cursor-pointer text-blue-primary">
                Forgot Password?
              </span>
            </div>
            <div className="relative flex items-center w-full">
              <Input
                name="password"
                id="password"
                type={handlePasswordView ? "text" : "password"}
                className="pl-4 pr-10 py-3 border-2 bg-[#F5F5F5]"
              />
              <span
                onClick={() => {
                  setHandlePasswordView(!handlePasswordView);
                }}
                className="absolute text-2xl right-3 text-slate-600"
              >
                {handlePasswordView ? <GoEye /> : <GoEyeClosed />}
              </span>
            </div>
          </label>
          <div className="flex items-center justify-start w-full col-span-2 gap-2">
            <Input
              type="checkbox"
              name="terms"
              id="terms"
              className="w-4 h-4"
            />
            <span>
              By Signing Up I agree with
              <span className="ml-1 underline cursor-pointer text-blue-primary">
                Terms & Conditions
              </span>
            </span>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full col-span-2 py-2.5 bg-primary flex items-center justify-center"
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters className="text-2xl animate-spin" />
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>

        <span className="flex pb-20 mt-2 text-base lg:mt-10 ">
          Already have an account?
          <Link to="/login" className="ml-2 underline text-blue-primary">
            Sign In
          </Link>
        </span>
      </div>
      <div className="absolute flex flex-col gap-2 lg:gap-10 lg:flex-row bottom-2 left-2 lg:bottom-10 lg:left-10">
        <span>© {new Date().getFullYear()} yourapp.com</span>
        <span className="underline cursor-pointer text-blue-primary">
          Contact Us
        </span>
      </div>
      <div className="absolute flex flex-col gap-2 lg:gap-10 lg:flex-row bottom-2 right-2 lg:bottom-10 lg:right-10">
        <span className="underline cursor-pointer text-blue-primary">
          Terms & Conditions
        </span>
        <span className="underline cursor-pointer text-blue-primary">
          Privacy Policy
        </span>
      </div>
    </section>
  );
};

export default Register;
