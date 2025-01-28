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

export const postedLogin = async (email, shanakht) => {
  try {
    const response = await postData(
      `${s.credentials.login}?email=${email}&shanakht=${shanakht}`
    );
    return response;
  } catch (error) {
    return null;
  }
};

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
export const postedSetUpOraganization = async (data) => {
  try {
    const response = await postData(`${s.credentials.setUpOrganization}`, data);
    return response;
  } catch (error) {
    return null;
  }
};
export const dataGetLanguages = async () => {
  try {
    const url = `${s.languages.getLanguage}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const dataGetYears = async (CorF) => {
  try {
    const url = `${s.year.getYears}${CorF}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const dataGetCharts = async () => {
  try {
    const url = `${s.getCharts.charts}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

export const postedForgetSendOtop = async (email) => {
  try {
    const response = await postData(`${s.credentials.forgetSendOtop}${email}`);
    return response;
  } catch (error) {
    return null;
  }
};
export const postedValidateOtp = async (email, otp, shanakht) => {
  try {
    const response = await postData(
      `${s.credentials.validateOtp}`
        .replace(`$[email]`, email)
        .replace(`$[otp]`, otp)
        .replace(`$[shanakht]`, shanakht)
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedValidateShanakht = async (email, shanakht) => {
  try {
    const response = await postData(
      `${s.credentials.validateShanakht}`
        .replace(`$[email]`, email)
        .replace(`$[shanakht]`, shanakht)
    );
    return response;
  } catch (error) {
    return null;
  }
};

// For SideBar Tab

export const getSideTab = async () => {
  try {
    const url = `${s.sideNavbar.tab}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
// For SideBar Nested Tab

export const getNestedSideTab = async (DBTABS) => {
  try {
    const url = `${s.sideNavbar.nestedTabs}${DBTABS}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

// For Employee Module

export const getEmployeeForm = async () => {
  try {
    const url = `${s.employeeData.getEmployeeFormList}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

// For Get List of Employee Form Data

export const ListGetDdoDescription = async (DDOCID) => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetDdoDescription}${DDOCID}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetDdoCode = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetDdoCode}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetMinistryDD = async (MINID) => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetMinistryDD}${MINID}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetMinistryCode = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetMinistryCode}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetBps = async (BPSID) => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetBps}${BPSID}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetEmpStatus = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetEmpStatus}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetGazettedNonGazetted = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetGazettedNonGazetted}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetTransforFrom = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetTransforFrom}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetTransforTo = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetTransforTo}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetDesignation = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetDesignation}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetLastDesignation = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetLastDesignation}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetDepartment = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetDepartment}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetSect = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetSect}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

export const ListGetMaritalStatus = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetMaritalStatus}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetCast = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetCast}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetDistrict = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetDistrict}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetReligion = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetReligion}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetBankName = async () => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetBankName}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};
export const ListGetBankBranch = async (BANID) => {
  try {
    const url = `${s.employeeData.getEmployeeListsFormData.ListGetBankBranch}${BANID}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

// Add Employee Form For List

export const postedAddCodes = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addCodes}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddCodesDescription = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addCodesDescription}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddMinistaryDeptDes = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addMinistaryDeptDes}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddMinistarycodes = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addMinistarycodes}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddBPS = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addBPS}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedDesignation = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addDesignation}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedLastDesignation = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addLastDesignation}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddEmployestatus = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addEmployestatus}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddGazzetted = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addGazzetted}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddTrafnserFrom = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addTrafnserFrom}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddTrafnserTo = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addTrafnserTo}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddSect = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addSect}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddCast = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addCast}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddReligiion = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addReligion}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddBank = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addBank}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};
export const postedAddBankBranch = async (data) => {
  try {
    const response = await postData(
      `${s.employeeData.addEmployeeData.addBankBranch}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};

// Posted Total Form Data Employee

export const postedTotalEmployeeForm = async (data) => {
  try {
    const response = await postFormData(
      `${s.employeeData.postEmployeeForm}`,
      data
    );
    return response;
  } catch (error) {
    return null;
  }
};

// get personal number of add form employee

export const gettingPersonalId = async () => {
  try {
    const url = `${s.employeeData.getPersonalId}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

// Add Main Tab Name

export const fetchAddMainTabNameAPI = async (MainName, Remarks) => {
  try {
    const response = await postData(
      `${s.settings.tabs.addMainTabName}?MainName=${MainName}&Remarks=${Remarks}`
    );
    return response;
  } catch (error) {
    return null;
  }
};

// Add Sub Tab Name

export const fetchAddSubTabNameAPI = async (MainName, SubName, Remarks) => {
  try {
    const response = await postFormData(
      `${s.settings.tabs.addSubTabName}?MainName=${MainName}&SubName=${SubName}&Remarks=${Remarks}`
    );
    return response;
  } catch (error) {
    return null;
  }
};

// Get Authority Data in Setting Module

export const getAuthorityAPI = async () => {
  try {
    const url = `${s.settings.authority.getRoles}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    return null;
  }
};

// Add Authority Data in Setting Module

export const fetchAddRoleAPI = async (
  operation,
  Auth,
  Remarks,
  islive,
  View,
  Insert,
  Update,
  Lock,
  All,
  Approval
) => {
  try {
    const response = await postData(
      `${s.settings.authority.addRoles}?operation=${operation}&Auth=${Auth}&Remarks=${Remarks}&islive=${islive}&View=${View}&Insert=${Insert}&Update=${Update}&Lock=${Lock}&All=${All}&Approval=${Approval}`
    );
    return response;
  } catch (error) {
    return null;
  }
};
