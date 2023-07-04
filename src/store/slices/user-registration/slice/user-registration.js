import { createSlice } from '@reduxjs/toolkit';
import { createUser,userLogIn, createUserRole, getAllDepartments, getAllRoles } from '../action/user-registration';
import { toast } from 'react-toastify';
const initialState = {
  first_name: null,
  last_name: null,
  country: null,
  // state: null,
  // city: null,
  // community: null,
  email: null,
  profile_image_url: null,
  phone_number: null,
  company_number: null,
  // whatsapp_number: null,
  gender: 1,
  password: null,
  status: 1,
  user_types_id: 1,
  roles_id: 1,
  department: 1,
  social_login: 'google',
  roles: [],
  departments: []
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setFirst_name: (state, action) => {
      state.first_name = action.payload;
    },
    setLast_name: (state, action) => {
      state.last_name = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setProfile_image_url: (state, action) => {
      state.profile_image_url = action.payload;
    },
    setPhone_number: (state, action) => {
      state.phone_number = action.payload;
    },
    setCompany_number: (state, action) => {
      state.company_number = action.payload;
    },
    setWhatsapp_number: (state, action) => {
      state.whatsapp_number = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setUser_types_id: (state, action) => {
      state.user_types_id = action.payload;
    },
    setRoles_id: (state, action) => {
      state.roles_id = action.payload;
    },
    setDepartment: (state, action) => {
      state.department = action.payload;
    },
    setSocial_login: (state, action) => {
      state.social_login = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.users = state.register;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload.data;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.users = state.register;
      })


      .addCase(userLogIn.pending, (state) => {
        state.loading = true;
        state.users = state.register;
        state.error = null;
      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload.data;
        console.log(action);
      })
      .addCase(userLogIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.users = state.register;
      })

      .addCase(createUserRole.pending, (state) => {
        state.loading = true;
        state.error = null;
        // state.users = state.register;
      })
      .addCase(createUserRole.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload.data;
      })
      .addCase(createUserRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        // state.users = state.register;
      })

      .addCase(getAllDepartments.pending, (state) => {
        state.loading = true;
        state.departments = state.departments;
        state.error = null;
      })

      .addCase(getAllDepartments.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.departments = action.payload.data;
      })
      .addCase(getAllDepartments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.departments = state.departments;
      })

      .addCase(getAllRoles.pending, (state) => {
        state.loading = true;
        state.roles = state.roles;
        state.error = null;
      })
      .addCase(getAllRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.roles = action.payload.data;
      })
      .addCase(getAllRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.roles = state.roles;
      })
  }
});

export const {
  setFirst_name,
  setLast_name,
  setCountry,
  setEmail,
  setProfile_image_url,
  setPhone_number,
  setCompany_number,
  setWhatsapp_number,
  setGender,
  setPassword,
  setStatus,
  setUser_types_id,
  setRoles_id,
  setDepartment,
  setSocial_login
} = signupSlice.actions;

export const selectFirst_name = (state) => state.signup.first_name;
export const selectLast_name = (state) => state.signup.last_name;
export const selectCountry = (state) => state.signup.country;
export const selectEmail = (state) => state.signup.email;
export const selectProfile_image_url = (state) => state.signup.profile_image_url;
export const selectPhone_number = (state) => state.signup.phone_number;
export const selectCompany_number = (state) => state.signup.company_number;
export const selectWhatsapp_number = (state) => state.signup.whatsapp_number;
export const selectGender = (state) => state.signup.gender;
export const selectPassword = (state) => state.signup.password;
export const selectStatus = (state) => state.signup.status;
export const selectUser_types_id = (state) => state.signup.user_types_id;
export const selectRoles_id = (state) => state.signup.roles_id;
export const selectDepartment = (state) => state.signup.department;
export const selectSocial_login = (state) => state.signup.social_login;

export default signupSlice.reducer;