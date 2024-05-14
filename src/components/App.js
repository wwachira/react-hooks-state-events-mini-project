//{useState} hook init `tasks` state
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

//event handlers are 2: 1)`handleDeleteTask` deletes a task from the list, filters out and updates state.
function App() {
  const [tasks, setTask] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDeleteTask(deletedTask) {
    const newTaskList = tasks.filter((task) => {
      return task.text !== deletedTask;
    });
    setTask(newTaskList);
  }

  // 2)`handleAddTask`  adds new task, and updates.
  function handleAddTask(newTask) {
    if (newTask.text.trim() !== "" && newTask.category !== "All") {
      setTask([...tasks, newTask]);
    }
  }
//`filteredTasks` selectscategory, all tasks display of the particular category.
  const filteredTasks = tasks.filter((task) => {
    if (category === "All") {
      return true;

    } else {
      return task.category === category;
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        Scategory={category}
        onCategoryClick={setCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;