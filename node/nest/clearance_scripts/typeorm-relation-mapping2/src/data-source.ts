import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User"
import { Department } from "./entity/Department"
import { Employee } from "./entity/Employee"
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
    entities: [Department,Employee],
    migrations: [],
    subscribers: [],
})
