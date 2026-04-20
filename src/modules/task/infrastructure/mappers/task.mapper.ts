import { Task } from '../../domain/entities/task.entity';
import { TaskModel } from '../database/models/task.model';

export class TaskMapper {
  static toDomain(model: TaskModel): Task {
    return new Task(
      model.id,
      model.title,
      model.completed,
      model.createdAt,
    );
  }

  static toModel(entity: Task) {
    return {
      id: entity.getId(),
      title: entity.getTitle(),
      completed: entity.isCompleted(),
      createdAt: new Date(),
    };
  }
}