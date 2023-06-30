import ParcelList from "./ParcelList";
import ParcelInput from "./ParcelInput";
import SelectedParcel from "./SelectedParcel";

export default function Parcels() {
  return (
    <div>
      <ParcelList />
      <SelectedParcel />
      <ParcelInput />
    </div>
  );
}
