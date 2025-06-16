import type { JSX } from "react";


interface MenuItemProps {
    menuTitle: string;
    menuIcon: JSX.Element;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}


const MenuItem = ({ menuIcon, menuTitle, onClick }: MenuItemProps) => {
    return (
        <div
            onClick={onClick}
            className="px-5 py-4 w-auto hover:bg-[#2e2e2e] rounded-full inline-flex items-center gap-3  cursor-pointer">
            {menuIcon}
            <span className="text-lg f-workSans">{menuTitle}</span>
        </div>
    )
}

export { MenuItem }