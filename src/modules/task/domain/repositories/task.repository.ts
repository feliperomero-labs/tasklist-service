import { Task } from "../entities/task.entity";

export abstract class TaskRepository {
  abstract save(task: Task): Promise<Task>;
  abstract findById(id: string): Promise<Task | null>;
}