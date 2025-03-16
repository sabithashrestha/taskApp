import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({setTasks}) => { // Component to add new tasks

    const [taskData, setTaskData] = useState({ // State to hold task details

        task: "",
        status: "todo",
        tags:[],
    })

    const checkTag = (tag) =>{ // Check if a tag is selected

        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) =>{ // Toggle tag selection

        if(taskData.tags.some(item => item === tag)){
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return {...prev, tags:filterTags}
            })
        }
        else{
            setTaskData(prev => {
                return {...prev, tags:[...prev.tags,tag]}
            })
        }
    }
    console.log(taskData.tags)

    const handleChange = (e) => { // Update task data on input change

        const {name, value} = e.target;
        setTaskData((prev) => {
            return {...prev, [name]: value};
        })
    }

    const handleSubmit = (e) => { // Handle form submission

        e.preventDefault();
        console.log(taskData)
        setTasks(prev => {
            return [...prev, taskData]
        })
        setTaskData({
            task: "",
            status: "todo",
            tags:[],
        })
    }
  return(

    <header className="app_header">
        <form onSubmit={handleSubmit}>
            <input type="text" 
                    name="task" 
                    value={taskData.task}
                    className="task_input" 
                    placeholder="Enter your task" 
                    onChange={handleChange} 
            />
            <div className="task_form_bottom_line">
                <div>
                    <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
                    <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
                    <Tag tagName="Javascript" selectTag={selectTag} selected={checkTag("Javascript")}/>
                    <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")}/>
                    
                </div>
                <div>
                    <select name="status" value={taskData.status} className="task_status" onChange={handleChange}>

                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button type="submit" className="task_submit"> + Add Task</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm
