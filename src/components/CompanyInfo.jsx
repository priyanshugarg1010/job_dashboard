import React from "react";
import atlassianLogo from "../assets/svg/atlassianLogo.svg";

const CompanyInfo = () => {
  return (
    <section className="flex flex-col justify-center font-medium w-full px-24 py-10">
      <div className="flex gap-3 justify-center self-start px-5 text-xl whitespace-nowrap text-neutral-600">
        <img loading="lazy" src={atlassianLogo} alt="atlassian logo" />
        <div className="my-auto">Atlassian</div>
      </div>
      <div className="flex flex-row gap-16 mt-6">
        <div className="flex gap-5 flex-col">
          <div className="flex flex-col px-5">
            <div className="text-sm text-neutral-500">Company size</div>
            <div className="mt-2 text-base whitespace-nowrap text-ellipsis text-neutral-700">
              1k - 2k Employees
            </div>
          </div>
          <div className="flex flex-col px-5">
            <div className="text-sm text-neutral-500">Sector</div>
            <div className="mt-2 text-base text-ellipsis text-neutral-700">
              Information Technology, Infrastructure
            </div>
          </div>
          <div className="flex flex-col px-5">
            <div className="text-sm text-neutral-500">Founded In</div>
            <div className="mt-2 text-base text-ellipsis text-neutral-700">
              2019
            </div>
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          <div className="flex flex-col px-5 whitespace-nowrap">
            <div className="text-sm text-neutral-500">Type</div>
            <div className="mt-2 text-base text-ellipsis text-neutral-700">
              Private
            </div>
          </div>
          <div className="flex flex-col px-5">
            <div className="text-sm text-neutral-500">Funding</div>
            <div className="mt-2 text-base text-ellipsis text-neutral-700">
              Bootstrapped
            </div>
          </div>

          <div className="flex flex-col px-5">
            <div className="text-sm text-neutral-500">Founded By</div>
            <div className="mt-2 text-base whitespace-nowrap text-ellipsis text-neutral-700">
              Scott Farquhar, Mike Cannon-Brookes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
