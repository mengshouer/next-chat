import { Sidebar, MiddleColumn, MainChatArea } from "src/components/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "src/store/user";
import { useSession } from "next-auth/react";

export default function Layout() {
  const { data } = useSession();
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.user) {
      dispatch(updateUser(data.user));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
