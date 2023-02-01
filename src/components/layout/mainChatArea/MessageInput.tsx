import { useState } from "react";
import { pushRemoteMessageRequest } from "src/store/chat";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "src/store";

export default function MessageInput() {
  const [content, setContent] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    if (!content) return;
    // dispatch message to other users
    dispatch(
      pushRemoteMessageRequest({
        userId: user.id,
        userName: user.name,
        avatar: user.image,
        content,
        timestamp: new Date().getTime(),
      })
    );
    setContent("");
  };

  return (
    <div className="main_chatArea_bottom_bar">
      <input
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={sendMessage}
        value={content}
        type="text"
        placeholder="Enter message..."
        className="main_chatArea_bottom_bar_input"
      />
    </div>
  );
}
