"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { useMap } from "react-leaflet";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";

// elements
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// helpers
import { cn } from "@/lib/utils";
import { MagnifyingGlass } from "@phosphor-icons/react";

export function LocationAutocomplete() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const map = useMap();

  const { placePredictions, getPlacePredictions } = useGoogle({
    apiKey: "AIzaSyBsKQIyMTgUHzQ0_UsFx3z5x4EpweX3bFw",
  });

  const locations = placePredictions
    .map((prediction) => ({
      label: prediction.structured_formatting.main_text,
      value: prediction.structured_formatting.main_text,
    }))
    .filter(
      (location, index, self) =>
        index === self.findIndex((t) => t.value === location.value)
    );

  const handleSelect = async (value: string) => {
    setValue(value);
    setOpen(false);

    const location = placePredictions.find(
      (location) => location.structured_formatting.main_text === value
    );

    if (location) {
      const geocoder = new google.maps.Geocoder();
      const result = await geocoder.geocode({ placeId: location.place_id });
      if (result.results[0]?.geometry?.location) {
        const { lat, lng } = result.results[0].geometry.location;
        map.setView([lat(), lng()], 16);
      }
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          role="combobox"
          aria-expanded={open}
          className="h-12 w-12 rounded-lg border border-[#E9ECEF] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]"
        >
          <MagnifyingGlass
            color="#343330"
            style={{ height: 32, width: 32 }}
            weight="regular"
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-[200px] p-0 z-[1001]"
        side="right"
        align="start"
      >
        <Command>
          <CommandInput
            placeholder="Search location..."
            onValueChange={(currentValue) =>
              getPlacePredictions({ input: currentValue })
            }
          />
          <CommandList>
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem
                  key={location.value}
                  value={location.value}
                  onSelect={handleSelect}
                >
                  {location.label}

                  <Check
                    className={cn(
                      "ml-auto",
                      value === location.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
