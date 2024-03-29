import axios from "axios";

export const createHotel = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/hotels/add-hotels",
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllHotels = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/hotels/getAllHotels"
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getHotelByid = async (hotelId) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/v1/hotels/getHotelByid/${hotelId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const updateHotel = async (hotelId, data) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/v1/hotels/updateHotel/${hotelId}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};
