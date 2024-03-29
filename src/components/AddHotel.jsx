import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createHotel } from "../apiRequest/Hotel";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import ManageHotelForm from "./forms/ManageHotelForm/ManageHotelForm";

const AddHotel = () => {
  return (
    <div>
      <div className="text-right mb-6  m-auto w-10/12">
        <span className=" ">
          <Link
            to={"/my-hotels"}
            className=" rounded-md p-2 bg-black text-white"
          >
            {" "}
            All Hotels
          </Link>
        </span>
      </div>
      <ManageHotelForm />
    </div>
  );
};

export default AddHotel;
