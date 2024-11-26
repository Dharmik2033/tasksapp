import React from "react";
import {
  Avatar as AvatarComponent,
  AvatarImage,
  AvatarFallback,
} from "../ui/avatar";

export default function Avatar() {
  return (
    <AvatarComponent className="mr-2 h-8 w-8 ">
      <AvatarImage alt="Evandro Viegas" src={`https://avatar.vercel.sh/.png`} />
      <AvatarFallback className="uppercase"></AvatarFallback>EV
    </AvatarComponent>
  );
}
