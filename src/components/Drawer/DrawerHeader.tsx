import { IDetectedEvent } from "@/constants/event";
import { Copy, X } from "@phosphor-icons/react";
import React from "react";
import { Badge } from "../ui/badge";

interface IDrawerProps {
  event: IDetectedEvent;
  handleCloseDrawer: () => void;
}

export const DrawerHeader = ({ event, handleCloseDrawer }: IDrawerProps) => {
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(event.id);
    } catch (error) {
      console.error("Failed to copy coordinates:", error);
    }
  };

  return (
    <div className="p-6 border-b border-[#E9ECEF]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-inter text-2xl font-semibold leading-8 tracking-[-0.144px]">
            {event.title}
          </div>
          {!!event.isAddedByAI && (
            <Badge variant="secondary">Added by AI</Badge>
          )}
        </div>
        <X
          className="cursor-pointer"
          color="#EF4444"
          style={{ height: 32, width: 32 }}
          weight="regular"
          onClick={handleCloseDrawer}
        />
      </div>
      <div className="flex justify-start items-center gap-2">
        <div className="text-slate-500 font-inter text-sm font-medium leading-6">
          Object ID:
        </div>
        <div className="text-black font-inter text-base font-normal leading-6">
          {event.id}
        </div>
        <Copy
          className="cursor-pointer"
          color="#64748B"
          style={{ height: 16, width: 16 }}
          weight="regular"
          onClick={handleCopy}
        />
      </div>
    </div>
  );
};
