"use client"

import { Task } from "@prisma/client";
import React, { useState } from "react";
import Form from "../form";
import Model from "../ui/model";

type Props = {
  task: Task;
};

export default function TitleCell(props: Props) {
  const { task } = props;
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <span onClick={open} className="hover:underline">
        {task.title}
      </span>
      <Model title="Task Details" isOpen={isOpen} close={close}>
        <div className="mi-w-[500px]">
    <Form task={task} onSubmitOrDelete={close}/>        
     </div>

      </Model>
    </>
  );
}
