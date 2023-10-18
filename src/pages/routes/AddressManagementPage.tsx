import Title from "../../components/commonUI/Title";
import AddressList from "../../components/mypage/routes/AddressList";
import AddressSearchInput from "../../components/mypage/routes/AddressSearchInput";

export default function AddressManagementPage() {
  return (
    <section>
      <Title fontSize="26px">배송지 관리</Title>
      <AddressSearchInput />
      <AddressList />
    </section>
  );
}
