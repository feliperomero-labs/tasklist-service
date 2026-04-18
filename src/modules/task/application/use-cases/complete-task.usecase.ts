import { TaskRepository } from "../../domain/repositories/task.repository";

export class CompleteTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(taskId: string) {
    const task = await this.taskRepository.findById(taskId);

    if (!task) {
      throw new Error('Task not found');
    }

    task.complete();

    return this.taskRepository.save(task);
  }
}