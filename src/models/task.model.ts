import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  date: {
    type: String, // String rakha valo jodi tumi specific format chao
    default: () => new Date().toLocaleDateString('en-GB'), // 14/04/2026 format
  },
  time: {
    type: String,
    default: () => new Date().toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    }),
  },
  task: {
    type: String,
    required: true,
  }
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;