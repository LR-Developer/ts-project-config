import { ConnectionOptions } from 'typeorm-seeding';
import { Person } from '../../domain/entities/Person';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const typeOrmConnectionOptions: ConnectionOptions = {
  cli: {
    migrationsDir: 'src/infrastructure/database/migrations',
  },
  database: process.env.DATABASE_NAME,
  entities: [Person],
  factories: [],
  host: process.env.DATABASE_HOST,
  migrations: ['src/infrastructure/database/migrations/*.ts'],
  multipleStatements: true,
  namingStrategy: new SnakeNamingStrategy(),
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
  seeds: ['src/infrastructure/database/seeds/*.seed.ts'],
  synchronize: false,
  type: 'mysql',
  username: process.env.DATABASE_USERNAME,
};

export = typeOrmConnectionOptions;
