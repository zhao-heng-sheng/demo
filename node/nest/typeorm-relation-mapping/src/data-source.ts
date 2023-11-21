import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {IdCard} from './entity/IdCard'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "111111",
    database: "typeorm_test",
    synchronize: true,
    logging: true,
    entities: [User,IdCard],
    migrations: [],
    subscribers: [],
    connectorPackage:'mysql2'
})
