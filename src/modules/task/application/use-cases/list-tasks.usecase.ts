import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../../domain/repositories/task.repository';

@Injectable()
export class ListTasksUseCase {
	constructor(
		@Inject(TaskRepository)
		private readonly taskRepository: TaskRepository,
	) {}

	async execute() {
		return this.taskRepository.list();
	}
}
