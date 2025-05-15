import { Link } from "react-router-dom";

const tasks = [
                    {
                id: 1,
                title: "Write project proposal",
                description: "Draft a detailed proposal for the new web development project."
            },
            {
                id: 2,
                title: "Team meeting",
                description: "Attend the weekly sync-up meeting with the design and development teams."
            },
            {
                id: 3,
                title: "Code review",
                description: "Review the pull requests submitted by the frontend team for the login module."
            },
            {
                id: 4,
                title: "Update documentation",
                description: "Update the API documentation to reflect recent changes in the endpoints."
            },
            {
                id: 5,
                title: "Client feedback",
                description: "Gather and organize feedback from the client meeting for further discussion."
            }
    ];
    
export default function TaskList(){

    
    return(
        <div>
            {
                tasks.map((task,index)=> 
                    <ul>
                        <li>
                            <Link key={index} to={`/tasks/${task.id}`}>Link to : {task.title}<br/></Link>
                        </li>
                    </ul>
                    
                    )}                   
                
           
        </div>
    );
}

export{tasks}