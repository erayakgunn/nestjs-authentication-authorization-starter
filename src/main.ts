import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  const config = new DocumentBuilder()
  .setTitle('HeatZone').setDescription('HeatZone API description').setVersion('1.0').build();

  const document = SwaggerModule.createDocument(app, config);
  

  // if(module.hot){
  //   module.hot.accept();
  //   module.hot.dispose(()=> app.close());
  // }
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
