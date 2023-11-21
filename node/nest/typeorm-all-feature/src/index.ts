import { In } from "typeorm"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    // await AppDataSource.manager.save(User, [
    //     { firstName: 'ccc111', lastName: 'ccc', age: 21},
    //     { firstName: 'ddd222', lastName: 'ddd', age: 22},
    //     {  firstName: 'eee333', lastName: 'eee', age: 23}
    // ]);
    // const users = await AppDataSource.manager.findBy(User,{
    //     age:23
    // })
    // const [users,count] = await AppDataSource.manager.findAndCountBy(User,{
    //     age:23
    // })
    // const user = await AppDataSource.manager.find(User,{
    //     select:["firstName","lastName"],
    //     where:{
    //         id: In([3,4])
    //     },
    //     order:{age:'ASC'}
    // })
    // const queryBuilder = await AppDataSource.manager.createQueryBuilder();
    // const user = await queryBuilder.select('user').from(User,'user').where('user.age=:age',{age:21}).getMany()
    await AppDataSource.manager.transaction(async manager=>{
        let user = manager.getRepository(User)
        await user.save({
            age: 21,
            firstName: 'aaa',
            lastName: 'axa'
        })
        let users = await user.find()
        console.log(users)
    })
    // const users = await AppDataSource.manager.find(User)

}).catch(error => console.log(error))
