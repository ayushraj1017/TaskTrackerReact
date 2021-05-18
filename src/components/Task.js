import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggleReminder, borderleft }) => {
  return (
    <div
      onDoubleClick={() => onToggleReminder(task.id)}
      className={`task ${task.reminder ? "reminder" : ""} `}
    >
      <div className="flex justify-between">
        <h1>{task.firstName}</h1>

        <FaTimes
          onClick={() => onDelete(task.id)}
          className="text-red-500 cursor-pointer"
        />
      </div>
      <div className="flex">
        <p>{task.lastName}</p>
      </div>
    </div>
  );
};

export default Task;
