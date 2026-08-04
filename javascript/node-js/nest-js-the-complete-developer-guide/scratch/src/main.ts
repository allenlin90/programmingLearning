import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.ts';

async function boostrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

boostrap();
