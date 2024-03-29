import React from "react";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <p className="text-center font-bold underline text-3xl mb-6">
        Add Hotels
      </p>
      <div className="flex flex-col">
        <label htmlFor="" className="font-semibold text-2xl mt-4">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter hotel name"
          className=" border-2 p-2 text-lg mb-3"
          {...register("hotel", {
            required: "This field is required",
          })}
        />
        {errors.hotel && (
          <span className="text-sm italic font-semibold text-red-600">
            {errors.hotel.message}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col w-full">
          <label htmlFor="" className="font-semibold text-xl mt-4">
            City
          </label>
          <input
            type="text"
            placeholder="Enter hotel city"
            className=" border-2 p-2 text-lg mb-3 w-auto"
            {...register("city", {
              required: "This field is required",
            })}
          />
          {errors.city && (
            <span className="text-sm italic font-semibold text-red-600">
              {errors.city.message}
            </span>
          )}
        </div>
        <div className="flex flex-col w-full ml-4">
          <label htmlFor="" className="font-semibold text-xl mt-4">
            Country
          </label>
          <input
            type="text"
            placeholder="Enter your city"
            className=" border-2 p-2 text-lg mb-3 w-auto"
            {...register("country", {
              required: "This field is required",
            })}
          />
          {errors.country && (
            <span className="text-sm italic font-semibold text-red-600">
              {errors.country.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="font-semibold text-xl mt-4">
          Description
        </label>
        <textarea
          placeholder="Enter description about your hotel"
          id=""
          cols="30"
          rows="5"
          className=" border-2 p-2 text-lg mb-3"
          {...register("description", {
            required: "This field is required",
          })}
        ></textarea>
        {errors.description && (
          <span className="text-sm italic font-semibold text-red-600">
            {errors.description.message}
          </span>
        )}
      </div>
      <div className="flex flex-col align-middle">
        <label htmlFor="" className="font-semibold text-xl mt-4">
          Price per night
        </label>
        <input
          type="number"
          placeholder="Enter price per night"
          className=" border-2 p-2 text-lg mb-3"
          {...register("pricePerNight", {
            required: "This field is required",
          })}
        />
        {errors.pricePerNight && (
          <span className="text-sm italic font-semibold text-red-600">
            {errors.pricePerNight.message}
          </span>
        )}
      </div>
      <div className="flex flex-col align-middle">
        <label htmlFor="" className="font-semibold text-xl mt-4">
          Star Ratings
        </label>
        <select
          name=""
          id=""
          className=" border-2 p-2 text-lg mb-3"
          {...register("starRatings", {
            required: "This field is required",
          })}
        >
          <option defaultValue="Select rating">Select Rating</option>
          {[1, 2, 3, 4, 5].map((rt) => (
            <option key={rt} value={rt}>
              {rt}
            </option>
          ))}
        </select>
        {errors.starRatings && (
          <span className="text-sm italic font-semibold text-red-600">
            {errors.starRatings.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default DetailsSection;
