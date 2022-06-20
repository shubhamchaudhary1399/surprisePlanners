import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const isProduction = process.env.STAGE === 'prod';

const typeOrmConfig: TypeOrmModuleOptions = {
	ssl: isProduction,
	extra: {
		ssl: isProduction ? { rejectUnauthorized: false } : null,
	},
	name: 'masterSurpriseDb',
	type: 'postgres',
	host: process.env.DB_HOST || 'localhost',
	port: Number.parseInt(process.env.DB_PORT) || 5432,
	username: process.env.DB_USERNAME || 'root',
	password:  process.env.DB_PASSWORD || 'postgre',
	database:  process.env.DB_DATABASE || 'surprise-planners',
	entities: [__dirname + '/../modules/entities/*.entity.{ts,js}'],
	synchronize: true
};

export { typeOrmConfig };
