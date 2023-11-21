import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { IdCard } from './entity/IdCard';

AppDataSource.initialize().then(async () => {
    const user = new User()
    user.firstName = 'zhao'
    user.lastName = 'hs'
    user.age = 20;
    const idCard = new IdCard()
    idCard.cardName = '123456789'
    idCard.user = user
    await AppDataSource.manager.save(idCard)
    let users = await AppDataSource.manager.find(User)
    let idCards = await AppDataSource.manager.find(IdCard,{
        relations:['user']
    })
    console.log(users,idCards)
}).catch(error => console.log(error))
