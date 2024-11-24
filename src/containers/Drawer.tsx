import React from "react";

// components
import { DrawerBody } from "@/components/Drawer/DrawerBody";
import { DrawerFooter } from "@/components/Drawer/DrawerFooter";
import { DrawerHeader } from "@/components/Drawer/DrawerHeader";

// constants
import { IDetectedEvent } from "@/constants/event";

interface IDrawerProps {
  event: IDetectedEvent;
  handleCloseDrawer: () => void;
  handleRemoveEvent: (id: string) => void;
  handleConfirmEvent: (id: string) => void;
}

const Drawer = ({
  event,
  handleCloseDrawer,
  handleRemoveEvent,
  handleConfirmEvent,
}: IDrawerProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1001,
        height: "100%",
        width: "472px",
        padding: "36px",
      }}
    >
      <div
        className="bg-white h-full w-full border border-[#E9ECEF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)] rounded-lg"
        style={{ display: "grid", gridTemplateRows: "112px 1fr 88px" }}
      >
        <DrawerHeader handleCloseDrawer={handleCloseDrawer} />

        <DrawerBody />

        <DrawerFooter
          event={event}
          handleCloseDrawer={handleCloseDrawer}
          handleRemoveEvent={handleRemoveEvent}
          handleConfirmEvent={handleConfirmEvent}
        />
      </div>
    </div>
  );
};

export default Drawer;
