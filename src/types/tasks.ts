export type TaskType = {
    id: number,
    title: string,
    isCompleted: boolean,
}

export interface ITaskType {
    tasks: TaskType[],
    addTask: (title: string) => void,
    removeTask: (id: number) => void,
}