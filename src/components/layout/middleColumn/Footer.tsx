import Image from "next/image";
import { useSelector } from "react-redux";
import type { RootState } from "src/store";
import { AdjustmentsHorizontal } from "../../common/icons";

export default function Footer() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <footer className="items-end px-[10px] py-[5px]">
      <div className="flex justify-between items-center rounded-2xl bg-blud-50 p-[10px] bg-[#373738]">
        <Image
          className="rounded-md hover:cursor-pointer"
          src="https://placeimg.com/192/192/people"
          alt="avatar"
          width={30}
          height={30}
        />
        <span className="flex-auto px-2">{user.username}</span>
        <AdjustmentsHorizontal />
      </div>
    </footer>
  );
}
