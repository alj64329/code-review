import SignUpComponent from "@/components/SignUp.component";
import { IconType } from "react-icons";
import { GiDiamonds } from "react-icons/gi";
import { IoBugOutline } from "react-icons/io5";
import { TbProgressCheck } from "react-icons/tb";

const subtextLists: {
  name: string;
  icon: IconType;
  boldText: string;
  text: string;
}[] = [
  {
    name: "ai",
    icon: GiDiamonds,
    boldText: "AI reviews in seconds",
    text: "Get instant, line-by-line feedback before your PR",
  },
  {
    name: "bug",
    icon: IoBugOutline,
    boldText: "Catch bugs early",
    text: "Spot logic errors and edge cases before they ship",
  },
  {
    name: "progress",
    icon: TbProgressCheck,
    boldText: "Track your progress",
    text: "Watch your code quality score improve over time",
  },
];
const SignUp = () => {
  return (
    <main className="flex">
      <div className="hidden lg:block flex-1 bg-[#111318]">
        <div className="flex flex-col justify-center px-18 h-full">
          <div>
            <h2 className="font-bold text-white text-3xl">
              Build better code from day one.
            </h2>
            <p className="text-[14px] text-white-40">
              Join us for cleaner code
            </p>
          </div>

          <div className="pt-20 flex flex-col gap-8">
            {subtextLists.map((item) => (
              <div key={item.name} className="flex gap-6 items-center">
                <div className="border border-[rgba(123,97,255,0.3)] bg-[rgba(123,97,255,0.15)] p-1.5 rounded-md">
                  <item.icon size={24} className="text-[#A78FFF]" />
                </div>
                <div>
                  <h3 className="text-white font-bold">{item.boldText}</h3>
                  <p className="text-white-40 text-[13px]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" lg:flex-1 w-full">
        <div className="flex justify-center items-center h-[100vh]">
          <SignUpComponent />
        </div>
      </div>
    </main>
  );
};

export default SignUp;
