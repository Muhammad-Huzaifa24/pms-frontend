import Sidebar from "../../components/Sidebar"
import FilterBy from "../../components/FilterBy";
import { Outlet } from "react-router-dom";



const FilterLayout = () => {

    return (
        <div className="min-h-screen flex">
            <Sidebar />

            <div className="flex p-6 flex-1 gap-4">
                <div className="flex-1">
                    <Outlet />
                </div>

                <div className="w-[200px] md:block hidden">
                    <FilterBy />
                </div>
            </div>
        </div>
    )
}

export default FilterLayout