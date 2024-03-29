import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHotelByid, updateHotel } from "../apiRequest/Hotel";
import { FormProvider, useForm } from "react-hook-form";
import ManageEditHotel from "./forms/ManageEditHotel/ManageEditHotel";

// for toast messages
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export const EditHotel = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    if (id) {
      getHotelByid(id).then((res) => {
        setHotel(res?.data?.hotel);
      });
    }
  }, [id]);

  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const updateHotelForm = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("adultCount", data.adults);
    formData.append("childCount", data.child);
    formData.append("pricePerNight", data.pricePerNight);
    formData.append("description", data.description);
    formData.append("starRating", data.starRatings);
    formData.append("type", data.hotelType);

    data.facilities?.map((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });
    Object.values(data.hotelImages)?.map((hotelImage, index) => {
      formData.append(`hotels`, hotelImage);
    });

    updateHotel(id, formData).then((res) => {
      if (res.status) {
        toast.success(res?.data?.message);

        setTimeout(() => {
          navigate("/my-hotels");
        }, 1000);
      } else {
        toast.error(res?.response?.data?.message);
      }
    });
  });
  return (
    <FormProvider {...formMethods}>
      <form
        action=""
        onSubmit={updateHotelForm}
        className="w-10/12 m-auto rounded-md shadow-lg p-12 shadow-cyan-900"
      >
        <ManageEditHotel hotel={hotel} />
        <button className="bg-black text-white p-2 rounded-md mt-8 cursor-pointer">
          Update Hotel
        </button>
      </form>
      <ToastContainer />
    </FormProvider>
  );
};
