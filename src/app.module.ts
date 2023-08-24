import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';
import { env } from './env';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [MongooseModule.forRoot(env.MONGO_URL), ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
