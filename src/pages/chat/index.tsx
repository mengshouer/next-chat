import { Sidebar, MiddleColumn, MainChatArea } from "src/components/layout";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <div className="container flex max-w-full bg-[#232424]">
        {/* Left sidebar */}
        <Sidebar />

        {/* Middle column */}
        <MiddleColumn />

        {/* Main chatArea */}
        <MainChatArea />
      </div>
    </div>
  );
}
