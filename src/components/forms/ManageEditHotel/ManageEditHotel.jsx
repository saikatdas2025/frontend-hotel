import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { hotelFacilities, hotelTypes } from "../../config/hotelOption";

const ManageEditHotel = ({ hotel }) => {
  let {
    name,
    city,
    country,
    description,
    pricePerNight,
    starRating,
    adultCount,
    childCount,
    photos,
    facilities,
    type,
  } = hotel;
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const existingImage = watch("hotelImages");
  const hTypeSelect = watch("hotelType");

  return (
    <div className="">
      <p className="text-center font-bold underline text-3xl mb-6">
        Edit Hotel
      </p>
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-full mr-4">
          <label htmlFor="" className="font-semibold text-2xl">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter hotel name"
            className=" border-2 p-2 text-lg"
            defaultValue={name}
            {...register("name", {
              required: "Hotel name field is required",
            })}
          />
          {errors.hotel && (
            <span className="text-sm italic font-semibold text-red-600">
              {errors.hotel.message}
            </span>
          )}
        </div>
        <div className="flex flex-col w-full mr-4">
          <label htmlFor="" className="font-semibold text-xl">
            City
          </label>
          <input
            type="text"
            placeholder="Enter hotel city"
            className=" border-2 p-2 text-lg w-auto"
            defaultValue={city}
            {...register("city", {
              required: "Hotel city field is required",
            })}
          />
          {errors.city && (
            <span className="text-sm italic font-semibold text-red-600">
              {errors.city.message}
            </span>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="" className="font-semibold text-xl">
            Country
          </label>
          <input
            type="text"
            placeholder="Enter your city"
            defaultValue={country}
            className=" border-2 p-2 text-lg w-auto"
            {...register("country", {
              required: "Hotel country field is required",
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
          defaultValue={description}
          className=" border-2 p-2 text-lg mb-3"
          {...register("description", {
            required: "Hotel description field is required",
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
          defaultValue={pricePerNight}
          className=" border-2 p-2 text-lg mb-3"
          {...register("pricePerNight", {
            required: "Hotel price field is required",
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
          <option>Select Rating</option>
          <option selected value={starRating}>
            {starRating}
          </option>
          {[1, 2, 3, 4, 5].map((rt) => {
            if (starRating === rt) {
            } else {
              return (
                <option key={rt} value={rt}>
                  {rt}
                </option>
              );
            }
          })}
        </select>
        {errors.starRatings && (
          <span className="text-sm italic font-semibold text-red-600">
            {errors.starRatings.message}
          </span>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="" className="font-semibold text-2xl mt-4">
          Hotel Type
        </label>
        <div className="grid grid-cols-5 align-middle gap-4 mt-4 text-center">
          {hotelTypes?.map((hType) => (
            <label
              key={hType}
              className={
                type === hType || hTypeSelect === hType
                  ? "bg-blue-300 px-2 py-3 cursor-pointer rounded-3xl"
                  : "bg-gray-300 px-2 py-3 cursor-pointer rounded-3xl"
              }
            >
              <input
                type="radio"
                {...register("hotelType", {
                  required: "This field is required",
                })}
                className="hidden"
                defaultValue={hType}
              />
              <span>{hType}</span>
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

      <div className="mt-6">
        <label htmlFor="" className="font-semibold text-2xl mt-4">
          Facilities
        </label>
        <div className="flex justify-between flex-wrap py-2">
          {hotelFacilities?.map((facility) => (
            <label key={facility}>
              <input
                type="checkbox"
                name={facility}
                value={facility}
                defaultChecked={facilities}
                {...register("facilities", {
                  validate: (facilities) => {
                    if (facilities && facilities.length > 0) {
                      return true;
                    } else {
                      return "At least one facility is required";
                    }
                  },
                })}
              />
              <span className="ml-1">{facility}</span>
            </label>
          ))}
        </div>
        <p>
          {errors.facilities && (
            <span className="text-sm italic font-semibold text-red-600">
              {errors.facilities.message}
            </span>
          )}
        </p>
      </div>
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
              defaultValue={adultCount}
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
              defaultValue={childCount}
            />
            {errors.child && (
              <span className="text-sm italic font-semibold text-red-600">
                {errors.child.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="" className="font-semibold text-2xl mt-4">
          Hotel Images
        </label>
        {photos && (
          <>
            <p className="-my-3 text-sm text-blue-600 font-bold italic">
              If you want to change this photo, please select new photo
            </p>
            <div className="grid grid-cols-6 gap-4">
              {Object.values(photos)?.map((url) => (
                <div key={url} className="relative group">
                  <img src={url} className="min-h-full object-cover" />
                </div>
              ))}
            </div>
          </>
        )}
        <div className="flex flex-col align-middle -mt-2">
          <input
            type="file"
            accept="image/*"
            multiple
            className="p-2 border-2 w-80"
            {...register("hotelImages", {
              validate: (imageFile) => {
                const totalLength = imageFile?.length || existingImage?.length;
                if (totalLength === 0) {
                  return "At lease one image should be added";
                }
                if (totalLength > 2) {
                  return "Total number of image cannot be more that 2";
                }
                return true;
              },
            })}
          />
          <span className="mt-1 mb-4">
            {errors.hotelImages && (
              <span className="text-sm italic font-semibold text-red-600 -mt-6">
                {errors.hotelImages.message}
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ManageEditHotel;
