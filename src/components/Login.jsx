import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userLogin } from "../apiRequest/User";
// for toast messages
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = async (data) => {
    const email = data.email;
    const password = data.password;

    userLogin({ email, password }).then((res) => {
      if (res.status) {
        // alert(res?.data?.message);
        toast.success(res?.data?.message);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error(res?.response?.data?.message);
        // alert(res?.response?.data?.message);
      }
    });
  };

  return (
    <div className="flex justify-center items-center overflow-hidden text-lg">
      <div className="p-6 w-2/4 overflow-auto rounded-xl shadow-emerald-400 shadow-lg border-2 my-4">
        <form onSubmit={handleSubmit(login)}>
          <p className="text-4xl font-bold mb-8 italic">Login</p>
          <div className="flex flex-col">
            <span className="flex flex-col my-4">
              <label htmlFor="" className="italic text-xl font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="p-2 outline-none border-2"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-sm italic font-bold text-red-600 tracking-wider">
                  {errors.email.message}
                </span>
              )}
            </span>
            <span className="flex flex-col my-4">
              <label htmlFor="" className="italic text-xl font-semibold">
                Password
              </label>
              <input
                type="text"
                placeholder="Enter password"
                className="p-2 outline-none border-2"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should be atleast 6 characters!",
                  },
                })}
              />
              {errors.password && (
                <span className="text-sm italic font-bold text-red-600 tracking-wider">
                  {errors.password.message}
                </span>
              )}
            </span>
          </div>

          <p className="text-right p-2 font-semibold text-md text-blue-600 italic">
            <Link to={"/sign-up"}>
              New user? <span className="underline">sign up </span>
            </Link>
          </p>
          <button className=" px-4 py-2 border-2 outline-none cursor-pointer bg-green-700 text-white italic rounded-md text-lg">
            Sign in
          </button>
          <ToastContainer position="top-center" />
        </form>
      </div>
    </div>
  );
};

export default Login;
