import React from "react";
import { MapPin } from "lucide-react";
import moneyStack from "../assets/svg/moneyStack.svg";

const JobTitle = () => {
  return (
    <section className="flex flex-col px-24 py-6 border-b border-solid border-neutral-300">
      <div className="flex gap-3 px-5 flex-row items-center">
        <h2 className="text-4xl font-semibold text-neutral-700">
          Senior Product Designer
        </h2>
        <div className="size-1 bg-zinc-300 rounded-full"></div>
        <div className="flex gap-3 mt-2 font-medium">
          <span className="text-sm text-zinc-500">posted 2 days ago</span>
          <div className="flex flex-row items-center -mt-1 gap-1 py-0.5 pr-2 pl-1.5 text-xs leading-5 text-center text-emerald-700 whitespace-nowrap bg-emerald-50 rounded-full border border-emerald-200 border-solid">
            <div className="size-1.5 bg-emerald-700 rounded-full"></div>
            <span className="mt-0.5">Open</span>
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 items-center mt-6 text-xl font-medium text-zinc-500">
        <div className="flex gap-2 px-5">
          <MapPin />
          <span className="text-xl">Delaware, USA</span>
        </div>
        <div className="size-1 bg-zinc-300 rounded-full"></div>
        <div className="flex gap-3 px-5 whitespace-nowrap">
          <img loading="lazy" src={moneyStack} alt="moneystack image" />
          <span className="text-xl">$300k-$400k</span>
        </div>
      </div>
    </section>
  );
};

export default JobTitle;
