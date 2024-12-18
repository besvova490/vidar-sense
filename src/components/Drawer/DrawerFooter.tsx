import React from "react";
import { Trash } from "@phosphor-icons/react";

// components
import { Button } from "../ui/button";

// helpers
import { cn } from "@/lib/utils";

// constants
import { IDetectedEvent } from "@/constants/event";

interface IDrawerFooterProps {
  event: IDetectedEvent;
  handleCloseDrawer: () => void;
  handleRemoveEvent: (id: string) => void;
  handleConfirmEvent: (id: string) => void;
}

export const DrawerFooter = ({
  event,
  handleCloseDrawer,
  handleConfirmEvent,
  handleRemoveEvent,
}: IDrawerFooterProps) => {
  const handleRemove = () => {
    handleRemoveEvent(event.id);
    handleCloseDrawer();
  };

  const handleConfirm = () => {
    handleConfirmEvent(event.id);
    handleCloseDrawer();
  };

  return (
    <div
      className={cn(
        "p-6 flex flex-col md:flex-row items-center gap-4",
        event.isApproved ? "justify-center" : "justify-between"
      )}
    >
      <Button variant="destructive" onClick={handleRemove} className="w-full">
        <Trash
          color="#FFFFFF"
          style={{ height: 16, width: 16, marginRight: 8 }}
          weight="regular"
        />
        Remove Mark
      </Button>
      {!event.isApproved && (
        <Button onClick={handleConfirm} className="w-full">Save & Approve Mark</Button>
      )}
    </div>
  );
};
