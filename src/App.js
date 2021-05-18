import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState ,useEffect} from "react";
import "./index.css";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const getTasks=async()=>{
      const taskFromServer=await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()


  
  }, [])

  const fetchTasks=async ()=>{
      const response=await fetch('http://localhost:5000/tasks')
      const data=await response.json();

      return data;
    }


  //add button Toggle

  //add task

  // npm run server 

  const addTask = async (task) => {

    const res=await fetch('http://localhost:5000/tasks',
    {
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(task)
    })

    const data=await res.json()

    setTasks([...tasks,data])


    // const id = Math.floor(Math.random() * 100000) + 1;
    // const myTask = { id, ...task };
    // setTasks([...tasks, myTask]);

  };

  // delete

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })

    const items = tasks.filter((task) => task.id !== id);
    setTasks(items);
  };

  //toggle

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div>
      <Header
        showAdd={showAddTask}
        onClick={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggleReminder={toggleReminder}
        />
      ) : (
        "No task left to show"
      )}
    </div>
  );
}

export default App;
