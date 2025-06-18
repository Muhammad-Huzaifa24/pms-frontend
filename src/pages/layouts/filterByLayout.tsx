import Sidebar from "../../components/Sidebar"
import FilterBy from "../../components/FilterBy";
import { Outlet } from "react-router-dom";



const FilterLayout = () => {

    return (
        <div className="h-screen flex overflow-hidden">
            <Sidebar />

            <div className="flex p-6 flex-1 gap-4 overflow-hidden">
                <div className="flex-1  overflow-y-auto scroll-hidden">
                    <Outlet />
                </div>

                <div className="w-[250px] md:block hidden">
                    <FilterBy />
                </div>
            </div>
        </div>
    )
}

export default FilterLayout