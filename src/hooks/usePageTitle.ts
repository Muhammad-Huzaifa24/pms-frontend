import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePageTitle() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === "/notifications") {
            document.title = "Notifications";
        } else if (path === "/projects") {
            document.title = "Projects";
        }
        else if (path === "/settings") {
            document.title = "Settings";
        } else {
            document.title = "Dashboard";
        }
    }, [location]);
}

export { usePageTitle }
