import Image from "next/image";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessageRequest, updateMessageDataRequest } from "src/store/chat";
import type { RootState } from "src/store";
import type { MessageProps } from "src/types/chat.types";
import Pusher from "pusher-js";

export default function Message() {
  const useridRef = useRef<string>("");
  const messageEnd = useRef<HTMLDivElement>(null);
  const chat = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();

  // first get message data render
  useEffect(() => {
    if (!chat.data.length) {
      dispatch(getMessageRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Synchronous remote push
  useEffect(() => {
    const pusher = new Pusher(chat.pusher.pusher_app_key, {
      cluster: chat.pusher.pusher_app_cluster,
    });

    const channel = pusher.subscribe("chat");
    channel.bind("message", (data: MessageProps) => {
      dispatch(updateMessageDataRequest(data));
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [chat.pusher, dispatch]);

  // always scroll to the bottom
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
            key={`${msg.email}-${msg.timestamp}`}
            className="msg-item flex hover:bg-[#313232] rounded-xl"
          >
            <div className="main_chatArea_avatar">
              {(index === 0 || useridRef.current !== msg.email) && (
                <Image
                  src={msg.image || "https://placeimg.com/192/192/people"}
                  alt="avatar"
                  width={50}
                  height={50}
                />
              )}
            </div>
            <div className="flex flex-col">
              {(index === 0 || useridRef.current !== msg.email) && (
                <header className="h-[18px]">
                  <strong className="text-white">{msg.name}</strong>
                </header>
              )}
              <main className="py-[6px]">{msg.message}</main>
            </div>
            {(useridRef.current = msg.email) && ""}
          </div>
        ))}
      <div ref={messageEnd} />
    </>
  );
}
