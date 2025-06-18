
const Project = () => {

  return (
    <div className="w-full p-2">
      <div className="flex items-center justify-center gap-6  flex-wrap">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className=" flex-[1_1_300px]   hover:bg-[#181818] border border-[#363636] rounded-xl px-4 py-6"
          >
            <h2 className="text-lg font-medium mb-2 f-workSans">Project Title {index + 1}</h2>
            <p className="text-[#ababab] mb-4 f-workSans">
              This is a responsive card. Adjust your screen size to see how it behaves.
            </p>
            <button className="bg-[#4b4459] text-white cursor-pointer text-xs f-workSans px-4 py-2 rounded-full hover:bg-gray-800 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
