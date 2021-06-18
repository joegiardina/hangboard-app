import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as userAPI from '../api/user';

const loginErrorText = 'Incorrect username or password.';
const createErrorText =
  'Error creating user. Choose another username or try again later.';

const login = createAsyncThunk('user/login', async (data, {dispatch}) => {
  const response = await userAPI.login(data);
  return response;
});

const create = createAsyncThunk('user/create', async (data, {dispatch}) => {
  const response = await userAPI.create(data);
  return response;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    logout: (state, action) => {
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = loginErrorText;
    },
    [login.fulfilled]: (state, {payload}) => {
      state.loading = false;
      if (payload.success) {
        state.user = {name: payload.username};
        state.error = null;
      } else {
        state.user = null;
        state.error = loginErrorText;
      }
    },
    [create.pending]: (state, action) => {
      state.loading = true;
    },
    [create.rejected]: (state, action) => {
      state.loading = false;
      state.error = createErrorText;
    },
    [create.fulfilled]: (state, {payload}) => {
      state.loading = false;
      if (payload.success) {
        state.user = {name: payload.username};
        state.error = null;
      } else {
        state.user = null;
        state.error = createErrorText;
      }
    },
  },
});

export const {logout} = userSlice.actions;
export {login, create};

export default userSlice.reducer;
