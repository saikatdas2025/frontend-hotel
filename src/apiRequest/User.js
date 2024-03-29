import axios from "axios";

axios.defaults.withCredentials = true;

export const userRegistration = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/users/register",

      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const userLogin = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/users/login",
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const isUserLoggedIn = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/users/home"
    );
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
    const response = await axios.post(
      "http://localhost:8000/api/v1/users/logout"
    );
    return response;
  } catch (error) {
    return error;
  }
};
