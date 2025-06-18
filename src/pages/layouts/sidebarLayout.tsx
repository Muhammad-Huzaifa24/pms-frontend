import Sidebar from "../../components/Sidebar"
import { Outlet } from "react-router-dom";



const SideBarLayout = () => {
 
    return (
        <div className="min-h-screen flex">
            <Sidebar />

            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    )
}

export default SideBarLayout