import type { IuserState } from "src/store/user";

export type MessageProps = {
  userId: string;
  userName: string;
  avatar: string;
  content: string;
  timestamp: number;
};

export type MessageResProps = {
  message_id: string;
  content: string;
  userId: string;
  user: IuserState;
  createdAt: Date;
};
