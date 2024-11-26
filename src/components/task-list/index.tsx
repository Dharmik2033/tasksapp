import React from "react";
import { CardDescription, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "../ui/table";
import { getTasks } from "../../../services/task";
import { getDtae } from "../../../utils/getDate";
import StatusBullet from "../StatusBullet";
import { TaskStatus } from "../form/schema";
import TitleCell from "./title-cell";

async function TaskList() {
  const tasks = await getTasks();
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <CardTitle>Your tasks for today</CardTitle>
        <CardDescription>Let's get everything done </CardDescription>
      </div>
      <Table className="w-full h-full">
        <TableCaption>A list of your tasks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>

            <TableHead>Title</TableHead>

            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} className="group">
              <TableCell className="font-medium">
                {getDtae(task.createAt)}
              </TableCell>
              <TableCell className="font-medium">
                <TitleCell task={task} />
              </TableCell>
              <TableCell className="capitalize flex items-center gap-1.5">
                <StatusBullet status={task.status as TaskStatus}></StatusBullet>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TaskList;
