import { User } from "./User";
console.log(User)
let user = new User()  //Property 'username' has no initializer and is not definitely assigned in the constructor. ???  为什么nest里可以初始化，这里不行？
user.username = "admin";
user.password="123456";
console.log(user);