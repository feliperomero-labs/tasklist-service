import { Sequelize } from 'sequelize-typescript';
import { TaskModel } from '../models/task.model';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'tasklist',
  models: [TaskModel],
});