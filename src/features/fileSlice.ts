import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FileState {
  file: File | null;
}

const initialState: FileState = {
  file: null,
};

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFileMetadata(state, action: PayloadAction<FileState>) {
      state.file = action.payload.file;
    },
    clearFileMetadata(state) {
      state.file = null;
    },
  },
});

export const { setFileMetadata, clearFileMetadata } = fileSlice.actions;

export default fileSlice.reducer;
