import React, { useState } from "react";
import atlassianLogo from "../assets/svg/atlassianLogo.svg";
import { cn } from "../utils/util";
import {
  Briefcase,
  MessageSquare,
  HandCoins,
  Bell,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("Jobs");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonClasses = (buttonName) =>
    cn(
      "flex gap-2 justify-center self-stretch my-auto px-4 py-[13px] rounded-[49px]",
      {
        "text-white bg-primary border-2 border-primary_outline border-solid font-medium":
          activeButton === buttonName,
        "text-zinc-400": activeButton !== buttonName,
      }
    );

  return (
    <nav className="h-[109px] flex flex-col items-center justify-center pl-10 pr-6 py-6 bg-white shadow-sm   ">
      <div className="flex gap-5 justify-between w-full items-center">
        <div className="justify-center p-7 h-[61px] items-center flex w-[100px] text-xl font-bold text-primary whitespace-nowrap bg-neutral-200">
          <span>Logo</span>
        </div>
        <div className="flex gap-5 justify-between items-center py-2 h-[ 74px] w-[538px] pr-6 pl-2 my-auto text-xl font-medium whitespace-nowrap bg-white border border-solid border-neutral-300 rounded-full ">
          <div className={buttonClasses("Jobs")}>
            <button
              onClick={() => handleButtonClick("Jobs")}
              className="flex gap-2 justify-center font-normal items-center"
            >
              <Briefcase /> <span>Jobs</span>
            </button>
          </div>
          <div className={buttonClasses("Messages")}>
            <button
              onClick={() => handleButtonClick("Messages")}
              className="flex gap-2 justify-center font-normal items-center"
            >
              <MessageSquare /> <span>Messages</span>
            </button>
          </div>
          <div className={buttonClasses("Payments")}>
            <button
              onClick={() => handleButtonClick("Payments")}
              className="flex gap-2 justify-center font-normal items-center"
            >
              <HandCoins />
              <span>Payments</span>
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center py-2.5">
          <Bell className="cursor-pointer" />
          <div className="flex gap-1.5 justify-center items-center cursor-pointer">
            <img
              loading="lazy"
              src={atlassianLogo}
              className="rounded-full w-10 h-10"
              alt="atlassian logo"
            />
            <ChevronDown />{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
