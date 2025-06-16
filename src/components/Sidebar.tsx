import { useNavigate } from "react-router-dom"

import { MenuItem } from "./MenuItem";

import { MdDashboardCustomize } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";


const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route)
  }

  return (
    <>
      <div className="border-r border-r-[#333333]  w-[300px]  md:flex hidden flex-col py-2 pl-8 pr-6">
        <div
          onClick={() => handleNavigation('/')}
          className="flex items-center  p-3 gap-3 cursor-pointer mb-4">
          <img
            src="/planning.png"
            alt="app-logo"
            className="hover:bg-[#2e2e2e] rounded-full h-10 w-10"
          />
          <span className="f-rockSalt font-bold text-xl">PMS</span>
        </div>
        {/* greateWibes */}
        <div className="flex-grow">
          <MenuItem
            menuTitle="Dashboard"
            menuIcon={<MdDashboardCustomize size={25} />}
            onClick={() => { handleNavigation('/') }}
          />
          <MenuItem
            menuTitle="Projects"
            menuIcon={<FaProjectDiagram size={25} />}
            onClick={() => { handleNavigation("/projects") }}

          />
          <MenuItem
            menuTitle="Notifications"
            menuIcon={<IoNotificationsOutline size={25} />}
            onClick={() => { handleNavigation('/notifications') }}
          />
          <MenuItem
            menuTitle="Settings"
            menuIcon={<IoSettingsOutline size={25} />}
            onClick={() => { handleNavigation('/settings') }}
          />
          <div
            onClick={() => { alert('Create a project') }}
            className="bg-[#ededed] p-4 text-base text-[#333333] rounded-full mt-4 flex items-center justify-center f-inter font-bold cursor-pointer hover:bg-gray-300"  >Create Project</div>
        </div>
        <div className="flex gap-5 p-3 items-center hover:bg-[#2e2e2e] rounded-full cursor-pointer"
          onClick={() => { alert('user account settings') }}>
          <img
            src="/planning.png"
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover "
          />
          <div className="flex flex-col gap-1">
            <span className="text-xs f-workSans font-bold">username</span>
            <span className="text-xs font-medium f-workSans">@useremail</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
