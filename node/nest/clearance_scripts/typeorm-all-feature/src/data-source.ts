import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Aaa} from './entity/Aaa'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "111111",
    database: "practice",
    synchronize: true,
    logging: true,
    entities: [User,Aaa],
    migrations: [],
    subscribers: [],
    connectorPackage:'mysql2',
    extra:{
        authPlugin:'sha256_password'
    }
})
