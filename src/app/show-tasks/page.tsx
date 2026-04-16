"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getTasks } from "../server"; 
import { deleteTask } from "../server"; 

const Page = () => {

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this task?")) {
      try {
        await deleteTask(id);
        setTasks((prev) => prev.filter((task: any) => task._id !== id));
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };


  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchTasks() {
      try {
        const fetchedTasks = await getTasks();
        setTasks(fetchedTasks || []);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 p-4">
      <div className="max-w-md mx-auto mt-8 space-y-6" id="TaskListContainer">
        
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Your Tasks
          </h1>
          <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full border border-slate-700">
            {tasks.length} Total
          </span>
        </div>

        <div className="space-y-3">
          {loading ? (
            <p className="text-slate-500 text-center py-10">Loading tasks...</p>
          ) : tasks.length > 0 ? (
            tasks.map((task: any) => (
              <div
                key={task._id}
                className="group flex items-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-all duration-300"
              >
                <div className="flex flex-col border-r border-slate-800 pr-4 mr-4 text-xs font-mono">
                  <span className="text-indigo-400 font-semibold">
                    {task.time}
                  </span>
                  <span className="text-slate-500">
                    {task.date}
                  </span>
                </div>

                <div className="flex-1">
                  <label className="text-slate-200 font-medium group-hover:text-white transition-colors">
                    {task.task}
                  </label>
                </div>

                <button
                  onClick={() => handleDelete(task._id)}
                  className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all active:scale-90"
                  title="Delete Task"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p className="text-slate-500 text-center py-10">No tasks found. Add one!</p>
          )}
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => router.push("/create-task")}
          className="flex items-center gap-2.5 px-5 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-[0_8px_30px_rgb(79,70,229,0.3)] hover:shadow-[0_8px_30px_rgb(79,70,229,0.5)] transition-all duration-300 ease-in-out active:scale-95 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 transition-transform group-hover:rotate-90 duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="text-sm">Add Task</span>
        </button>
      </div>
    </div>
  );
};

export default Page;