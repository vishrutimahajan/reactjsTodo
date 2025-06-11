import { useEffect, useState } from "react";    

export default function Todolist(){
   /* const [todos,setTodos]= useState([{task: "Task 1",completed:true},{task: "Task 2",completed:false}]
)*/

function getStoredToDo()
{
    let data=localStorage.getItem("todos")
    let json=JSON.parse(data)
    if(json){
      return json  
    }
    return[]
}
     const[todos,setTodos]=useState(getStoredToDo())
useEffect(()=>
{
    localStorage.setItem("todos",JSON.stringify(todos))
},[todos]
)

function handleSubmit (event){
    event.preventDefault()
    let task=event.target.task.value
    if(!task){
        alert("Please provide a valid task")
        return
    }
       alert("New Task: "+task)
event.target.reset()
}
return(
    <div className="container my-5">
        <div className="mx-auto rounded border p-4"
        style={{width:"600px", backgroundColor:"lavenderblush"}}>
            <h2 className="text-Black text-center mb-5">
                My To Do List

            </h2>
            <form class="d-flex" onSubmit={handleSubmit}>
                <input class ="form-control me-2" placeholder="New Task" name="task"/>
                <button class="btn btn-outline-dark" type="submit">Add</button>

            </form>

            {
                todos.map((todo,index)=>{
                    return(
                        <div key={index} className="rounded mt-4 p-2 d-flex" 
                        style={{backgroundColor:todo.completed?"darkgrey":"lightgray"}}>
                            <div className="me-auto">
                                {todo.task}
                                </div>

                        </div>

                    )
                })
            }

        </div>
    </div>
);
}