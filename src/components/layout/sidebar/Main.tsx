import Image from "next/image";

export default function Main() {
  return (
    <main className="flex-auto">
      <div className="left_sidebar-logo">
        <Image
          src="/images/react.svg"
          alt="Channel_image"
          width={50}
          height={50}
        />
      </div>
    </main>
  );
}
