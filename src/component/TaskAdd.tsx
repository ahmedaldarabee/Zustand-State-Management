import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useTaskStore from "@/store/taskSlice";
import { useState } from "react";
import { toast } from 'sonner'
import { Task } from "./Task";

const TaskAdd = () => {
    const [title,setTitle] = useState("");
    const {tasks,addTask} = useTaskStore();

    const addTaskHandler = () => {
        if(!title){
            toast.error('Sorry, we needed to see tasks in input')
        }else{
            toast.success('Task added successfully!');
            addTask(title);
            setTitle("")
        }
    }

    return (
        <div className="w-full h-full flex-col flex items-center justify-center gap-4 mt-10">
            <div className="w-full max-w-[400px] flex items-center justify-between gap-x-4">
                <Input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="focus:!outline-sky-500 transition-all cursor-pointer" type="text" placeholder="Enter task name"/>

                <Button 
                onClick={addTaskHandler}
                className="bg-sky-600 capitalize hover:bg-sky-800 cursor-pointer transition-all duration-300">add task</Button>
            </div>
            
            <div className="taskScrollBar w-full h-full max-w-[400px] max-h-[300px] overflow-y-auto">
                {tasks && tasks.map((task) => (
                        <Task key={task.id} taskData={task}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TaskAdd