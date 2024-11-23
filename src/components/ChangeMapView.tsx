import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Stack } from "@phosphor-icons/react";

// elements
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const mapOptions = [
  "OpenStreetMap",
  "Satellite",
  "OpenTopoMap",
  "Topographic",
  "Street",
  "Terrain",
] as const;

export const ChangeMapView = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const view = searchParams.get("view");

  const handleSelect = (option: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", option.toLowerCase());
    router.push(`?${params.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-12 w-12 rounded-lg border border-[#E9ECEF] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)] hover:bg-white">
          <Stack
            color="#343330"
            style={{ height: 32, width: 32 }}
            weight="regular"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[200px] z-[1001] -mr-3"
        sideOffset={5}
      >
        {mapOptions.map((option) => (
          <DropdownMenuItem
            key={option}
            className={`cursor-pointer ${
              view === option.toLowerCase() ? "bg-accent" : ""
            }`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
