import React from "react";

interface IDrawerProps {
  handleCloseDrawer: () => void;
}

export const DrawerHeader = ({ handleCloseDrawer }: IDrawerProps) => {
  return (
    <div className="p-6 border-b border-[#E9ECEF]" onClick={handleCloseDrawer}>
      DrawerHeader
    </div>
  );
};
