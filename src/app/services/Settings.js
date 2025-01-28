export const settings = {
  baseUrl: "http://182.191.75.29:8012",

  credentials: {
    login: "/api/User/ValidateShanakhtinCompany",
    signup: "/api/User/AddUserReg",
    welcomeScreen: "/api/User/Welcome",
    setUpPassword: "/api/User/SetUpPass",
    setUpOrganization: "/api/User/AddOrganization",
    forgetSendOtop: "/api/User/ForgetsendOTP?email=",
    validateOtp:
      "/api/User/ValidateOtp?email=[email]&otp=[otp]&shanakht=[shanakht]",
    validateShanakht:
      "/api/User/ValidateShanakht?email=[email]&shanakht=[shanakht]",
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

  sideNavbar: {
    tab: "/api/Dashboard/GetTabs",
    nestedTabs: "/api/Dashboard/GetTabsSubCategories?DBTABS=",
  },

  // For Employees Data
  employeeData: {
    getEmployeeFormList: "/api/Dashboard/GetEmployeeForm",
    getEmployeeListsFormData: {
      ListGetBankBranch: "/api/Dashboard/GetBankDetails?BANID=",
      ListGetBankName: "/api/Dashboard/GetBank",
      ListGetReligion: "/api/Dashboard/GetReligion",
      ListGetCast: "/api/Dashboard/GetCast",
      ListGetMaritalStatus: "/api/Dashboard/GetMertialStatus",
      ListGetSect: "/api/Dashboard/GetSect",
      ListGetLastDesignation: "/api/Dashboard/GetLastDesignantion",
      ListGetDesignation: "/api/Dashboard/Designations",
      ListGetTransforFrom: "/api/Dashboard/GetTrasferFrom",
      ListGetTransforTo: "/api/Dashboard/GetTrasferTo",
      ListGetBps: "/api/Dashboard/GetBPSDetails?BPSID=",
      ListGetEmpStatus: "/api/Dashboard/GetEmployeeStatus",
      ListGetGazettedNonGazetted: "/api/Dashboard/GetGazzetted",
      ListGetDdoDescription: "/api/Dashboard/GetCodesDetails?DDOCID=",
      ListGetDdoCode: "/api/Dashboard/GetCodes",
      ListGetMinistryDD: "/api/Dashboard/GetMINISTARYDetails?MINID=",
      ListGetMinistryCode: "/api/Dashboard/GetMinistaryCodes",
      // ListGetDistrict: "/api/Dashboard/",
      // ListGetDepartment: "/api/Dashboard/",
    },
    addEmployeeData: {
      addCodes: "/api/Dashboard/AddCodes",
      addCodesDescription: "/api/Dashboard/AddCodesDescription",
      addMinistaryDeptDes: "/api/Dashboard/AddMinistaryDeptDes",
      addMinistarycodes: "/api/Dashboard/AddMinistarycodes",
      addBPS: "/api/Dashboard/AddBPS",
      addEmployestatus: "/api/Dashboard/AddEmployestatus",
      addGazzetted: "/api/Dashboard/AddGazzetted",
      addTrafnserFrom: "/api/Dashboard/AddTrafnserFrom",
      addTrafnserTo: "/api/Dashboard/AddTrafnserTo",
      addDesignation: "/api/Dashboard/AddDesignation",
      addLastDesignation: "/api/Dashboard/AddLastDesignation",
      addSect: "/api/Dashboard/AddSect",
      addCast: "/api/Dashboard/AddCast",
      addReligion: "/api/Dashboard/AddReligion",
      addBank: "/api/Dashboard/AddBank",
      addBankBranch: "/api/Dashboard/AddBankBranch",
    },
    getPersonalId: "/api/Dashboard/GetPNO",
    postEmployeeForm: "/api/Dashboard/EmployeeForm",
  },

  settings: {
    tabs: {
      addMainTabName: "/api/Dashboard/AddMainTabs",
      addSubTabName: "/api/Dashboard/AddSubTabs",
    },
    authority: {
      getRoles: "/api/Dashboard/GetRoles_Auth",
      addRoles: "/api/Dashboard/DM_Authorities",
    },
  },
};
