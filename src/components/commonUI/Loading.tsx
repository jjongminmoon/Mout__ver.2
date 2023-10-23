import ModalContainer from "./ModalContainer";
import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  return (
    <ModalContainer center={true}>
      <BeatLoader size={25} color="#ffffff" />
    </ModalContainer>
  );
}
