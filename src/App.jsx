import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";
import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Analytics } from "@vercel/analytics/react"
  
function App() {
  const [tasks, setTasks] = useState([]);

  console.log("tasks: ", tasks);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster/>
      <div id="body" className="bg-cyan-100 w-screen h-screen flex flex-col items-center  gap-10  ">
        <Navbar/>
        <CreateTask tasks={tasks} setTasks={setTasks}/>
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
