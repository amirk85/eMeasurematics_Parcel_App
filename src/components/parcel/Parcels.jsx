import { LOCATIONS } from "../../dummyData/LOCATIONS";
import ParcelList from "./ParcelList";
import ParcelInput from "./ParcelInput";
import SelectedParcel from "./SelectedParcel";

export default function Parcels() {
  // const handleReplace = (selectedParcel, addedParcel) => {
  //   if (!selectedParcel) {
  //     alert("Please select a parcel first!");
  //   } else if (addedParcel.name && addedParcel.group) {
  //     const updatedParcels = parcels.map((parcel) => {
  //       if (parcel.id === selectedParcel.id) {
  //         return {
  //           ...parcel,
  //           ...addedParcel,
  //         };
  //       }
  //       return parcel;
  //     });
  //   }
  // };

  return (
    <div>
      <ParcelList />
      <SelectedParcel />
      <ParcelInput locations={LOCATIONS} />
    </div>
  );
}
