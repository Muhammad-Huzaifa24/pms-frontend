interface Task {
    id: number,
    title: string,
    description: string,
    status: boolean,
    deadLine: Date,

}

interface Project {
    id: number,
    title: string,
    description: string,
    status: boolean,
    tasks: Task[],
    deadLine: Date

}

export type { Task, Project };