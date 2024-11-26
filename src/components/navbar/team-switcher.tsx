import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import { CaretSortIcon, PlusCircledIcon } from "@radix-ui/react-icons";

import { buttonVariants } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Command, CommandItem } from "../ui/command";
import {
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandSeparator,
} from "../ui/command";

const group = [
  {
    label: "personal Account",
    teams: [{ label: "Evandro V." }],
  },
  {
    label: "Teams",
    teams: [{ label: "Evandro V1." }, { label: "Evandro V3." }],
  },
];

export default function TeamSwitcher() {
  return (
    <Popover>
      <PopoverTrigger
        className={buttonVariants({
          variant: "default",
          className: "w-[200px] justify-between",
        })}
      >
        <Avatar className="mr-2 h-6 w-6">
          <AvatarImage
            src="https://avatar.vercel.sh/Evandro.png"
            alt="Avatar"
            className=""
          />
          <AvatarFallback>EV</AvatarFallback>
        </Avatar>
        Evandro Viegas
        <CaretSortIcon />
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Command>
          <CommandInput placeholder="Search Team..." />
          <CommandList>
            <CommandEmpty>No team found.</CommandEmpty>
            {group.map((e) => (
              <CommandGroup key={e.label} heading={e.label}>
                {e.teams.map((item) => (
                  <CommandItem key={item.label} className="text-sm">
                    <Avatar className="mr-2 h-5 w-5">
                      <AvatarImage
                        src={`https://avatar.vercel.sh/${item.label}.png`}
                      />
                      <AvatarFallback className="uppercase">
                        {item.label}
                      </AvatarFallback>
                    </Avatar>
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem>
                <PlusCircledIcon className="mr-2 h-5" />
                Create Team
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
