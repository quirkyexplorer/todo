import React, { useState} from "react";
// import './App.css';

// create a list that can be added to.

export default function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [field, setField] = useState("");

    const id = React.useId();

    const handleField = (e) => {
       
        setField(e.target.value);
       console.log(field);
    };

    const handleKeyDown = (e) => {
        if(field.length > 0 && e.key === 'Enter') {
            // get input value 
             // resets the field
            setTasks([...tasks, field]); // updates task with what is currently on field.setTasks([...tasks, task]);
            setField('');
            
            
        }       
    }

    return (
        <div className="">
          <input type="text"
              id="new-todo-input"
              className="input input_lg my-8" 
              value={field} 
              onChange={handleField}    
              onKeyDown={handleKeyDown}
          />  
    
        <div className=" flex flex-col gap-4">
          <div className="text-xl font-semibold text-center">Tasks</div>
            {tasks.map( (task, i) => {
              return (
                <div className="flex gap-4">
                  <input  type="checkbox" key={task+id+i} className="w-6 h-6"/>
                  <p className="text-xl">{task}</p>
                </div>
              );
            })}
        </div>
        </div>
    );
}
