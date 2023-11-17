const userList = [];
class User {
    constructor(name){
        this.name_ = name;
    }
    getName(){
        return this.name_;
    }
}
const proxy = new Proxy(User,{
    construct(target,argArr,newTarget){
        console.log(target,argArr,newTarget);
        let newUser = Reflect.construct(...arguments)
        userList.push(newUser)
        return newUser
    }
})
const user = new proxy('Jake');
const user2 = new proxy('Tom');
console.log(userList);