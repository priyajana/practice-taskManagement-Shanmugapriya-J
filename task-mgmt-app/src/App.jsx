import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";

function App() {
 

  return (
    <>
      <div>
           <Router>
               <Routes>
                      {/* Setting the path to display the tasks link from TaskList component */}
                      <Route path="/" element={<TaskList />} />
                      {/* Setting the path to display individual task details from TaskDetails component taskId is dynamic*/}
                      <Route path="/tasks/:taskId" element={<TaskDetail/>} />
              </Routes>
          </Router>
      </div>
      
    </>
  )
}

export default App
