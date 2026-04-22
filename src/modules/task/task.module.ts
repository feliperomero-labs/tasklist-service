import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskController } from './presentation/controllers/task.controller';
import { CreateTaskUseCase } from './application/use-cases/create-task.usecase';
import { CompleteTaskUseCase } from './application/use-cases/complete-task.usecase';
import { ListTasksUseCase } from './application/use-cases/list-tasks.usecase';
import { TaskRepository } from './domain/repositories/task.repository';
import { TaskRepositoryImpl } from './infrastructure/repositories/task.repository.impl';
import { TaskModel } from './infrastructure/database/models/task.model';
import { DeleteTaskUseCase } from './application/use-cases/delete-task.usecase';

@Module({
  imports: [SequelizeModule.forFeature([TaskModel])],
  controllers: [TaskController],
  providers: [
    CreateTaskUseCase,
    CompleteTaskUseCase,
    ListTasksUseCase,
    DeleteTaskUseCase,
    {
      provide: TaskRepository,
      useClass: TaskRepositoryImpl,
    },
  ],
})
export class TaskModule {}