import React from "react";
import Links from "./links";
import TeamSwitcher from "./team-switcher";
import Search from "./search";
import Avatar from "./avatar";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-12">
        <TeamSwitcher />
        <Links />
      </div>
      <div className="flex items-center gap-12">
        <Search />
      </div>
      <Avatar/>
    </nav>
  );
}

export default Navbar;
