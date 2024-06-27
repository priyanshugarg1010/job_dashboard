import { cn } from "../utils/util";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-[1728px] border-x-1 border-zinc-100 border",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
