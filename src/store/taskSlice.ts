import type { ITaskType } from '@/types/tasks';
import { create } from 'zustand'

// this section that be as initial case to the state
const useTaskStore = create<ITaskType>()((set) => ({
    tasks: [],
    
    // IS Be like reducers in redux when i handle synchronous operation? YES
    // And when i work Asynchronous in redux we set it in extraReducer, here how can be handle this section? 
        // Both Sync and Async are handling in same way!
    
    addTask: (title) => {
        set((state) => {
            return {
                // [ separate operator ] ...state.tasks that update data without lose last data,
                //  like arr = [1,2,3] , after: arr[...arr,4] it will add 4 to be [1,2,3,4] without lose last data [1,2,3], because this is a update to data! and data maybe broken!

                tasks: [...state.tasks,{
                    id: Date.now(),
                    title,
                    isCompleted: false
                }]
            }
        })
    }
}));

export default useTaskStore