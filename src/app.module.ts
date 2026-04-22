import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskModule } from './modules/task/task.module';
import { TaskModel } from './modules/task/infrastructure/database/models/task.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: Number(process.env.DB_PORT ?? 5432),
      username: process.env.DB_USER ?? 'postgres',
      password: process.env.DB_PASSWORD ?? 'postgres',
      database: process.env.DB_NAME ?? 'tasklist',
      autoLoadModels: true,
      synchronize: true,
      logging: false,
      models: [TaskModel],
    }),
    TaskModule,
  ],
})
export class AppModule {}