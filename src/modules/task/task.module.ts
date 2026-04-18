import { Module } from '@nestjs/common';
import { TaskController } from './presentation/controllers/task.controller';
import { CreateTaskUseCase } from './application/use-cases/create-task.usecase';
import { CompleteTaskUseCase } from './application/use-cases/complete-task.usecase';
import { TaskRepository } from './domain/repositories/task.repository';
import { TaskRepositoryImpl } from './infrastructure/repositories/task.repository.impl';

@Module({
  controllers: [TaskController],
  providers: [
    CreateTaskUseCase,
    CompleteTaskUseCase,
    {
      provide: TaskRepository,
      useClass: TaskRepositoryImpl,
    },
  ],
})
export class TaskModule {}