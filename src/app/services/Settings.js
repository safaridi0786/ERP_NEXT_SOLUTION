export const settings = {
  baseUrl: "http://192.168.100.78:8012",

  credentials: {
    signup: "/api/User/AddUserReg",
    welcomeScreen: "/api/User/Welcome",
    setUpPassword: "/api/User/SetUpPass",
    setUpOrganization: "/api/User/AddOrganization",
    forgetSendOtop: "/api/User/ForgetsendOTP?email=",
    validateOtp:
      "api/User/ValidateOtp?email=[email]&otp=[otp]&shanakht=[shanakht]",
    validateShanakht:
      "api/User/ValidateShanakht?email=[email]&shanakht=[shanakht]",
  },
  languages: {
    getLanguage: "/api/User/GetLanguages",
  },
  year: {
    getYears: "/api/User/GetYears?CorF=",
  },
  getCountries: {
    countries: "/api/User/GetCountries",
  },

  getCharts: {
    charts: "/api/User/GetCharts",
  },

  // Dummy Data
  chatuser: {
    login: "/api/User/Login",
    sendOtp: "/api/User/SendOTP?email=[email]",
    verifyOTP: "/api/User/VerifyOTP?email=[email]&otp=[otp]",
    resetPassword: "/api/User/ResetPassword?email=[email]&password=[password]",
    addUser: "/api/User/AddUser",
    addUserContacts: "/api/User/AddUserContacts",
    updateUser: "/api/User/UpdateUser",
    updateUserContact: "/api/User/UpdateUserContact",
    getUsers:
      "/api/User/GetUsers?page=[page]&pageSize=[pageSize]&username=[username]&depId=[depId]&status=[status]",
    getUserById: "/api/User/GetUserById?UserId=[UserId]",
    getUsersCSV: "/api/User/GetUsersCSV",
    getUsersList: "/api/User/GetUsersList",
    getUserContactsById: "/api/User/GetUserContacts?UserId=[UserId]",
    getRolesList: "/api/User/GetRolesList",
    getDesignationListById:
      "/api/User/GetDesignationList?DepertmentId=[DepertmentId]",
    getDepertmentList: "/api/User/GetDepertmentList",
    getUserContactStatusLists:
      "/api/User/GetUserContactStatusLists?userId=$[userId]",
    addUserContacts: "/api/User/AddUserContacts",
  },

  chats: {
    getUserChats: "/api/Chat/GetUserChats?userId=$[userId]&isFav=$[isFav]",
    addChat: "/api/Chat/AddChat",
    updateChat: "/api/Chat/UpdateChat",
    updateFavChat: "/api/Chat/UpdateFavChat",
    getChatMessages:
      "/api/Chat/GetChatMessages?userId=$[userId]&chatId=$[chatId]",
    getUserContacts: "/api/User/GetUserContacts?userId=$[userId]",
    addChatMessage: "/api/Chat/AddChatMessage",
  },
};
