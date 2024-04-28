import keys from "./key.js"
console.log(keys,'11');
// 匹配第一个，替换，记录下标，继续匹配
function replace(text,keys,reg){
    let result = text
    keys.forEach((key)=>{
        result = result.replace(key,`<span class="red">${key}</span>`)
    })
    return result
}