import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as exerciseAPI from '../api/exercise';

const fetchExercisesByUsername = createAsyncThunk(
  'exercise/fetchExercisesByUsername',
  async (username, thunkAPI) => {
    const response = await exerciseAPI.fetchByUsername(username);
    return response;
  },
);

const saveExercise = createAsyncThunk(
  'exercise/saveExercise',
  async (exercise, {dispatch}) => {
    await exerciseAPI.save(exercise);
    dispatch(fetchExercisesByUsername(exercise.name));
  },
);

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    all: [],
  },
  reducers: {
    clearExercises: (state, action) => {
      state.all = [];
    },
  },
  extraReducers: {
    [fetchExercisesByUsername.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchExercisesByUsername.rejected]: (state, action) => {
      state.loading = false;
    },
    [fetchExercisesByUsername.fulfilled]: (state, action) => {
      state.loading = false;
      state.all = action.payload;
    },
  },
});

export const {clearExercises} = exerciseSlice.actions;
export {fetchExercisesByUsername, saveExercise};

export default exerciseSlice.reducer;
