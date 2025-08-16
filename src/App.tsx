import TaskAdd from "./component/TaskAdd"
import { Toaster } from 'sonner'

function App() {

  return (
    <div className="container mx-auto w-full min-h-screen">
      <Toaster expand={true} position="bottom-right"/>
      <TaskAdd />
    </div>
  )
}

export default App