import { Module } from '@nestjs/common';
import 'dotenv/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { CoreModules } from './modules/index';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';

console.log(typeOrmConfig);
@Module({
	imports: [
		ConfigModule.forRoot({ load: [configuration] }),
		TypeOrmModule.forRootAsync({ useFactory: () => typeOrmConfig }),
		CoreModules
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
