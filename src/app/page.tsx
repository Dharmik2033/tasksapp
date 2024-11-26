import Navbar from "../components/navbar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../components/ui/resizable";
import Form from "@/components/form";
import { CardDescription, CardTitle } from "@/components/ui/card";
import TaskList from "@/components/task-list";

import { getTaskCountByStaty } from "../../services/task";
import { Charts } from "@/components/charts/charts";

export default async function Home() {
  const count = await getTaskCountByStaty();
  const data = [
    { status: "starting", count: count.starting, fill: "#ef4444" },
    { status: "progress", count: count.progress, fill: "#f97316" },
    { status: "done", count: count.done, fill: "#22c55e" },
  ];
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <ResizablePanelGroup className="h-full border" direction="horizontal">
        <ResizablePanel>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel>
              <div className=" h-full flex-col justify-center p-6 space-y-4">
                <div className="space-y-2">
                  <CardTitle>Create A New Task</CardTitle>
                  <CardDescription>What do you to do Today</CardDescription>
                </div>
                <Form />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="min-h-[30vh] h-full">
              Chart
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="max-w[75vw] min-w-[30vw]">
          <div className="h-full overflow-y-auto p-6">{TaskList()}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
