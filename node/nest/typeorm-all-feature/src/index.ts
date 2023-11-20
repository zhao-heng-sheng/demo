import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "xxx"
    user.age = 25
    user.id = 1
    await AppDataSource.manager.save(User,[
        {
            firstName:'aaa',
            lastName:'bbb',
            age:11
        },
        {
            firstName:'ccc',
            lastName:'ddd',
            age:22
        },
    ])
    await AppDataSource.manager.delete(User,1)
    const users = await AppDataSource.manager.find(User)
    // const ageUsers = await AppDataSource.manager.findBy()
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
