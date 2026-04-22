import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaskRepository } from '../../domain/repositories/task.repository';
import { Task } from '../../domain/entities/task.entity';
import { TaskModel } from '../database/models/task.model';
import { TaskMapper } from '../mappers/task.mapper';

@Injectable()
export class TaskRepositoryImpl implements TaskRepository {
  constructor(
    @InjectModel(TaskModel)
    private readonly taskModel: typeof TaskModel,
  ) {}

  async save(task: Task): Promise<Task> {
    const data = TaskMapper.toModel(task);

    await this.taskModel.upsert(data);

    return task;
  }

  async findById(id: string): Promise<Task | null> {
    const model = await this.taskModel.findByPk(id);

    if (!model) return null;

    return TaskMapper.toDomain(model);
  }

  async list(): Promise<Task[]> {
    const models = await this.taskModel.findAll({
      order: [['createdAt', 'DESC']],
    });

    return models.map((model) => TaskMapper.toDomain(model));
  }

  async delete(id: string): Promise<boolean> {
    const deletedRows = await this.taskModel.destroy({ where: { id } });

    return deletedRows > 0;
  }
}