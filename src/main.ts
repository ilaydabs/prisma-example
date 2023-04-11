

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


const config = new DocumentBuilder()
/*'DocumentBuilder' başlık, açıklama, sürüm vb. gibi özelliklerin ayarlanmasına izin veren 
çeşitli yöntemler sağlar. Tam bir belge oluşturmak için (tüm HTTP yolları tanımlı olarak) 
SwaggerModule sınıfının createDocument() yöntemini kullanırız. */
  .setTitle('Example')
  .setDescription('The API Description')
  .setVersion('1.0')
  .addTag('API')
  .build();

const document = SwaggerModule.createDocument(app, config);
//'document' SwaggerModule#crateDocument()töntemi tarafından döndürülür.
//HTTP aracılığıyla barındırmak yerine,onu bir json/yaml dosyası olarak da kaydedebilir.
SwaggerModule.setup('api', app, document);



  await app.listen(3000);
}
bootstrap();


