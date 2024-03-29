import React from "react";
import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotelOption";

const FacilitySection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="mt-6">
      <label htmlFor="" className="font-semibold text-2xl mt-4">
        Facilities
      </label>
      <div className="flex justify-between flex-wrap py-2">
        {hotelFacilities?.map((facilitity) => (
          <label key={facilitity}>
            <input
              type="checkbox"
              name={facilitity}
              value={facilitity}
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
            <span className="ml-1">{facilitity}</span>
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
  );
};

export default FacilitySection;
