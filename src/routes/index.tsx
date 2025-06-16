import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../pages/layout';
import Dashboard from '../pages';
import Project from '../pages/project';
import Notifications from '../pages/Notification';
import NotFound from '../pages/NotFound';
import ProjectDetail from '../pages/project/[projectId]';
import Task from '../pages/project/[projectId]/[taskId]';
import Settings from "../pages/Settings"


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/projects" element={<Project />} />
                    <Route path="/project/:projectId" element={<ProjectDetail />} >
                        <Route path=":taskId" element={<Task />} />
                    </Route>
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/settings' element={<Settings />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;