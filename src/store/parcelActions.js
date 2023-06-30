export const parcelActions = {
  ADD_AFTER(state, { payload }) {
    console.log(state.selectedParcel, payload);
    if (!state.selectedParcel) {
      alert("Please select a parcel first!");
    } else if (payload.name && payload.group) {
      const newParcel = {
        ...payload,
        id: Math.random(),
        sequence: state.selectedParcel.sequence + 1,
      };

      const updatedParcels = [...state.parcelData];
      updatedParcels.splice(state.selectedParcel.sequence, 0, newParcel);

      for (
        let i = state.selectedParcel.sequence + 1;
        i < updatedParcels.length;
        i++
      ) {
        updatedParcels[i].sequence++;
      }
      console.log(updatedParcels, "updatedParcels");
      state.parcelData = updatedParcels;
      state.selectedParcel = null;
    }
  },
  ADD_BEFORE(state, { payload }) {
    console.log(payload);
    if (!state.selectedParcel) {
      alert("Please select a parcel first!");
    } else if (payload.name && payload.group) {
      const newParcel = {
        ...payload,
        id: Math.random(),
        sequence: state.selectedParcel.sequence,
      };

      const updatedParcels = state.parcelData.map((parcel) => {
        if (parcel.sequence >= state.selectedParcel.sequence) {
          return {
            ...parcel,
            sequence: parcel.sequence + 1,
          };
        }
        return parcel;
      });

      updatedParcels.splice(state.selectedParcel.sequence - 1, 0, newParcel);
      state.parcelData = updatedParcels;
      state.selectedParcel = null;
    }
  },

  PARCEL_REPLACE(state, { payload }) {
    if (!state.selectedParcel) {
      alert("Please select a parcel first!");
    } else if (payload.name && payload.group) {
      const updatedParcels = state.parcelData.map((parcel) => {
        if (parcel.id === state.selectedParcel.id) {
          return {
            ...parcel,
            ...payload,
          };
        }
        return parcel;
      });
      state.parcelData = updatedParcels;
      state.selectedParcel = null;
    }
  },

  HANDLE_SELECT_PARCEL(state, { payload }) {
    if (state.selectedParcel?.id === payload.id) {
      state.selectedParcel = null;
    } else state.selectedParcel = payload;
  },

  PARCEL_DELETE(state) {
    if (state.selectedParcel == null) {
      alert("Please select a parcel first!");
    } else {
      const updatedParcels = state.parcelData
        .filter((parcel) => parcel.id !== state.selectedParcel.id)
        .map((parcel, index) => ({
          ...parcel,
          sequence: index + 1,
        }));
      state.parcelData = updatedParcels;
      state.selectedParcel = null;
    }
  },
};
