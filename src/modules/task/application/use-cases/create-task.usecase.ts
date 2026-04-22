import { Inject, Injectable } from '@nestjs/common';
import { Task } from '../../domain/entities/task.entity';
import { TaskRepository } from '../../domain/repositories/task.repository';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateTaskUseCase {
    constructor(
        @Inject(TaskRepository)
        private readonly taskRepository: TaskRepository,
    ) {}

        async execute(title: string) {
            const task = new Task(randomUUID(),title,false,new Date());

            return this.taskRepository.save(task);
        }  
}