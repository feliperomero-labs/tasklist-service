import { TaskRepository } from '../../domain/repositories/task.repository';
import { Task } from '../../domain/entities/task.entity';
import { TaskModel } from '../database/models/task.model';
import { TaskMapper } from '../mappers/task.mapper';

export class TaskRepositoryImpl implements TaskRepository {

  async save(task: Task): Promise<Task> {
    const data = TaskMapper.toModel(task);

    await TaskModel.upsert(data);

    return task;
  }

  async findById(id: string): Promise<Task | null> {
    const model = await TaskModel.findByPk(id);

    if (!model) return null;

    return TaskMapper.toDomain(model);
  }
}