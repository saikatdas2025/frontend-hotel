import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { userRegistration } from "../apiRequest/User";

// for toast messages
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const registerUser = (data) => {
    const firstname = data.firstName;
    const lastname = data.lastName;
    const email = data.email;
    const password = data.password;

    // for user register
    userRegistration({ firstname, lastname, email, password }).then((res) => {
      if (res.status) {
        // console.log(res);
        // alert(res?.data?.message);
        toast.success(res?.data?.message);
        navigate("sign-in");
      } else {
        // console.log(res?.response?.data?.message);
        // alert(res?.response?.data?.message);
        toast.error(res?.response?.data?.message);
      }
    });
  };

  return (
    <div className="flex justify-center items-center overflow-hidden text-lg md:flex-row">
      <div className="p-6 w-2/4 overflow-auto rounded-xl shadow-emerald-400 shadow-lg border-2 my-4 ">
        <form action="" onSubmit={handleSubmit(registerUser)}>
          <p className="text-4xl font-bold mb-8 italic">Create an Account</p>
          <div className="flex flex-col md:flex-row gap-6">
            <span className="flex flex-col w-full ">
              <label className="italic text-xl font-semibold" htmlFor="">
                Firstname
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="p-2 outline-none border-2"
                {...register("firstName", {
                  required: "This field is required",
                })}
              />
              {errors.firstName && (
                <span className="text-sm italic font-bold text-red-600">
                  {errors.firstName.message}
                </span>
              )}
            </span>
            <span className="flex flex-col w-full">
              <label htmlFor="" className="italic text-xl font-semibold">
                Lastname
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="p-2 outline-none border-2"
                {...register("lastName", {
                  required: "Last name field are qequired",
                })}
              />
              {errors.lastName && (
                <span className="text-sm italic font-bold text-red-600">
                  {errors.lastName.message}
                </span>
              )}
            </span>
          </div>
          <span className="flex flex-col my-4">
            <label htmlFor="" className="italic text-xl font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="p-2 outline-none border-2"
              {...register("email", { required: "Email field are qequired" })}
            />
            {errors.email && (
              <span className="text-sm italic font-bold text-red-600">
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
                required: "Password field are qequired",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters.",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm italic font-bold text-red-600">
                {errors.password.message}
              </span>
            )}
          </span>
          <span className="flex flex-col">
            <label htmlFor="" className="italic text-xl font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter confirm password"
              className="p-2 outline-none border-2"
              {...register("confirmPassword", {
                validate: (val) => {
                  if (!val) {
                    return "Confirm password field are required";
                  } else if (watch("password") !== val) {
                    return "Password and Confirm Password do not matched!";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <span className="text-sm italic font-bold text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}
          </span>
          <p className="text-right p-2 font-semibold text-lg text-blue-700 italic">
            <Link to={"/sign-in"}>
              Already sign up? <span className="underline">sign in</span>
            </Link>
          </p>
          <button className="px-4 py-2 border-2 outline-none cursor-pointer bg-green-700 text-white italic rounded-md text-lg">
            Sign up
          </button>

          <ToastContainer position="top-center" />
        </form>
      </div>
    </div>
  );
};

export default Register;
