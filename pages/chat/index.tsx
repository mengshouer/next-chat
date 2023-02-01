import { Sidebar, MiddleColumn, MainChatArea } from "src/components/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "src/store/user";
import { useSession, signIn } from "next-auth/react";

export default function Layout() {
  const { data, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.user) {
      dispatch(updateUserProfile());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    signIn();
  }

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
