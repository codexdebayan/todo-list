import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo", // status may be variable
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.length < 3)
      return toast.error("A task must have more than 3 characters");

    if (task.name.length > 50)
        return toast.error("A task name can't be more than 50 characters");

    // Generate UUID here
    const taskId = uuidv4();

    setTasks((prev) => {
      const list = [...prev, { ...task, id: taskId }];

      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });

    toast.success("Task Created!");

    // Reset task state
    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-10 w-64 px-1"
        value={task.name}
        onChange={(e) =>
          setTask({ ...task, name: e.target.value })
        }
        key={task.id} // Add key for proper re-rendering
      />
      <button className="bg-cyan-500 rounded-md px-4 h-10 text-white">
        Create
      </button>
    </form>
  );
};

export default CreateTask;
