import { useParams } from "react-router-dom";
import { tasks } from "./TaskList";
/**
 * 
 * REFERENCES
 * https://stackoverflow.com/questions/38269440/how-to-create-a-dynamic-link-to-attribute-in-react-router-2-5 
 */
export default function TaskDetail()
{
    // Fetching the task id from URL Param hook
    const {taskId} = useParams();
    console.log(tasks);
    //Getting the task from the tasks array using the taskId
    let individual_task = tasks.find((task)=>task.id === Number(taskId));
    

    if (!individual_task )
         {
                return <p>Error: Invalid task Id</p>;
         }   
   else
   {
            return(
                <div className="task-card">
                
                { individual_task? (
                    <>
                    <p>The Task details are:</p>
                    <p>Title: {individual_task.title}</p>
                    <p>Description: {individual_task.description}</p>
                    </>
                    ) :
                    <p>Task not found.</p>
                
                
                }
                    
                </div>
            );
    }
    
}