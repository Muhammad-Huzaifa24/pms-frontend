interface TaskType {
    id: number,
    title: string,
    description: string,
    status: boolean,
    deadLine: Date,

}

interface ProjectType {
    id: number,
    title: string,
    description: string,
    status: boolean,
    tasks: TaskType[],
    deadLine: Date

}

export type { TaskType, ProjectType };