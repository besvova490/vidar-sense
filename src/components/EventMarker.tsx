import React from "react";

// helpers
import { cn } from "@/lib/utils";

// constants
import { IDetectedEvent } from "@/constants/event";

export const EventMarker = ({
  id,
  isAddedByAI,
  isApproved,
  title = "Unknown",
}: IDetectedEvent) => {
  return (
    <div className="flex items-center gap-3 group">
      <span
        onClick={() => console.log("🛑  handleClick:", id)}
        className={cn(
          "w-6 h-6 flex-shrink-0 -rotate-45 border border-black transition-all",
          isApproved ? "bg-red-300" : "bg-yellow-300",
          "group-hover:shadow-[0px_2px_5px_5px_rgba(255,255,255,0.50)]"
        )}
      />
      <div
        onClick={() => console.log("🛑  handleClick:", id)}
        className={cn(
          "flex flex-col gap-2 p-2 rounded bg-black/40 border border-black transition-all",
          "group-hover:bg-black/80"
        )}
      >
        <p className="text-white text-xs font-semibold leading-[8px]">
          {title}
        </p>
        {!!isAddedByAI && (
          <p className="text-white/80 text-[10px] font-normal leading-[7px]">
            Added by AI
          </p>
        )}
      </div>
    </div>
  );
};
