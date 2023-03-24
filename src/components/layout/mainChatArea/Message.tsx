import Image from "next/image";
import { useRef, useEffect, ReactNode } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessageRequest, updateMessageDataRequest } from "src/store/chat";
import type { RootState } from "src/store";
import type { MessageResProps } from "src/types/chat.types";
import { connect } from "socket.io-client";

export default function Message() {
  const useridRef = useRef<string>("");
  const messageEnd = useRef<HTMLDivElement>(null);
  const chat = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!chat.data.length) {
      dispatch(getMessageRequest());
    }

    const socket = connect(process.env.NEXTAUTH_URL, {
      path: "/api/socket/io",
    });
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("message", (data: MessageResProps) => {
      dispatch(updateMessageDataRequest(data));
    });
    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (messageEnd.current) {
      messageEnd.current.scrollIntoView();
    }
  }, [chat.data]);

  console.log(useridRef);

  return (
    <>
      {chat.status !== "success" && (
        <div>
          {chat.status}...{chat.error}
        </div>
      )}
      {chat.status === "success" &&
        chat.data.map((msg: MessageResProps, index: number) => (
          // 判断是否为同一个人的消息，如果是同一个人的消息，就不显示头像和用户名
          <div
            key={`${msg.userId}-${msg.createdAt}`}
            className="msg-item flex hover:bg-[#313232] rounded-xl"
          >
            <div className="main_chatArea_avatar">
              {(index === 0 || useridRef.current !== msg.userId) && (
                <Image
                  src={msg.user.image || ""}
                  alt="avatar"
                  width={50}
                  height={50}
                />
              )}
            </div>
            <div className="flex flex-col">
              {(index === 0 || useridRef.current !== msg.userId) && (
                <header className="h-[18px]">
                  <strong className="text-white">{msg.user.name}</strong>
                </header>
              )}
              <main className="py-[6px]">{msg.content}</main>
            </div>
            {(useridRef.current = msg.userId) && ""}
          </div>
        ))}
      <div ref={messageEnd} />
    </>
  );
}
