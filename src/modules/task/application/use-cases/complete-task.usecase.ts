import { NotFoundException } from '@nestjs/common';
import { TaskRepository } from '../../domain/repositories/task.repository';

export class CompleteTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(taskId: string) {
    const task = await this.taskRepository.findById(taskId);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    task.complete();

    const updatedTask = await this.taskRepository.save(task);

    return {
      id: updatedTask.getId(),
      completed: updatedTask.isCompleted(),
    };
  }
}
