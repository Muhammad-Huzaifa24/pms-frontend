import { useParams, Outlet } from "react-router-dom"


const ProjectDetail = () => {
    const { projectId, taskId } = useParams();
    return (
        <>
            {!taskId && (
                <div>
                    <h1>{projectId} from project detail page</h1>
                </div>
            )}
            <Outlet />
        </>
    )
}

export default ProjectDetail
