import {
  Users,
  UserRoundCheck,
  MessageSquare,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

const SidePanel = () => {
  return (
    <div className="flex flex-col px-6 pt-8 pb-20 mx-auto min-h-screen border-l border-r border-solid shadow-md bg-zinc-50 border-neutral-200 w-[409px]">
      <div className="text-base font-medium flex justify-b etween gap-4 items-center">
        <button className="flex gap-2.5 justify-center flex-1 py-3 text-primary bg-seconddary rounded-lg border border-primary border-solid">
          <Trash2 className="size-5" />
          <span className="text-base">Delete job</span>
        </button>
        <button className="flex gap-2.5 justify-center flex-1 py-3 text-white bg-primary rounded-lg border-2 border-primary_outline border-solid">
          <Pencil className="size-5" />
          <span className="text-base">Edit job</span>
        </button>
      </div>
      <div className="flex flex-col p-3 mt-6 whitespace-nowrap rounded-md">
        <div className="flex gap-2 justify-between w-full">
          <div className="flex gap-2.5 px-2.5 py-2 text-base font-medium text-neutral-600">
            <Users />
            <div>Applicants</div>
          </div>
          <div className="my-auto text-xl px-2.5 py-2 font-semibold text-neutral-700">
            400
          </div>
        </div>
        <div className="shrink-0 mt-4 h-px bg-neutral-200" />
        <div className="flex gap-2 justify-between mt-4 w-full">
          <div className="flex gap-2.5 px-2.5 py-2 text-base font-medium text-neutral-600">
            <UserRoundCheck />
            <div>Matches</div>
          </div>
          <div className="my-auto text-xl px-2.5 py-2 font-semibold text-neutral-700">
            100
          </div>
        </div>
        <div className="shrink-0 mt-4 h-px bg-neutral-200" />
        <div className="flex gap-2 justify-between mt-4 w-full">
          <div className="flex gap-2 px-2.5 py-2 text-base font-medium text-neutral-600">
            <MessageSquare />
            <div>Messages</div>
          </div>
          <div className="my-auto text-xl px-2.5 py-2 font-semibold text-neutral-700">
            147
          </div>
        </div>
        <div className="shrink-0 mt-4 h-px bg-neutral-200" />
        <div className="flex gap-2 justify-between mt-4 w-full">
          <div className="flex gap-2.5 px-2.5 py-2 text-base font-medium text-neutral-600">
            <Eye />
            <div>Views</div>
          </div>
          <div className="my-auto text-xl px-2.5 py-2 font-semibold text-neutral-700">
            800
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
