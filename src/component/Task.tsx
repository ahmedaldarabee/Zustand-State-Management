import { Checkbox } from "@/components/ui/checkbox"
import type { TaskType } from "@/types/tasks"
import { useState } from "react"
import { toast } from "sonner"

interface TaskTypeProps {
    taskData: TaskType
}

export const Task = ({taskData}: TaskTypeProps) => {
    const [isChecked, setIsChecked] = useState(taskData.isCompleted || false);

    const handleCompletionTask = (checked: boolean) => {
        setIsChecked(checked);
        if(checked){
            toast.success(`${taskData.title} is completed!`);
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-center px-2">
            <div className="my-2 border border-sky-600 py-2 px-4 cursor-pointer rounded-md flex items-center justify-between w-full max-w-[400px] h-full">
                <h2 className={`max-w-[300px] overflow-auto capitalize font-semibold ${isChecked ? 'line-through text-red-600':'' }`}>
                    {taskData.title}
                </h2>
                <Checkbox 
                    onCheckedChange={handleCompletionTask}
                    checked={isChecked}
                />
            </div>
        </div>
    )
}