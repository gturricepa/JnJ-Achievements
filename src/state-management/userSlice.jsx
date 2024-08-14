import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  country: ''
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
    }
  }
});

export const { setName, setCountry } = userSlice.actions;
export default userSlice.reducer;
