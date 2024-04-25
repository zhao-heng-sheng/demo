const bucket = new Set()

const data = {text:'htllo world'}

const obj = new Proxy(data,{
  get(target,p,receiver){
    console.log(target,p,receiver);
    return Reflect.get(target,p,receiver)
  },
  set(target,p,newValue,receiver){
    console.log(target,p,newValue,receiver);
    return Reflect.set(target,p,newValue,receiver)
  }
})
obj.text = '123'
console.log(obj.text);