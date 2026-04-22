import { Controller, Post, Body, Get, Delete } from '@nestjs/common';
import { CreateTaskUseCase } from '../../application/use-cases/create-task.usecase';
import { CreateTaskDto } from '../../application/dtos/create-task.dto';
import { CompleteTaskUseCase } from '../../application/use-cases/complete-task.usecase';
import { CompleteTaskDto } from '../../application/dtos/complete-task.dto';
import { ListTasksUseCase } from '../../application/use-cases/list-tasks.usecase';
import { DeleteTaskDto } from '../../application/dtos/delete-task.dto';
import { DeleteTaskUseCase } from '../../application/use-cases/delete-task.usecase';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly completeTaskUseCase: CompleteTaskUseCase,
    private readonly listTasksUseCase: ListTasksUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
  ) {}

  @Post('create-task')
  createTask(@Body() dto: CreateTaskDto) {
    return this.createTaskUseCase.execute(dto.title);
  }

  @Post('complete-task')
  completeTask(@Body() dto: CompleteTaskDto) {
    return this.completeTaskUseCase.execute(dto.taskId);
  }

  @Get('list-tasks')
  listTasks() {
    return this.listTasksUseCase.execute();
  }

  @Delete('delete-task')
  deleteTask(@Body() dto: DeleteTaskDto) {
    return this.deleteTaskUseCase.execute(dto.taskId);
  }
}