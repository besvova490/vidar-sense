import React from "react";

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
  return (
    <div className="p-6">
      <div onClick={handleCloseDrawer}>close</div>
      <div onClick={() => handleConfirmEvent(event.id)}>confirm</div>
      <div onClick={() => handleRemoveEvent(event.id)}>remove</div>
    </div>
  );
};
