import Image from "next/image";
import { useRef } from "react";
import type { MessageProps } from "@/types/chat.types";

const message: MessageProps[] = [
  {
    userid: "1",
    username: "John",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolor sint nulla accusantium quia, quidem enim, tempore voluptatibus veniam molestiae nisi quo praesentium in, consequuntur odit ipsa possimus ratione dolorum.",
    timestamp: 1668432217073,
  },
  {
    userid: "1",
    username: "John",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quis, quos consequuntur reiciendis similique aspernatur esse ab quisquam non, enim itaque asperiores alias ex illum sequi explicabo cupiditate. Amet, numquam.",
    timestamp: 1668432217074,
  },
  {
    userid: "1",
    username: "John",
    message: "How are you?",
    timestamp: 1668432217075,
  },
  {
    userid: "2",
    username: "Jane",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempora ratione in, aut expedita aspernatur iure autem illum corrupti beatae, molestias est eaque doloremque, magnam inventore quisquam dignissimos quaerat a.",
    timestamp: 1668432217076,
  },
  {
    userid: "2",
    username: "Jane",
    message: "How are you?",
    timestamp: 1668432217077,
  },
];

export default function Message() {
  const useridRef = useRef<string>("");

  return (
    <>
      {message.map((msg: MessageProps) => (
        // 判断是否为同一个人的消息，如果是同一个人的消息，就不显示头像和用户名
        <div className="msg-item flex hover:bg-[#313232] rounded-xl">
          <div className="main_chatArea_avatar">
            {useridRef.current !== msg.userid && (
              <Image
                src="https://placeimg.com/192/192/people"
                alt="avatar"
                width={50}
                height={50}
              />
            )}
          </div>
          <div className="flex flex-col">
            {useridRef.current !== msg.userid && (
              <header className="h-[18px]">
                <strong className="text-white">{msg.username}</strong>
              </header>
            )}
            <main className="py-[6px]">{msg.message}</main>
          </div>
          {(useridRef.current = msg.userid) && ""}
        </div>
      ))}
    </>
  );
}
