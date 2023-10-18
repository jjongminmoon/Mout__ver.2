import Title from "../../components/commonUI/Title";
import UserInfo from "../../components/mypage/routes/UserInfo";

export default function UserInfoPage() {
  return (
    <section>
      <Title fontSize="26px">회원 정보 관리</Title>
      <UserInfo />
    </section>
  );
}
