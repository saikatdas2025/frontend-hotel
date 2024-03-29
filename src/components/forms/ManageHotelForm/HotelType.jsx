import React from "react";
import { hotelTypes } from "../../config/hotelOption";
import { useFormContext } from "react-hook-form";

const HotelType = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const hotelType = watch("hotelType");
  return (
    <div className="mt-4">
      <label htmlFor="" className="font-semibold text-2xl mt-4">
        Hotel Type
      </label>
      <div className="grid grid-cols-5 align-middle gap-4 mt-4 text-center">
        {hotelTypes?.map((type) => (
          <label
            key={type}
            className={
              hotelType === type
                ? "bg-blue-300 px-2 py-3 cursor-pointer rounded-3xl"
                : "bg-gray-300 px-2 py-3 cursor-pointer rounded-3xl"
            }
          >
            <input
              type="radio"
              value={type}
              {...register("hotelType", {
                required: "This field is required",
              })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      <p>
        {errors.hotelType && (
          <span className="text-sm italic font-semibold text-red-600">
            {errors.hotelType.message}
          </span>
        )}
      </p>
    </div>
  );
};

export default HotelType;
