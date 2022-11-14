import { useState, useCallback } from "react";

export default function MessageInput() {
  const [message, setMessage] = useState("");

  const handleMessage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    },
    []
  );

  const sendMessage = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        setMessage("");
      }
    },
    []
  );

  return (
    <div className="main_chatArea_bottom_bar">
      <input
        onChange={handleMessage}
        onKeyDown={sendMessage}
        value={message}
        type="text"
        placeholder="Enter message..."
        className="main_chatArea_bottom_bar_input"
      />
    </div>
  );
}
