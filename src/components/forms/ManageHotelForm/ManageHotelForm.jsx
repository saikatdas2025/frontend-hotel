import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import FacilitySection from "./FacilitySection";
import GuestSection from "./GuestSection";
import ImageSection from "./ImageSection";
import HotelType from "./HotelType";
import { createHotel } from "../../../apiRequest/Hotel";

// for toast messages
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ManageHotelForm = ({ hotel }) => {
  const formMethods = useForm();
  const { reset, handleSubmit } = formMethods;

  useEffect(() => {
    reset(hotel);
  }, [reset]);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const form = new FormData();
    form.append("name", data.hotel);
    form.append("city", data.city);
    form.append("country", data.country);
    form.append("adultCount", data.adults);
    form.append("childCount", data.child);
    form.append("pricePerNight", data.pricePerNight);
    form.append("description", data.description);
    form.append("starRating", data.starRatings);
    form.append("type", data.hotelType);

    data.facilities.map((facility, index) => {
      form.append(`facilities[${index}]`, facility);
    });
    Object.values(data.hotelImages).map((hotelImage, index) => {
      form.append(`hotels`, hotelImage);
    });

    createHotel(form).then((res) => {
      if (res.status) {
        toast.success(res?.data?.message);
        navigate("");
      } else {
        toast.error(res?.response?.data?.message);
      }
    });
  });

  return (
    <FormProvider {...formMethods}>
      <div className="w-10/12 m-auto shadow-lg p-6 border-2 rounded-lg">
        <form onSubmit={onSubmit}>
          <DetailsSection />
          <HotelType />
          <FacilitySection />
          <GuestSection />
          <ImageSection />

          <button className="py-2 px-4 rounded-md cursor-pointe bg-black text-white">
            Save
          </button>
        </form>
      </div>
      <ToastContainer />
    </FormProvider>
  );
};

export default ManageHotelForm;
