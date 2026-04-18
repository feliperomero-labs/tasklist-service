import { Controller, Post, Body } from '@nestjs/common';
import { CreateTaskUseCase } from '../../application/use-cases/create-task.usecase';
import { CreateTaskDto } from '../../application/dtos/create-task.dto';
import { CompleteTaskUseCase } from '../../application/use-cases/complete-task.usecase';
import { CompleteTaskDto } from '../../application/dtos/complete-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly completeTaskUseCase: CompleteTaskUseCase,
  ) {}

  @Post('create-task')
  createTask(@Body() dto: CreateTaskDto) {
    return this.createTaskUseCase.execute(dto.title);
  }

  @Post('complete-task')
  completeTask(@Body() dto: CompleteTaskDto) {
    return this.completeTaskUseCase.execute(dto.taskId);
  }
}