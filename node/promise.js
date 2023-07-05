a = (i)=>{
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(i)
            resolve({o:i,x:true})
        },3000)
    })
}
(async ()=>{
    let arr = [1,2,4,7]
    for(let item in arr){
        let res = await a(item)
        console.log(res)
    }
})()