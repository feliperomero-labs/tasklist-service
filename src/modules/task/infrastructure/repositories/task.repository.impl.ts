import { TaskRepository } from '../../domain/repositories/task.repository';
import { Task } from '../../domain/entities/task.entity';

export class TaskRepositoryImpl implements TaskRepository {
    private tasks: Task[] = [];

    async save(task: Task): Promise<Task> {
        this.tasks.push(task);
        return task;
    }

    async findById(id: string): Promise<Task | null> {
        return this.tasks.find(t => t.getId() === id) || null;
    }
}