import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { fetchDataFromServer } from '../services/fakeServer';
import { Node, DataState } from './types/dataSliceTypes';

const initialState: DataState = {
  data: [],
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const data: Node[] = await fetchDataFromServer();
  return data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<Node[]>) => {
      state.data = action.payload;
    });
  },
});

export const selectData = (state: RootState): Node[] => state.data.data;

export default dataSlice.reducer;
