import React,{useState} from 'react'
import './App.css';

function App() {
  const [tasks,setTasks]=useState([
    {name:"task1",isDone:false,priority:"Low Priority"},
    {name:"task2",isDone:true,priority:"Low Priority"},
    {name:"task3",isDone:false,priority:"High Priority"}
  ])

  const taskNodes=tasks.map((task,index)=>{
    return <li someid={index} key={index}>{task.name} - - {task.isDone ? <span>Task is done</span> : <span>Task is not done</span>}- - {task.priority}  </li>
    
    })
  const [newTask,setNewTask]=useState("")
  const [addPriority,setPriority]=useState("false")
  
  const handlePriority=(()=>{
    setPriority(!addPriority)
})

  const handleNewTaskInput=((event)=>{
  setNewTask(event.target.value)
  console.log(event.target)
  })

const saveNewTask=((event)=>{
  event.preventDefault();
  const tasksCopy=[...tasks];
  console.log(addPriority)
  addPriority ? tasksCopy.push({name:newTask,isDone:false,priority:"High Priority"}) : tasksCopy.push({name:newTask,isDone:false, priority:"Low Priority"})
  setTasks(tasksCopy)

})

  return (
    <div className="App">
      <h1>start</h1>

      <form onSubmit={saveNewTask}>
      <label htmlFor="new_task">Add new task</label>
        <input type="text" id="new_task" value={newTask} onChange={handleNewTaskInput} />
        <label htmlFor="priority">Low priority?</label> 
        <input id = "priority"type="checkbox" value={addPriority} onChange={handlePriority}/>
        <input type="submit" value="save task in todo list"/>
      </form>
         <p>{addPriority?"True":"False"}</p>
      <ul>

      {taskNodes}

      </ul>
    </div>
  );
}

export default App;

