import { Task } from '../../domain/entities/task.entity';
import { TaskRepository } from '../../domain/repositories/task.repository';
import { randomUUID } from 'crypto';

export class CreateTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) {}

        async execute(title: string) {
            const task = new Task(randomUUID(),title,false,new Date());

            return this.taskRepository.save(task);
        }  
}