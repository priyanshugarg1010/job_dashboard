import React from "react";
import SidePanel from "../components/SidePanel";
import JobTitle from "../components/JobTitle";
import JobDescription from "../components/JobDescription";
import JobSkills from "../components/JobSkills";
import CompanyInfo from "../components/CompanyInfo";

const JobDashboard = () => {
  return (
    <div className="flex relative flex-col items-start text-xl font-medium min-h-screen text-zinc-500 max-md:pr-5">
      <div className="flex relative flex-col justify-center items-start px-16 min-w-full bg-white border border-t-1 border-b-2 border-x-0 border-solid border-neutral-200">
        <div className="flex gap-5 justify-between ml-10 w-[590px]">
          <div className="font-semibold text-primary relative py-5 flex justify-center">
            <span>Job preview</span>
            <div className="bg-primary absolute bottom-0 h-0.5 w-16"></div>
          </div>
          <div className="py-5">
            <span>Applicants</span>
          </div>
          <div className="py-5">
            <span>Match</span>
          </div>
          <div className="py-5">
            <span>Messages</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex-1 flex flex-col">
          <JobTitle />
          <JobSkills />
          <JobDescription />
          <CompanyInfo />
        </div>
        <SidePanel />
      </div>
    </div>
  );
};

export default JobDashboard;
