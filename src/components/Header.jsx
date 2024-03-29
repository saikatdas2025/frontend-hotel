import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import { useAppContext } from "../context/AppContext";
import { logOutUser } from "../apiRequest/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppContext();

  const handleLogout = () => {
    logOutUser().then((res) => {
      if (res.status !== 200) {
        toast.error(res?.response?.data?.message);

        setTimeout(() => {
          navigate("/sign-up");
        }, 1000);
      }
      toast.success(res?.data?.message);
    });
  };

  return (
    <div className="bg-blue-800 ">
      <div className="mx-auto container flex justify-between items-center text-white sticky top-0 bg-blue-800 py-6">
        <span className="text-3xl font-bold tracking-tight">
          <Link to={"/"}> HolidaySaikat.com</Link>
        </span>
        <span>
          {isLoggedIn === true ? (
            <>
              <Link
                className="p-2 mr-8 text-lg cursor-pointer hover:text-gray-300 transition-all"
                to={"/my-booking"}
              >
                My Booking
              </Link>
              <Link
                className="p-2 mr-8 text-lg cursor-pointer hover:text-gray-300 transition-all"
                to={"/my-hotels"}
              >
                My Hotels
              </Link>
              <Link onClick={handleLogout}>
                <span className="text-black font-bold text-md px-4 py-2 rounded-md bg-white hover:bg-gray-200 transition-all cursor-pointer">
                  Logout
                </span>
              </Link>
            </>
          ) : (
            <Link to={"sign-in"}>
              <span className="text-black font-bold text-md px-4 py-2 rounded-md bg-white hover:bg-gray-200 transition-all cursor-pointer">
                Sign In
              </span>
            </Link>
          )}
        </span>
      </div>
      <ToastContainer position="top-center" />
      <Hero />
    </div>
  );
};

export default Header;
