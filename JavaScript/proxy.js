var obj = { a: 1 },
    handlers = {
        get(target, key, context) {
            // 注意：target === obj,
            // context === pobj
            console.log("accessing: ", key);
            return Reflect.get(target, key, context);
        },
        deleteProperty(target,key,context){
            console.log("deleting: ", key);
            return Reflect.deleteProperty(target, key, context);
        }
    },
    pobj = new Proxy(obj, handlers);
// delete obj.a
delete obj.a
console.log(pobj.a,'pobj.a');
console.log(obj.a,'obj.a');
// accessing: a
// 1
