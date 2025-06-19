import Sidebar from "../../components/Sidebar"
import FilterBy from "../../components/FilterBy";
import { Outlet } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";





const FilterLayout = () => {

    return (
        <div className="h-screen flex overflow-hidden">
            <Sidebar />

            <div className="flex p-6 flex-1 md:gap-4 gap-6 overflow-hidden md:flex-row flex-col ">
                <div className="flex items-center justify-between md:hidden px-3">
                    <RiMenu2Fill size={20} onClick={()=>{alert('menu will open')}}/>
                    <span className=" text-center">This is mobile version</span>
                    <BsThreeDotsVertical size={20} onClick={()=>{alert('filter options will open')}}/>
                </div>
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