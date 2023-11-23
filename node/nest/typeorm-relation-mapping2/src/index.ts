import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Department } from '../.history/src/entity/Department_20231123124604';

AppDataSource.initialize().then(async () => {

    const d1 = new Department

}).catch(error => console.log(error))
