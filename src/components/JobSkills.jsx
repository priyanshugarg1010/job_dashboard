import React from "react";
import figma from "../assets/svg/figma.svg";
import adobeIllustrator from "../assets/svg/adobeIllustrator.svg";
import adobeXD from "../assets/svg/adobeXD.svg";

const JobSkills = () => {
  return (
    <section className="px-20 py-9 w-full border-b border-solid border-neutral-300">
      <div className="w-4/5 flex gap-8">
        <div className="flex flex-col w-3/12 ">
          <div className="flex flex-col grow px-5 text-xs font-medium text-slate-700 max-md:mt-10">
            <div className="text-sm text-neutral-500">Skills Required</div>
            <div className="flex flex-col justify-center px-2 py-[3px] mt-2 w-fit text-center whitespace-nowrap bg-white rounded-md border border-gray-300 border-solid">
              <div className="flex gap-1 items-center">
                <img loading="lazy" src={figma} alt="figma logo" />
                <span>Figma</span>
              </div>
            </div>
            <div className="flex flex-col justify-center px-2 py-[3px] mt-2 w-[145px] text-center bg-white rounded-md border border-gray-300 border-solid">
              <div className="flex gap-1 items-center">
                <img
                  loading="lazy"
                  src={adobeIllustrator}
                  alt="adobe illustrator logo"
                />
                <span>Adobe Illustrator</span>
              </div>
            </div>
            <div className="flex flex-col w-fit justify-center px-2 py-[3px] mt-2 text-center bg-white rounded-md border border-gray-300 border-solid">
              <div className="flex gap-1 items-center">
                <img loading="lazy" src={adobeXD} alt="adobe xd logo" />
                <span>Adobe XD</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 max-md:mt-10">
            <div className="text-sm font-medium text-neutral-500">
              Preferred Language
            </div>
            <div className="mt-2 text-base font-semibold text-ellipsis text-neutral-700">
              English
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 whitespace-nowrap max-md:mt-10">
            <div className="text-sm font-medium text-neutral-500">Type</div>
            <div className="mt-2 text-base font-semibold text-ellipsis text-neutral-700">
              Full time
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 max-md:mt-10">
            <div className="text-sm font-medium text-neutral-500">
              Years of Experience
            </div>
            <div className="mt-2 text-base font-semibold whitespace-nowrap text-ellipsis text-neutral-700">
              3+ Years of Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSkills;
