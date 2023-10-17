export type TrendProps = {
  id: string;
  email: string;
  user_image: string;
  nickname: string;
  image: string;
  createdAt: string;
  tag: string[];
  liked: string[];
  comments: CommentsProps[];
};

export type CommentsProps = {
  id: string;
  user_image: string;
  nickname: string;
  comment: string;
  createdAt: string;
};
