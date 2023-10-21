export type TrendProps = {
  id: string;
  email: string;
  user_image: string;
  nickname: string;
  image: string;
  createdAt: Date;
  tag: string[];
  liked: string[];
  comments: CommentsProps[];
};

export type CommentsProps = {
  id: string;
  nickname: string;
  comment: string;
  createdAt: Date;
};
