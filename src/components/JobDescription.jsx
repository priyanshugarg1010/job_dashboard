import React from "react";

const JobDescription = () => {
  return (
    <section className="flex flex-col font-medium px-24 pt-8 pb-10 w-full border-b border-solid border-neutral-300 leading-[26px]">
      <div className="w-full text-sm text-neutral-500 max-md:max-w-full">
        About the job
      </div>
      <div className="mt-2 w-full text-base leading-[26px] text-neutral-700 max-md:max-w-full">
        <ol className="list-decimal list-inside">
          <li>Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web applications designs & trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic related works
          </li>
        </ol>
        <div className="mt-2">
          Benefits:
          <ul className="list-disc list-inside ml-2 gap-1">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
        </div>
        <div className="mt-2">
          Schedule:
          <ul className="list-disc list-inside ml-2 mt-1">
            <li>Day shift</li>
          </ul>
        </div>
        <div className="mt-1.5">
          Supplemental pay types:
          <ul className="list-disc list-inside ml-2 gap-1">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
        </div>
        <div>Work Location: In person</div>
      </div>
    </section>
  );
};

export default JobDescription;
