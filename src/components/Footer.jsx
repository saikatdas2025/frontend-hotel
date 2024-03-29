import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto text-white font-bold flex justify-between items-center ">
        <Link to={"/"}>
          <span className="tracking-wide text-2xl">HolidaySaikat.com</span>
        </Link>
        <span className="flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
