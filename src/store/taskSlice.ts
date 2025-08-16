import type { ITaskType } from '@/types/tasks';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useTaskStore = create<ITaskType>()(
    persist(
        // (set) that used to update state within useTaskStore
        (set) => ({
            tasks: [],
            // IS Be like reducers in redux when i handle synchronous operation? YES
            // And when i work Asynchronous in redux we set it in extraReducer, here how can be handle this section? 
            // Both Sync and Async are handling in same way!
    
            addTask: (title) => {
                set((state) => ({
                    tasks: [ ...state.tasks, { id: Date.now(), title, isCompleted: false,},],
                }))
            },

            removeTask: (id) => {
                set((state) => ({
                    tasks: state.tasks.filter((task) => task.id !== id)
                }))
            },
        }),
        {
        name: 'task-storage',
        }
    )
);

export default useTaskStore;
