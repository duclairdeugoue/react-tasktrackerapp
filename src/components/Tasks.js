import { Task } from "./Task";

export const Tasks = ({ tasks, onDelete, onToggle }) => {
  // TODO: function to delete a task by id

  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};
