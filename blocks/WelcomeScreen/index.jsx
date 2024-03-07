import WelcomeImage from "@/public/images/welcome2.svg";
import Image from "next/image";

export default function WelcomeScreen() {
  return (
    <div className="h-[calc(100vh-60px)] flex items-center flex-col justify-center">
      <h2 className="font-bold text-[30px] mb-4">
        Xoş gəlmisiniz,{" "}
        <span className="font-normal text-gray-400 capitalize">
          QARAYEV ELVIN ELNUR OĞLU
        </span>
      </h2>
      <div className="image w-fullflex items-center justify-center">
        <Image src={WelcomeImage} priority alt="Welcome image" />
      </div>
    </div>
  );
}
