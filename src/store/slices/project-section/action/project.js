import { api } from 'utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const token =
  'v2.local.aF-W6zSgvmo3A8MTMtxZRIm5dzddgpq5Ga_i8mzmcbMgBt73H4sOSNCiQG0FpNaac_qjjeTFS8mmQNypErAkaLAaqDv-WE9I-mgts5RDoJSRT7zGM_jf2ZtG_0LSPqvJtcyhnVZc9h1K4Nzrasthqo_zFEqeSV2M2wXxw80mjF07-xaHezVZmsuHfjREdqG-PkStmxILGbYWWyeeZJFTBXk9YcCTvCG7pgWd-10-nqCKiPSfBmAbJAeBe4-QgHBMpFhwNTr4K9zJHlKJZA.bnVsbA';
const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`
  }
};
const baseurl = 'http://20.203.31.58';


export const getInertationalProjects = createAsyncThunk('projects/getInternationalProjects', async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `${baseurl}/api/dashboard/getAllIntProjects`,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.error);
    }
  });