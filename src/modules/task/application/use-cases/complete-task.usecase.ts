import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../../domain/repositories/task.repository';

@Injectable()
export class CompleteTaskUseCase {
  constructor(
    @Inject(TaskRepository)
    private readonly taskRepository: TaskRepository,
  ) {}

  async execute(taskId: string) {
    const task = await this.taskRepository.findById(taskId);

    if (!task) {
      throw new Error('Task not found');
    }

    task.complete();

    return this.taskRepository.save(task);
  }
}