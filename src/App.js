import { useState } from "react";
import { AddTask } from "./components/AddTask";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";

function App() {
  const [showAddTaskForm, setAddTaskForm] = useState(false);

  const [tasks, setTasks] = useState([]);

  // TODO: Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // TODO: Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // TODO: Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header
          onAdd={() => setAddTaskForm(!showAddTaskForm)}
          btnToggleForm={showAddTaskForm}
        />
        {showAddTaskForm && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            onDelete={deleteTask}
            onToggle={toggleReminder}
            className="tasks"
            tasks={tasks}
          />
        ) : (
          "No tasks available"
        )}
      </div>
    </div>
  );
}

export default App;
