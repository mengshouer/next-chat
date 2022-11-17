import Image from "next/image";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessageRequest } from "src/store/chat";
import type { RootState } from "src/store";
import type { MessageProps } from "src/types/chat.types";

export default function Message() {
  const useridRef = useRef<string>("");
  const messageEnd = useRef<HTMLDivElement>(null);
  const chat = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!chat.data.length) {
      dispatch(getMessageRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (messageEnd.current) {
      messageEnd.current.scrollIntoView();
    }
  }, [chat.data]);

  return (
    <>
      {chat.status !== "success" && (
        <div>
          {chat.status}...{chat.error?.stack}
        </div>
      )}
      {chat.status === "success" &&
        chat.data.map((msg: MessageProps, index: number) => (
          // 判断是否为同一个人的消息，如果是同一个人的消息，就不显示头像和用户名
          <div
            key={`${msg.user_id}-${msg.timestamp}`}
            className="msg-item flex hover:bg-[#313232] rounded-xl"
          >
            <div className="main_chatArea_avatar">
              {(index === 0 || useridRef.current !== msg.user_id) && (
                <Image
                  src="https://placeimg.com/192/192/people"
                  alt="avatar"
                  width={50}
                  height={50}
                />
              )}
            </div>
            <div className="flex flex-col">
              {(index === 0 || useridRef.current !== msg.user_id) && (
                <header className="h-[18px]">
                  <strong className="text-white">{msg.username}</strong>
                </header>
              )}
              <main className="py-[6px]">{msg.message}</main>
            </div>
            {(useridRef.current = msg.user_id) && ""}
          </div>
        ))}
      <div ref={messageEnd} />
    </>
  );
}
