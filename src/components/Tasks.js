import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggleReminder }) => {
  return (
    <>
      {tasks.map((task,index) => (
        <Task
            key={index}
          task={task}
          onDelete={onDelete}
          onToggleReminder={onToggleReminder}
          borderleft="7px solid orange"
        />
      ))}
    </>
  );
};

export default Tasks;
