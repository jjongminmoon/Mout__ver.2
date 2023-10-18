export const actionList = [
  { title: "마이페이지", pathname: "/mypage" },
  { title: "고객센터", pathname: "/cs" }
];

export const categoryList = [
  { id: 1, title: "", print: "전체" },
  { id: 2, title: "shoes", print: "스니커즈" },
  { id: 3, title: "clothes", print: "의류" },
  { id: 4, title: "acc", print: "패션잡화" },
  { id: 5, title: "tech", print: "테크" }
];

export const brandList = [
  { id: 1, title: "전체", print: "전체" },
  { id: 2, title: "NIKE", print: "NIKE" },
  { id: 3, title: "ADIDAS", print: "ADIDAS" },
  { id: 4, title: "JORDAN", print: "JORDAN" },
  { id: 5, title: "ASICS", print: "ASICS" },
  { id: 6, title: "NEW BALANCE", print: "NEW BALANCE" },
  { id: 7, title: "IAB STUDIO", print: "IAM STUDIO" },
  { id: 8, title: "APPLE", print: "APPLE" },
  { id: 9, title: "SAMSUNG", print: "SAMSUNG" }
];

export const sortingList = [
  { sorting: "인기순", criteria: "salesVolume" },
  { sorting: "최근 발매순", criteria: "releaseDate" },
  { sorting: "낮은 가격순", criteria: "price" },
  { sorting: "높은 가격순", criteria: "price" }
];

export const shoppingNavList = [
  { name: "장바구니", pathname: "/mypage/cart" },
  { name: "찜한 상품", pathname: "/mypage/like-products" },
  { name: "회원 정보 관리", pathname: "/mypage/user-info" },
  { name: "배송지 관리", pathname: "/mypage/address-management" }
];

export const communityNavList = [
  { name: "내가 쓴 게시물", pathname: "/mypage/my-posts" },
  { name: "좋아요 한 게시물", pathname: "/mypage/like-posts" }
];

export const shoesSizeList: string[] = [];

for (let i = 1; i < 16; i++) {
  const size = 215 + i * 5;
  shoesSizeList.push(String(size));
}

export const clothesSizeList: string[] = ["XS", "S", "M", "L", "XL", "XXL"];
