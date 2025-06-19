import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../data"
import type { ProjectType } from "../../types";


const Project = () => {
  const navigate = useNavigate();

  const [projectList, setProjectList] = useState<ProjectType[]>([]);

  const handleProjectClick = (id: number) => {
    navigate(`/projects/${id}`);
  }

  useEffect(() => {
    setProjectList(projects);
  }, [])

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {projectList?.map((project: ProjectType, index) => {
          const deadline = new Date(project.deadLine).toDateString();

          return (
            <div
              key={index}
              className="flex-[1_1_300px] flex gap-7 flex-col bg-[#121212] hover:bg-[#252525] border border-[#363636] rounded-2xl px-6 py-6 shadow-lg transition"
            >
              <div className=" flex justify-between flex-wrap gap-3">
                <span className="text-lg font-semibold f-workSans text-white">{project?.title}</span>
                <span
                  className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium f-workSans ${project?.status ? "bg-green-600/20 text-green-400" : "bg-red-600/20 text-red-400"
                    }`}
                >
                  {project?.status ? "Completed" : "Pending"}
                </span>
              </div>
              <p className="text-[#ababab]  f-workSans text-base">
                {project?.description}
              </p>

              {/* Badges Section */}
              <div className="flex gap-2  flex-wrap justify-between">
                <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-gray-600/20 text-gray-300 font-medium f-workSans">
                  {/* <FaCalendarAlt size={14} /> */}
                  {deadline}
                </span>
              </div>

              <button
                className="border border-[#4b4459] text-white cursor-pointer text-xs f-workSans w-full px-4 py-2 rounded-full hover:bg-gray-800 transition"
                onClick={() => (handleProjectClick(project?.id))}
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
