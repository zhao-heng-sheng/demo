import "reflect-metadata"
import { DataSource } from "typeorm"
import { Article } from './entity/Article';
import { Tag } from './entity/Tag';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "111111",
    database: "typeorm_test",
    connectorPackage:'mysql2',
    synchronize: true,
    logging: true,
    entities: [Article,Tag],
    migrations: [],
    subscribers: [],
})
