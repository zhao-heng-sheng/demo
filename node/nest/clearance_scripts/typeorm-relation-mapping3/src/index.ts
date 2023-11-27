import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Article } from './entity/Article';
import { Tag } from './entity/Tag';

AppDataSource.initialize().then(async () => {

    // const a1 = new Article();
    // a1.title = '文章1';
    // a1.content = '文章1内容';
    // const a2 = new Article();
    // a2.title = '文章2';
    // a2.content = '文章2内容';
    // const t1 = new Tag();
    // t1.name ="标签1";
    // const t2 = new Tag();
    // t2.name = '标签2'
    // const t3 = new Tag();
    // t3.name = '标签3'
    // a1.tags = [t1,t2];
    // a2.tags = [t2,t3];
    // const entityMananger = AppDataSource.manager;
    // await entityMananger.save([t1,t2,t3,a1,a2]);


    // const articles = await AppDataSource.manager.find(Article,{
    //     relations:['tags']
    // })
    // // console.log(articles)
    // articles.forEach(article => {
    //     console.log(article.title)
    //     article.tags.forEach(tag => {
    //         console.log(tag)
    //     })
    // })

    const tags = await AppDataSource.manager.find(Tag,{
        relations:['articles']
    })
    tags.forEach(tag => {
        console.log(tag)
        tag.articles.forEach(article => {
            console.log(article)
        })
    })


}).catch(error => console.log(error))
