import type { TaskType, ProjectType } from "../types";

// Create 10 Task objects
const tasks: TaskType[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Task ${index + 1}`,
    description: `Description for Task ${index + 1}`,
    status: index % 2 === 0, // Alternate between true and false
    deadLine: new Date(`2025-07-${String(index + 10).padStart(2, '0')}`),
}));

// Create 10 Project objects using the same 10 tasks
const projects: ProjectType[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Project ${index + 1}`,
    description: `Description for Project ${index + 1}`,
    status: index % 2 === 0, // Alternate between true and false
    tasks: tasks,
    deadLine: new Date(`2025-08-${String(index + 10).padStart(2, '0')}`),
}));

export { tasks, projects };
