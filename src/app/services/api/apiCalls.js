import axios from "axios";
import { settings as s } from "../Settings.js";

const getUrl = (ep) => `${s.baseUrl}${ep}`;

export const postDataAnonymously = async (relativeUrl, data) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: "post",
    url,
    headers: {
      "Content-Type": "application/json-patch+json",
      Accept: "*/*",
    },
    data,
  };

  try {
    const response = await axios(config)
      .then((res) => res)
      .catch((error) => error.response);
    return response;
  } catch (err) {
    return { status: null };
  }
};
// get Data
export const getData = async (relativeUrl) => {
  const accessToken = localStorage.getItem("access_token");
  const url = getUrl(relativeUrl);
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json-patch+json",
      Accept: "*/*",
    },
  };

  try {
    const response = await axios.get(url, config);
    return { status: response.status, data: response.data };
  } catch (error) {
    if (error.response) {
      return { status: error.response.status, data: [] };
    }
    return { status: 0, data: [] };
  }
};

// post data
export const postData = async (relativeUrl, data) => {
  const accessToken = localStorage.getItem("access_token");
  const url = getUrl(relativeUrl);
  const config = {
    method: "post",
    url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    data,
  };
  try {
    const response = await axios(config)
      .then((resp) => resp)
      .catch((error) => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};
// put data
export const putData = async (relativeUrl, user, data) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: "put",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ ...data }),
  };

  try {
    const response = await axios(config)
      .then((res) => res)
      .catch((error) => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};
// post form data
export const postFormData = async (relativeUrl, data) => {
  const accessToken = localStorage.getItem("access_token");
  const url = getUrl(relativeUrl);
  const config = {
    method: "post",
    url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
    },
    data,
  };

  try {
    const response = await axios(config)
      .then((res) => res)
      .catch((error) => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};
