import { createSlice } from '@reduxjs/toolkit';
import { createUser } from '../action/user-registration';

const initialState = {
  first_name: '',
  last_name: '',
  country: '',
  email: '',
  profile_image_url: '',
  phone_number: '',
  company_number: '',
  whatsapp_number: '',
  gender: 1,
  password: '',
  status: 1,
  user_types_id: 1,
  roles_id: 1,
  department: 1,
  social_login: 1
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
	  state.companyTypes = state.companyTypes;
	  state.error = null;
	})
	.addCase(createUser.fulfilled, (state, action) => {
	  state.loading = false;
	  state.error = null;
	  state.companyTypes = action.payload;
	  toast.success('Added Successfully', {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark'
	  });
	})
	.addCase(createUser.rejected, (state, action) => {
	  state.loading = false;
	  state.error = action.payload.error;
	  state.companyTypes = state.companyTypes;
	  toast.error(`${state.error}`, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark'
	  });
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
