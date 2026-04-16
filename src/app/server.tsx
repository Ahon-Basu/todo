"use server";
import Task from "@/models/task.model";
import { redirect } from "next/navigation";

export async function getTasks() {
  try {
    const tasks = await Task.find().sort({ _id: -1 }).lean();
    return JSON.parse(JSON.stringify(tasks));
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

export async function createTask(data: FormData) {
  const task = data.get("task") as string;
  if (!task) {
    throw new Error("Task is required");
  }
  await Task.create({ task });
    redirect("/show-tasks");
}

export async function deleteTask(id: string) {
  try {
    await Task.findByIdAndDelete(id);
    redirect("/show-tasks");
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}
