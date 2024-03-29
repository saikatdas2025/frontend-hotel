import axios from "axios";
const url = "https://hotel-backend-saikat.vercel.app/api/v1/hotels";

export const createHotel = async (data) => {
  try {
    const response = await axios.post(`${url}/add-hotels`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllHotels = async () => {
  try {
    const response = await axios.get(`${url}/getAllHotels`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getHotelByid = async (hotelId) => {
  try {
    const response = await axios.post(
      `{url}/getAllHotels/getHotelByid/${hotelId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const updateHotel = async (hotelId, data) => {
  try {
    const response = await axios.post(
      `${url}/getAllHotels/updateHotel/${hotelId}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};
