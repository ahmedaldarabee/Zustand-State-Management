import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react";

const TaskAdd = () => {
    const [title,setTitle] = useState("");

    const addTaskHandler = () => {

    }

    return (
        <div className="w-full flex justify-center gap-4 mt-10">
            <div className="max-w-3xl flex gap-x-4">
                <Input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="focus:!outline-sky-500 transition-all cursor-pointer" type="text" placeholder="Enter task name"/>

                <Button 
                onClick={addTaskHandler}
                className="bg-sky-600 capitalize hover:bg-sky-800 cursor-pointer transition-all duration-300">add task</Button>
            </div>
        </div>
    )
}

export default TaskAdd