import React from "react";
import { getTaskCountByStaty } from "../../../services/task";
import { Charts as ChartsComp } from "./charts";

export default  function Charts( {data}:{data:any}) {
 
  return (
    <div>
      <ChartsComp data={data}  />
    </div>
  );
}
