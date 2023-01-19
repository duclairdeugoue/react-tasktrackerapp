import { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task-title">Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
        />
      </div>

      <div className="form-control">
        <label htmlFor="task-datetime">Day and Time</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add Day and Time"
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="task-reminder">Reminder</label>
        <input
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        />
      </div>

      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};
