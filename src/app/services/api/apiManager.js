import {
  getData,
  postData,
  postFormData,
  postDataAnonymously,
  putFormData,
} from "./apiCalls";
import { settings as s } from "../Settings.js";
// login
export const login = async (data) => {
  debugger;
  try {
    const response = await postDataAnonymously(`${s.chatuser.login}`, data);
    return response;
  } catch (err) {
    return null;
  }
};
// send otp
export const sendPassOtp = async (email) => {
  try {
    const response = await postDataAnonymously(
      `${s.chatuser.sendOtp.replace(`[email]`, email)}`
    );
    return response;
  } catch (err) {
    return null;
  }
};
// verify otp
export const verifyOtp = async (email, otp) => {
  try {
    const response = await postDataAnonymously(
      `${s.chatuser.verifyOTP.replace(`[email]`, email).replace(`[otp]`, otp)}`
    );
    return response;
  } catch (err) {
    return null;
  }
};
// resetPassword
export const resetPassword = async (email, password) => {
  try {
    const response = await postDataAnonymously(
      `${s.chatuser.resetPassword
        .replace(`[email]`, email)
        .replace(`[password]`, password)}`
    );
    return response;
  } catch (err) {
    return null;
  }
};
// getData
export const getUsers = async (page, pageSize, username, depId, status) => {
  try {
    const url = `${s.chatuser.getUsers
      .replace(`[page]`, page)
      .replace(`[pageSize]`, pageSize)
      .replace(`[username]`, username)
      .replace(`[depId]`, depId)
      .replace(`[status]`, status)}`;
    const response = await getData(url);
    return response;
  } catch (err) {
    return null;
  }
};
// getDataById
export const getUsersById = async (userId) => {
  try {
    const url = `${s.chatuser.getUserById.replace(`[UserId]`, userId)}`;
    const response = await getData(url);
    return response;
  } catch (err) {
    return null;
  }
};
// getUsersCSV
export const getUsersCSV = async () => {
  try {
    const url = `${s.chatuser.getUsersCSV}`;
    const response = await getData(url);
    return response;
  } catch (err) {
    return null;
  }
};
// getContactById
export const getUserContactsById = async (userId) => {
  try {
    const url = `${s.chatuser.getUserContactsById.replace(`[UserId]`, userId)}`;
    const response = await getData(url);
    return response;
  } catch (err) {
    return null;
  }
};
// getData Department
export const getDepertmentListData = async () => {
  try {
    const url = `${s.chatuser.getDepertmentList}`;
    const response = await getData(url);
    return response;
  } catch (err) {
    return null;
  }
};
// getData Desination
export const getDesignationListById = async (DepertmentId) => {
  try {
    const url = `${s.chatuser.getDesignationListById.replace(
      `[DepertmentId]`,
      DepertmentId
    )}`;
    const response = await getData(url);
    return response;
  } catch (err) {
    return null;
  }
};
// addData by post method
export const addUser = async (data) => {
  try {
    const response = await postData(`${s.chatuser.addUser}`, data);
    return response;
  } catch (err) {
    return null;
  }
};
// addData by post method
export const updateUserContact = async (data) => {
  try {
    const response = await postData(`${s.chatuser.updateUserContact}`, data);
    return response;
  } catch (err) {
    return null;
  }
};
// Update Data by post method
export const updateUser = async (data) => {
  try {
    const response = await postData(`${s.chatuser.updateUser}`, data);
    return response;
  } catch (err) {
    return null;
  }
};
// add postFormData
export const addUserFormData = async (data) => {
  try {
    const response = await postFormData(`${s.chatuser.addUser}`, data);
    return response;
  } catch (err) {
    return null;
  }
};
// update postformdata
export const updateUserFormData = async (data) => {
  try {
    const response = await postFormData(`${s.chatuser.updateUser}`, data);
    return response;
  } catch (error) {
    return null;
  }
};
// get roles
export const getRolesList = async () => {
  try {
    const url = `${s.chatuser.getRolesList}`;
    const response = await getData(url);
    return response;
  } catch (err) {
    return null;
  }
};

export const addUserContacts = async (data) => {
  try {
    const response = await postData(`${s.chatuser.addUserContacts}`, data);
    return response;
  } catch (error) {
    return null;
  }
};

//Chats
export const getUserContactStatusLists = async (userId) => {
  try {
    const url = `${s.chatuser.getUserContactStatusLists}`.replace(
      `$[userId]`,
      userId
    );
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

//Chats
export const getUserChats = async (userId, isFav) => {
  try {
    const url = `${s.chats.getUserChats}`
      .replace(`$[userId]`, userId)
      .replace(`$[isFav]`, isFav);
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

export const addChat = async (chatData) => {
  try {
    const response = await postFormData(`${s.chats.addChat}`, chatData);
    return response;
  } catch (error) {
    return null;
  }
};

export const updateChat = async (chatData) => {
  try {
    const response = await postFormData(`${s.chats.updateChat}`, chatData);
    return response;
  } catch (error) {
    return null;
  }
};

export const updateFavChat = async (favChatData) => {
  try {
    const response = await postData(`${s.chats.updateFavChat}`, favChatData);
    return response;
  } catch (error) {
    return null;
  }
};

export const getChatMessages = async (userId, chatId) => {
  try {
    const url = `${s.chats.getChatMessages}`
      .replace(`$[userId]`, userId)
      .replace(`$[chatId]`, chatId);
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

export const getUserContacts = async (userId) => {
  try {
    const url = `${s.chats.getUserContacts}`.replace(`$[userId]`, userId);
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

export const addChatMessage = async (chatData) => {
  try {
    const response = await postFormData(`${s.chats.addChatMessage}`, chatData);
    return response;
  } catch (error) {
    return null;
  }
};

// ERP Tasks API's Fetching

export const getCountriesData = async (userId) => {
  try {
    const url = `${s.getCountries.countries}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

export const postedSignUpData = async (data) => {
  try {
    const response = await postData(`${s.credentials.signup}`, data);
    return response;
  } catch (error) {
    return null;
  }
};
export const postedWelcomeScreen = async (data) => {
  try {
    const response = await postData(`${s.credentials.welcomeScreen}`, data);
    return response;
  } catch (error) {
    return null;
  }
};
export const postedSetUpPassword = async (data) => {
  try {
    const response = await postData(`${s.credentials.setUpPassword}`, data);
    return response;
  } catch (error) {
    return null;
  }
};
