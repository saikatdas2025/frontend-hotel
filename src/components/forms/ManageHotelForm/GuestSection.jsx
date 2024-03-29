import React from "react";
import { useFormContext } from "react-hook-form";

const GuestSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <p className=" text-2xl mt-4 font-semibold">Guests</p>
      <div className="flex w-full align-middle mt-2">
        <div className="flex flex-col align-middle w-full mr-4">
          <label htmlFor="" className="font-semibold text-md italic">
            Adults
          </label>
          <input
            type="number"
            placeholder="Enter adults count"
            className="p-2  border-2 mb-3"
            {...register("adults", {
              required: "This field is required",
              min: 1,
            })}
          />
          {errors.adults && (
            <span className="text-sm italic font-semibold text-red-600">
              {errors.adults.message}
            </span>
          )}
        </div>
        <div className="flex flex-col align-middle w-full">
          <label htmlFor="" className="font-semibold text-md italic">
            Child
          </label>
          <input
            type="number"
            placeholder="Enter childs count"
            className="p-2  border-2 mb-3"
            {...register("child", {
              required: "This field is required",
              min: 1,
            })}
          />
          {errors.child && (
            <span className="text-sm italic font-semibold text-red-600">
              {errors.child.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestSection;
