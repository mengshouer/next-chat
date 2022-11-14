import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="border-2 border-cyan-400 rounded-2xl bg-blud-50 p-1 hover:cursor-pointer">
        <Image
          className="rounded-xl"
          src="https://picsum.photos/200/200"
          alt="Logo"
          width={50}
          height={50}
        />
      </div>
    </header>
  );
}
