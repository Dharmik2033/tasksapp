import React from "react";
import  {Input}  from "../ui/input";

export default function Search() {
  return (
    <Input
      type="search"
      placeholder="Seaech "
      className="md:w-[100px] lg:w-[200px]"
    />
  );
}
