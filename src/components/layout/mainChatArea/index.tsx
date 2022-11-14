import Header from "./Header";
import Main from "./Main";
import MessageInput from "./MessageInput";

export default function MainChatArea() {
  return (
    <main className="main_chatArea">
      <Header />
      <Main />
      <MessageInput />
    </main>
  );
}
