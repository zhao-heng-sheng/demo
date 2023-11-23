import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Article } from './entity/Article';
import { Tag } from './entity/Tag';

AppDataSource.initialize().then(async () => {

    const a1 = new Article();
    a1.title = '文章1';
    a1.content = '文章1内容';
    const a2 = new Article();
    a2.title = '文章2';
    a2.content = '文章2内容';
    const t1 = new Tag();
    t1.name ="标签1";
    const t2 = new Tag();
    const t3 = new Tag();
    let user = new User();
    let user2 = new U

}).catch(error => console.log(error))
