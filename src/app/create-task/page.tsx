"use client";
import { useRouter } from "next/navigation";
import { createTask } from "../server";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="m-2">
      <div>
        <button
          onClick={() => router.push('/show-tasks')}
          className="
        mb-2 top-6 left-6 
        flex items-center gap-2 
        px-3 py-2 
        text-slate-400 hover:text-white 
        bg-slate-900/50 hover:bg-slate-800 
        border border-slate-800 hover:border-slate-700 
        rounded-lg transition-all duration-200 
        group backdrop-blur-sm shadow-sm
      ">
          {/* Back Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 transition-transform group-hover:-translate-x-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <span className="text-sm font-medium">Back</span>
        </button>
      </div>
      <form className="max-w-md mx-auto p-6 bg-slate-900 rounded-xl shadow-2xl border border-slate-800 space-y-6" action={createTask}>
        {/* Header */}
        <div className="text-xl font-bold text-white border-b border-slate-800 pb-3">
          Create Task
        </div>

        {/* Input Group */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="listName"
            className="text-sm font-medium text-slate-400 ml-1">
            Task Name
          </label>
          <input
            type="text"
            id="task"
            name="task"
            placeholder="e.g. Buy groceries"
            className="px-4 py-2.5 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-inner"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-indigo-900/20 transition-all active:scale-[0.98]">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
