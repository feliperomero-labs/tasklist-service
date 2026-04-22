import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from '../../domain/repositories/task.repository';

@Injectable()
export class DeleteTaskUseCase {
   constructor(
    @Inject(TaskRepository)
    private readonly taskRepository: TaskRepository,
   ) {}

   async execute(taskId: string) {
    const deleted = await this.taskRepository.delete(taskId);

    if (!deleted) {
      throw new NotFoundException('Task not found');
    }

    return;
   }
}