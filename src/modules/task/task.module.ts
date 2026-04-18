import { Module } from '@nestjs/common';
import { TaskController } from './presentation/controllers/task.controller';
import { CreateTaskUseCase } from './application/use-cases/create-task.usecase';
import { TaskRepository } from './domain/repositories/task.repository';
import { TaskRepositoryImpl } from './infrastructure/repositories/task.repository.impl';

@Module({
  controllers: [TaskController],
  providers: [
    CreateTaskUseCase,
    {
      provide: TaskRepository,
      useClass: TaskRepositoryImpl,
    },
  ],
})
export class TaskModule {}