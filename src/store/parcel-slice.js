import { createSlice } from "@reduxjs/toolkit";
import { parcelActions } from "./parcelActions";
import { PARCEL_DATA } from "../dummyData/PARCELS";

const initialState = {
  parcelData: [...PARCEL_DATA],
  selectedParcel: null,
};
const parcelSlice = createSlice({
  name: "parcel",
  initialState,
  reducers: {
    ...parcelActions,
    PARCEL_REFRESH(state) {
      state.parcelData = PARCEL_DATA;
    },
  },
});

export const {
  ADD_AFTER,
  ADD_BEFORE,
  PARCEL_DELETE,
  PARCEL_REFRESH,
  PARCEL_REPLACE,
  SHOW_FINAL,
  HANDLE_SELECT_PARCEL,
} = parcelSlice.actions;
export default parcelSlice.reducer;
