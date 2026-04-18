import { Controller, Post, Body } from '@nestjs/common';
import { CreateTaskUseCase } from '../../application/use-cases/create-task.usecase';
import { CreateTaskDto } from '../../application/dtos/create-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly createTaskUseCase: CreateTaskUseCase) {}

    @Post()
    createTask(@Body() dto: CreateTaskDto) {
        return this.createTaskUseCase.execute(dto.title);
    }
}