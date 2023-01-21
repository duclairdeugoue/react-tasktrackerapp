import { useState, useEffect } from "react";
import { AddTask } from "./components/AddTask";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";

const API_URI = "http://localhost:8000";

function App() {
  const [showAddTaskForm, setAddTaskForm] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getAllTask = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getAllTask();
  }, []);

  // TODO: Fetch Task from json-server
  const fetchTasks = async () => {
    const res = await fetch(`${API_URI}/tasks`);
    const data = await res.json();

    return data;
  };

  // TODO: Add task
  const addTask = async (task) => {
    const res = await fetch(`${API_URI}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    
    const data = res.json();

    setTasks([...tasks, data]);


    // const id = Math.floor(Math.random() * 10000) + 1;

    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // TODO: Delete task
  const deleteTask = async (id) => {
    await fetch(`${API_URI}/tasks/${id}`, {
      method: "DELETE",
    });

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
