import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const env = process.env.NODE_ENV;

const typeOrmConfig: TypeOrmModuleOptions = {
	name: 'surprise-db',
	type: 'postgres',
	host: 'localhost',
	port:  5432,
	username: 'root',
	password:  'postgre',
	database:  'surprise-planners',
	entities: [__dirname + '/../modules/entities/*.entity.{ts,js}'],
	synchronize: env === 'development'
};

export { typeOrmConfig };
