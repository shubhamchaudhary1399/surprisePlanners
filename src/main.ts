import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// console.log(process.env.NODE_ENV);
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = app.get(ConfigService);
	const port = config.get('port');
	await app.listen(port, () => {
		console.log(
			`Server is running on the port ${port} in ${config.get('env')} mode.`
		);
	});
}
bootstrap();
