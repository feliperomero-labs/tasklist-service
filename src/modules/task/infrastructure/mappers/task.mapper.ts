import { Task } from "../../domain/entities/task.entity";
import { TaskModel } from "../database/models/task.model";

export class TaskMapper {
    static toDomain(model: TaskModel): Task {
    return new Task(model.id, model.title, model.isCompleted, model.createdAt);
    }

    static toModel(entity: Task): TaskModel {
        return {
            id: entity.getId(),
            title: entity.getTitle(),
            isCompleted: entity.isCompleted(),
            createdAt: new Date(),
        };
    }
}