import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelize } from './modules/task/infrastructure/database/sequelize/sequelize.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await sequelize.authenticate();
  await sequelize.sync();

  await app.listen(3000);

  console.log('🚀 App + DB rodando');
}
bootstrap();