import { useLocation } from "react-router-dom";
import { LuListFilter } from "react-icons/lu";
import CategoryCheckbox from "./CategoryCheckBox";

const FilterBy = () => {
    const { pathname } = useLocation();

    // Get segments from the path
    const segments = pathname.replace(/^\/|\/$/g, "").split("/");

    let label = "";
    if (segments[0] === "projects") {
        if (segments.length === 1) {
            label = "Project";
        } else if (segments.length === 2) {
            label = "Task";
        }
    }


    return (
        <div className="flex flex-col gap-5 shadow-[inset_0.5px_0_0_0_#333333] px-4 py-2">
            <div className="flex items-center gap-2">
                <LuListFilter size={25} />
                <span className="f-workSans">Filter By {label || "—"}</span>
            </div>
            <div>
                <CategoryCheckbox label="All" />
                <CategoryCheckbox label="Completed" />
                <CategoryCheckbox label="In Progress" />
                <CategoryCheckbox label="New" />
            </div>
        </div>
    );
};

export default FilterBy;
