function median(...nums){
    return nums.sort((a,b) => a-b)[Math.floor(nums.length/2)]
}
const proxy = new Proxy(median,{
    apply(target,thisArg,argumentList){
        console.log(thisArg);
        console.log(argumentList);
        if(argumentList.every(item=>typeof item === 'number')) return Reflect.apply(...arguments)
        throw new TypeError('All arguments must be numbers.')
    }
})
console.log(proxy(7,6,'5',4,3,2,1))