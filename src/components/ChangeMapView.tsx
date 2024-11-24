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
  { label: "Open Street Map", value: "openstreetmap" },
  { label: "Satellite", value: "satellite" },
  { label: "Dark", value: "dark" },
  { label: "Open Topo Map", value: "opentopomap" },
  { label: "Topographic", value: "topographic" },
  { label: "Street", value: "street" },
] as const;

export const ChangeMapView = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const view = searchParams.get("view");

  const handleSelect = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", value);
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
        side="right"
        align="start"
        className="w-[200px] z-[1001] -mr-3"
        sideOffset={5}
      >
        {mapOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            className={`cursor-pointer ${
              view === option.value ? "bg-accent" : ""
            }`}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
