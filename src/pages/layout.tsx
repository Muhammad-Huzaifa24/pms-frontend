import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom";



const Layout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="splash-screen">
                <div className="circle-loader">
                    <div className="split left" />
                    <div className="split right" />
                    <div className="logo-text">Your Logo</div>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen flex">
            <Sidebar />

            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout