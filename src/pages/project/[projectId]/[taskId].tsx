import { useParams } from "react-router-dom"

const Task = () => {
    const { projectId, taskId } = useParams();

    return (
        <div>
            <h1>this is project {projectId}</h1>
            <p>task number is {taskId}</p>
        </div>
    )
}

export default Task
