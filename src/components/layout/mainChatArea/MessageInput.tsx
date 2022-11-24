import { useState } from "react";
import { pushRemoteMessageRequest } from "src/store/chat";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "src/store";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    if (!message) return;
    // dispatch message to other users
    dispatch(
      pushRemoteMessageRequest({
        email: user.email as string,
        name: user.name as string,
        image: user.image as string,
        message,
        timestamp: new Date().getTime(),
      })
    );
    setMessage("");
  };

  return (
    <div className="main_chatArea_bottom_bar">
      <input
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={sendMessage}
        value={message}
        type="text"
        placeholder="Enter message..."
        className="main_chatArea_bottom_bar_input"
      />
    </div>
  );
}
