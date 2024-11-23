import React from "react";

interface IChangeMapLayerButtonProps {
  mapType: "default" | "satellite";
  setMapType: (value: React.SetStateAction<"default" | "satellite">) => void;
}

export const ChangeMapLayerButton = ({
  mapType,
  setMapType,
}: IChangeMapLayerButtonProps) => {
  const handleClick = () => {
    setMapType((prev) => (prev === "default" ? "satellite" : "default"));
  };

  return (
    <button
      onClick={handleClick}
      className="
          m-2 
          px-4 
          py-2 
          bg-blue-500 
          hover:bg-blue-600 
          text-white 
          rounded-md 
          shadow-sm 
          transition-colors 
          duration-200 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-400 
          focus:ring-opacity-50
        "
    >
      Toggle {mapType === "default" ? "Satellite" : "Default"} View
    </button>
  );
};
