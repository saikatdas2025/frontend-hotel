import axios from "axios";
const url = "https://hotel-backend-saikat.vercel.app/api/v1/users";
axios.defaults.withCredentials = true;

export const userRegistration = async (data) => {
  try {
    const response = await axios.post(`${url}/register`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const userLogin = async (data) => {
  try {
    const response = await axios.post(`${url}/login`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const isUserLoggedIn = async () => {
  try {
    const response = await axios.post(`${url}/home`);
    if (response.status !== 200) {
      return false;
    }
    return true;
  } catch (error) {
    return error;
  }
};

export const logOutUser = async () => {
  try {
    const response = await axios.post(`${url}/logout`);
    return response;
  } catch (error) {
    return error;
  }
};
