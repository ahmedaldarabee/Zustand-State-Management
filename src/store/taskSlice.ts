import { create } from 'zustand'

type TaskType = {
    id: number,
    title: string,
    completed: boolean,
}

interface ITaskType {
    tasks: TaskType[],
}

// this section that be as initial case to the state
const useTaskStore = create<ITaskType>()((set) => ({
    tasks: [],
}));