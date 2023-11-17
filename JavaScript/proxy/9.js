const wm = new WeakMap();
class User{
    constructor(userId){
        wm.set(this,userId)
    }
    set id(userId){
        wm.set(this,userId)
    }
    get id(){
        return wm.get(this)
    }
}
const user = new User(123);
console.log(wm)
console.log(user)