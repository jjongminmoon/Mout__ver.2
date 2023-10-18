export type UserInfoProps = {
  id: string;
  number: number;
  email: string;
  image: string;
  nickname: string;
  address: [];
  likeProducts: [];
  likePosts: [];
  comments: [];
  posts: [];
  cart: [];
};

export type AddressProps = {
  postCode: string;
  postContact: string;
  postInput: string;
  postName: string;
  postAddressName: string;
  postResult: string;
};
