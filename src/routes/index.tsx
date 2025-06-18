import { Routes, Route } from 'react-router-dom';

import SideBarLayout from '../pages/layouts/sidebarLayout';
import FilterLayout from "../pages/layouts/filterByLayout"
import Dashboard from '../pages';
import Project from '../pages/project';
import Notifications from '../pages/Notification';
import NotFound from '../pages/NotFound';
import ProjectDetail from '../pages/project/[projectId]';
import Task from '../pages/project/[projectId]/[taskId]';
import Settings from "../pages/Settings"
import { usePageTitle } from "../hooks/usePageTitle"


function AppRoutes() {
    usePageTitle();
    return (
        <Routes>
            <Route element={<SideBarLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path='/notifications' element={<Notifications />} />
                <Route path='/settings' element={<Settings />} />
            </Route>
            <Route element={<FilterLayout />}>
                <Route path="/projects" element={<Project />} />
                <Route path="/projects/:projectId" element={<ProjectDetail />} >
                    <Route path=":taskId" element={<Task />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
export default AppRoutes;