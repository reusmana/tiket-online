import React, { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import fetchApi from "../../../lib/fetch-api";
import type { UserCreateByAdmin } from "../../../interfaces/users";
import { GoEye, GoEyeClosed } from "react-icons/go";
import Loading from "../../Loading";

type UserCreatedProps = {
  create: boolean;
  setCreate: (create: boolean) => void;
};

const UserCreated: React.FC<UserCreatedProps> = ({ create, setCreate }) => {
  const [handlePasswordView, setHandlePasswordView] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const request: UserCreateByAdmin = {
        name: (event.currentTarget.names as HTMLInputElement).value,
        email: (event.currentTarget.email as HTMLInputElement).value,
        role: (event.currentTarget.roles as HTMLInputElement).value,
        password: (event.currentTarget.password as HTMLInputElement).value,
      };

      const response = await fetchApi.post("/admin/users", request);
      if (response.status === 201) {
        setCreate(false);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        alert("Gagal menambahkan users");
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      alert("Gagal menambahkan users");
    }
  };
  return (
    <div
      onClick={() => {
        setCreate(!create);
      }}
      className={`absolute inset-0 overflow-y-scroll bg-black bg-opacity-30 z-[99999999] py-20 justify-center items-start px-2 ${
        create ? "flex" : "hidden"
      }`}
    >
      {isLoading && <Loading />}
      <div
        className="w-full max-w-2xl p-6 bg-white rounded-lg min-h-20"
        onClick={(event) => event.stopPropagation()}
      >
        <form
          action=""
          onSubmit={handleForm}
          className="flex flex-col w-full gap-5"
        >
          <label
            htmlFor="names"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Name</span>
            <Input
              name="names"
              id="names"
              type="text"
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="email"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">Email</span>
            <Input
              name="email"
              id="email"
              type="email"
              className="px-4 py-3 border-2 bg-[#F5F5F5]"
            />
          </label>
          <label
            htmlFor="roles"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <span className="text-sm font-semibold uppercase">roles</span>
            <select
              name="roles"
              id="roles"
              className="px-4 py-3 border-2 bg-[#F5F5F5] w-full rounded-lg"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </label>
          <label
            htmlFor="password"
            className="flex flex-col w-full col-span-2 gap-1"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase">password</span>
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

          <Button type="submit" className="py-3 bg-primary">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserCreated;
