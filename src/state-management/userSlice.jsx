import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  country: '',
  flag:''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setCountry(state, action) {
      state.country = action.payload;
    },
    setFlag(state, action) {
      state.flag = action.payload;
    }
  }
});

export const { setName, setCountry, setFlag } = userSlice.actions;
export default userSlice.reducer;
