import React from "react";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const existingImage = watch("hotelImages");

  const handleDelete = (event, imageFile) => {
    event.preventDefault();
    setValue(
      "hotelImages",
      Object.values(existingImage)?.filter((url) => url !== imageFile)
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <label htmlFor="" className="font-semibold text-2xl mt-4">
          Hotel Images
        </label>
        {existingImage && (
          <div className="grid grid-cols-6 gap-4">
            {Object.values(existingImage)?.map((url) => (
              <div key={url} className="relative group">
                <img src={url} className="min-h-full object-cover" />
                <button
                  onClick={(event) => handleDelete(event, url)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-col align-middle -mt-2">
          <input
            type="file"
            accept="image/*"
            multiple
            className="p-2 border-2 w-80"
            {...register("hotelImages", {
              validate: (imageFile) => {
                const totalLength = imageFile?.length;
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

export default ImageSection;
