import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllHotels } from "../apiRequest/Hotel";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    getAllHotels().then((res) => {
      // console.log(res?.data?.hotels);
      setHotels(res?.data?.hotels);
    });
  }, []);
  return (
    <div className="p-4 border-2 rounded-lg shadow-lg">
      <div className="p-4 flex justify-between items-center">
        <span className="text-center p-2 text-3xl font-bold">My Hotels</span>
        <span>
          <Link
            to={"/add-hotel"}
            className="border-2 p-2 text-lg bg-black text-white italic rounded-md"
          >
            Add Hotel
          </Link>
        </span>
      </div>
      <div className="my-4">
        {hotels?.length === 0 ? (
          <p className="italic font-bold text-lg text-center">Loading...</p>
        ) : (
          hotels?.map((hotel) => (
            <div
              className="border-2 shadow-md p-4 mb-3 rounded-md"
              key={hotel._id}
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-3xl font-semibold">{hotel.name}</p>
                  <p className="text-xl my-1">{hotel.description}</p>
                  <p className="text-lg text-red-500 font-semibold italic mb-3">
                    Address: {hotel.city}, {hotel.country}
                  </p>
                </div>
                <div>
                  <span className="flex justify-end p-2 ">
                    <Link
                      to={`/my-hotels/edit-hotel/${hotel._id}`}
                      className="border-2 py-1 px-5 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all"
                    >
                      Edit
                    </Link>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4 justify-center border-2 px-2">
                <div className="border-r-2">
                  <p className="text-2xl font-semibold mt-4">Facilities</p>
                  {hotel.facilities.map((ht, index) => (
                    <p className="text-lg text-gray-600" key={index}>
                      {index + 1}. {ht}
                    </p>
                  ))}
                </div>
                <div className="border-r-2">
                  <p className="text-2xl font-semibold mt-4"> Hotel Type</p>
                  <p className="text-lg text-gray-600">{hotel.type}</p>
                </div>
                <div className="border-r-2">
                  <p className="text-2xl font-semibold mt-4">Price</p>
                  <p className="text-lg text-gray-600">
                    Rs. {hotel.pricePerNight} - Per night
                  </p>
                </div>
                <div className="border-r-2">
                  <p className="text-2xl font-semibold mt-4">Room</p>
                  <p className="text-lg text-gray-600">
                    {hotel.adultCount} - Adults
                  </p>
                  <p className="text-lg text-gray-600">
                    {hotel.childCount} - Child
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold mt-4">
                    Customer Ratings
                  </p>
                  <p className="text-lg text-gray-600">
                    {hotel.starRating} - Rating Average
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Hotel;
