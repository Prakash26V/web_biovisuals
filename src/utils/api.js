import axios from "axios"
import { add_user, base_url, forgot_password, get_all_plans, get_catogories, get_childCatogories, get_icon, get_subCatogories, user_login } from "./service"

export const UserRegister = async (userData) => {
    try {
      const response = await axios.post(`${base_url}${add_user}`, userData, {})
      return response
    } catch (error) {
      console.log(error)
      return null
    }
}

export const verifyOtpRequest = async (otp, email) => {
  // Make a request to your backend to verify OTP
  const response = await axios.post(`${base_url}api/user/verifyOTP`, { otp, email });
  return response;
};

export const UserLogin = async (loginData) => {
  try {
    const response = await axios.post(`${base_url}${user_login}`, {
      email: loginData.email,
      password: loginData.password,
    });
    return response
  } catch (error) {
    console.log(error)
    return null
  }
}

export const forgotPassword = async ({ email, phone }) => {
  try {
    let requestBody = {};
    if (email) {
      requestBody = { email };
    } else if (phone) {
      requestBody = { phone };
    } else {
      throw new Error('Either email or phone is required, but not both');
    }

    const response = await axios.post(`${base_url}${forgot_password}`, requestBody);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPlan = async () => {
  try {
    const response = await axios.get(`${base_url}${get_all_plans}`);
    const result = response.data;
    return result;
  } catch (e) {
    return false;
  }
}

export const getCatogories = async () => {
  try {
    const response = await axios.get(`${base_url}${get_catogories}`);
    const result = response.data.result;
    return result;
  } catch (e) {
    return false;
  }
}

export const getSubCatogories = async () => {
  try {
    const response = await axios.get(`${base_url}${get_subCatogories}`);
    const result = response.data.result;
    return result;
  } catch (e) {
    return false;
  }
}

export const getChildCatogories = async () => {
  try {
    const response = await axios.get(`${base_url}${get_childCatogories}`);
    const result = response.data.result;
    return result;
  } catch (e) {
    return false;
  }
}

export const getIcon = async () => {
  try {
    const response = await axios.get(`${base_url}${get_icon}`);
    const result = response.data.result;
    return result;
  } catch (e) {
    return false;
  }
}


